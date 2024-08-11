---
author: theapache64
pubDatetime: 2020-03-12T00:00:00+05:30
modDatetime: 2024-08-12T00:00:00+05:30
title: How I Automated Video Editing Using FFmpeg
slug: how-i-automated-video-editing
featured: true
draft: false
description: 
  Frustrated by the time-consuming process of video editing, I decided to automate the task using programming and tools like FFmpeg.
tags:
  - Productivity
  - FFmpeg
  - Video-Editing
  - Automation
---

> Note: This blog was originally written in 2020.

## 💭 The Thought 

While watching YouTube videos, I would often dream about becoming a YouTuber, as I'm sure many of us do 😄. I feel like I have a wealth of knowledge I'd like to share with the world. Small tutorial videos, talking about how I develop my hobby projects, and providing developers some productivity tips. Just something, anything, even if on a small scale. But to do these things, 🙄 I'd have to:

- Learn the fundamentals of video editing and how to use various editing software 📔
- Spend a good portion of time editing my video projects 👨‍💻 
- Do the usual, and often repetitive, drop-crop-trim process ✂️ 
- Switch from Ubuntu, my primary OS that I love, as most of the professional video editing software works only on Windows/macOS 😥
- Spend a lot of time waiting for the final output to render ⏳ 
- And many other reasons to push me away from my dream 🙄 

I know, I know. All these things make me sound like a really lazy person. That's because I am! 😁 So what do I do?

## 🌩️ Moment of Inspiration 

> I know some silly programming. Would I be able to automate this process?

I asked myself, and that was it. What did I have to lose? 🤷‍♂️ So I decided to try and automate this process.

## 🕵️ Research 

I've heard that [FFmpeg](https://ffmpeg.org) is a good tool to process video frames. So I quickly browsed through the docs and found that it's pretty straightforward even for a simpleton like me. 

## 🤖 Core Feature 

Let's say we've an input video of 10 minutes, and if it has 1 minute of non-talking area (the area where no one is talking) after every 2 minutes, it'd look something like this:

![input](https://dev-to-uploads.s3.amazonaws.com/i/cnd67n5pu4d3c0zvppyx.png)

I want to timelapse those red areas to 15 seconds of footage. So the total video length becomes 7 minutes and 45 seconds. 

Also, while running the timelapse, I want to replace the footage's raw audio with some cool BGM 🥁.

So this was the core feature I wanted to implement in this thing, for which I had not decided a name at that point.

## ⌨️ Initial Development

I created a `shell script` to process a sample video I downloaded from YouTube. I wrote some basic stuff in it, like:

- Adding intro
- Adding text to intro 
- Trimming video parts
- Timelapse video parts
- Adding background music
- Adding watermark
- Adding end credits

It took me 3 days to write it all by hand. I just wanted to check if `FFmpeg` has the potential to do what I want it to, and it really impressed me, going beyond my expectations.

The next thing I wanted to do was generate these `FFmpeg` commands dynamically. 💣

## 🧑‍💻 Code Improvements

It took me around 5 days to code the entire program. Then I proceeded to make some code improvements and made all possible input variables dynamic, which means you can control pretty much ***anything*** in it: timelapse speed, intro title, watermark title, minimum timelapse duration, you name it. 

Here's the overview of the core stack:

- Language: [Kotlin](https://kotlinlang.org) 🧠
- Video processing: [FFmpeg](https://ffmpeg.org) 🎞
- Audio processing: [AutoSub](https://github.com/agermanidis/autosub) 🎧
- Command line parsing: [Commons-CLI](https://commons.apache.org/proper/commons-cli/)

At this stage, I also settled on a name for this project, **Auto-Motion**.

Now, let's run it! 🏃

## 🕹 Input 

Input is a 6 minutes video from [Comma Archive](https://www.youtube.com/channel/ucwgkmjm4zjqrj-u5njvr2dg), captured by [George Hotz](https://en.wikipedia.org/wiki/george_hotz) in a recent hackathon they conducted.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0l_zU7XjWXo?si=vUWE35BT4-_9-m71" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>

## 🚀 Execution 

It only took ~1 minute to edit and render the output, whereas a manual edit would have taken hours, perhaps even days, to accomplish it. 🤷

<iframe width="560" height="315" src="https://www.youtube.com/embed/N0rORfltywU?si=yYnIhg8hC6-sgPdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>

## 📺 Output 

The output, reduced to 4 minutes 43 seconds, is here. It includes 7 time-lapses of different lengths.

<iframe width="560" height="315" src="https://www.youtube.com/embed/t_vo1SYnMsg?si=hEa5kL0A-TYT1TY-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
 
I know the output is not as enjoyable as a manually edited one, but I believe I can improve this in due time 😇

## 📩 Download 

You can view the source code and download the program from [GitHub](https://github.com/theapache64/auto-motion). Please note that this was originally written in 2020, and the testing was mostly done on Ubuntu. If you want to make this work in macOS or Windows, you probably have to tweak something. If there's enough interest from the community in this project, I'll make it compatible with other OSes too ;) 

## 📖 Thanks for reading!

I'm really happy I wrote this and I'm excited to share more with you all. If you liked the post, do share it with your friends. Feel free to post your suggestions for future posts! Thank you for reading this. Ciao!
