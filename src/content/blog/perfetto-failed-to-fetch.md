---
author: theapache64
pubDatetime: 2025-12-28T08:30:00+00:00
modDatetime: 2025-12-28T08:30:00+00:00
title: Fix for Perfetto's Failed to Fetch Error 
slug: perfetto-failed-to-fetch
featured: false
draft: false
description: How to fix the "Could not load local trace TypeError Failed to fetch" error in Perfetto UI
tags:
  - productivity
---

I love the `record_android_trace` [script](https://github.com/google/perfetto/blob/main/tools/record_android_trace) from Perfetto. 
It makes the trace recording + uploading process easy with just a couple of keystrokes. 
No more manually dragging files into the UI or dealing with file paths - just run the script, and boom, your trace opens right in the browser.

But yesterday, when I ran it, I got hit with this error:

> **Could not load local trace TypeError: Failed to fetch**

Hmm. This used to work perfectly fine. What changed?

Looking at the browser console, I found the culprit:

```
Access to fetch at 'http://127.0.0.1:9001/sample.trace' from origin 
'https://ui.perfetto.dev' has been blocked by CORS policy: 
Permission was denied for this request to access the `unknown` address space.
```

So it's a **CORS policy** thingy but is this new? 
I found the [blog post](https://developer.chrome.com/blog/local-network-access) related to this. 
Basically, the browser is now blocking requests from `https://ui.perfetto.dev` to `localhost` (local network). 
It treats requests from public websites to local/private IP addresses as potentially dangerous and block them by default. (TIL)


## The Quick Fix

Turns out you can launch Chromium-based browsers with relaxed web security for local development:

```bash
open -a "Arc" --args --disable-web-security --user-data-dir=~/chromeTemp
```

This bypasses the CORS restrictions for that browser session. Not ideal for everyday browsing, but perfect for local trace viewing.

## The Better Fix: Modify the Script

Rather than manually launching a special browser window every time, I modified the `record_android_trace` script to do it automatically.

**Before (original script):**

```python
def open_trace_in_browser(path, open_browser, origin):
  # We reuse the HTTP+RPC port because it's the only one allowed by the CSP.
  PORT = 9001
  path = os.path.abspath(path)
  os.chdir(os.path.dirname(path))
  fname = os.path.basename(path)
  socketserver.TCPServer.allow_reuse_address = True
  with socketserver.TCPServer(('127.0.0.1', PORT), HttpHandler) as httpd:
    address = f'{origin}/#!/?url=http://127.0.0.1:{PORT}/{fname}&referrer=record_android_trace'
    if open_browser:
      webbrowser.open_new_tab(address)
    else:
      print(f'Open URL in browser: {address}')

    httpd.expected_fname = fname
    httpd.fname_get_completed = None
    httpd.allow_origin = origin
    while httpd.fname_get_completed is None:
      httpd.handle_request()
```

**After (with the fix):**

```python
def open_trace_in_browser(path, open_browser, origin):
  # We reuse the HTTP+RPC port because it's the only one allowed by the CSP.
  PORT = 9001
  path = os.path.abspath(path)
  os.chdir(os.path.dirname(path))
  fname = os.path.basename(path)
  socketserver.TCPServer.allow_reuse_address = True
  with socketserver.TCPServer(('127.0.0.1', PORT), HttpHandler) as httpd:
    address = f'{origin}/#!/?url=http://127.0.0.1:{PORT}/{fname}&referrer=record_android_trace'
    subprocess.Popen([
        'open', '-a', 'Arc', address, '--args',
        '--disable-web-security',
        '--user-data-dir=' + os.path.expanduser('~/chromeTemp'),
    ])

    httpd.expected_fname = fname
    httpd.fname_get_completed = None
    httpd.allow_origin = origin
    while httpd.fname_get_completed is None:
      httpd.handle_request()
```

The key change: instead of using Python's `webbrowser.open_new_tab()`, we use `subprocess.Popen()` to launch the browser directly with the `--disable-web-security` flag and a temporary user data directory.

You can swap `'Arc'` with `'Google Chrome'` or whatever Chromium-based browser you use.

## Full Modified Script

I've put together the full modified script here: [gist.github.com/theapache64/38f074d0b1d4f3298aaa89f5cbb068da](https://gist.github.com/theapache64/38f074d0b1d4f3298aaa89f5cbb068da)

## Alternate Approach

You can go to `chrome://flags/#local-network-access-check` and disable it browser-wide. 
But I'd not recommend this as it reduces your browser's security for all sites.

## Final Thoughts

I think Perfetto needs to implement a permission request for LAN access.
![demo-lan-request](image-59.png)

If you've a better fix, let me know.  
For now, this workaround works.  

Happy tracing! 🔍
