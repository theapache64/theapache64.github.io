---
author: theapache64
pubDatetime: 2025-05-12T00:09:20+05:30
modDatetime: 2025-11-10T00:47:20+05:30
title: Why and How I am building a smarter TODO app.
slug: todx
featured: false
draft: false
description: Solving a personal itch by creating a non-boring TODO app.
tags:
  - productivity
---

i have a personal itch: todo apps and todo lists are boring and don't work for me.  
i plan a productive day, but new ad hoc tasks come in or i get lost in messages, meetings, and emails, forgetting my plan until it's too late.  
in the rush for productivity, i also forget to schedule necessary breaks and end up burned out.  
most todo apps need precise time entries, making planning a boring and time-consuming task.  
so i built a tiny tool to schedule my day, and i call it TODx.

## What makes TODx different?

### Just tell it what you want to do

no complex interfaces.  
just tell it what needs to be done in raw format.

![](todx_home.png)

### It knows your routine

it knows what your typical day looks like and schedules accordingly.  
you don't have to repeat your routine each time.

![](todx_routine.png)

### Smart break scheduling

it can automatically fill break slots using techniques like pomodoro to keep you fresh.

![](todx_todos.png)

### Zen Mode

zen mode automatically fixes your vague/chaotic or overwhelming burnout plan.

![zen mode sample](image-58.png)

### Built-in alerts and timers

the android app sends notifications and timers.  
you never miss a task or break.

![](todx_android.png)

### It scans your handwritten TODOs

sometimes people prefer writing things on paper.
these can be scanned and used in the same way.

![](todx_scan.mp4.gif)

## How it works?

- **Backend** : Ktor, Postgres (via Exposed), **OpenAI/Gemini APIs**
- **Web App** : Compose Html and DaisyUI v4
- **Android App** : Jetpack Compose (KMP, ie Portable to iOS if there's enough interest)

## My experience

i've been using todx for several days and constantly improving it based on my usage.
i am still tuning the tool and fixing bugs to make it work seamlessly for me.

## Want to try it?

you can go to https://todx.today and try it 🙌🏼
