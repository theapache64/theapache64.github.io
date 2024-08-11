---
author: theapache64
pubDatetime: 2020-03-12t00:00:00+05:30
modDatetime: 2024-08-12t00:00:00+05:30
title: automotion - how i automated video editing
slug: how-i-automated-video-editing
featured: true
draft: false
description: 
     frustrated by the time-consuming process of video editing, decided to automate the task using programming and tools like ffmpeg.
tags:
  - productivity
  - ffmpeg
  - video-editing
  - automation
---

> note : this blog was originally written in 2020

## 💭 the thought 

while watching youtube videos, i would often dream about becoming a youtuber, as i'm sure many of us do 😄. i feel like i have a wealth of knowledge i'd like to share with the world. small tutorial videos, talking about how i develop my hobby projects, and providing developers some productivity tips. just something, anything, even if on a small scale. but to do these things, 🙄 i'd have to:

- learn the fundamentals of video editing and how to use various editing software 📔
- spend a good portion of time editing my video projects 👨‍💻 
- do the usual, and often repetitive, drop-crop-trim process ✂️ 
- switch from ubuntu, my primary os that i love, as most of the professional video editing software works only on windows/macos 😥
- spend a lot of time waiting for the final output to render ⏳ 
- and many other reasons to push me away from my dream 🙄 

i know, i know. all these things make me sound like a really lazy person. that's because i am! 😁 so what do i do?

## 🌩️ moment of inspiration 

> i know some silly programming. would i be able to automate this process?

i asked myself, and that was it. what did i have to lose? 🤷‍♂️ so i decided to try and automate this process.

## 🕵️ research 

i've heard that [ffmpeg](https://ffmpeg.org) is a good tool to process video frames. so i quickly browsed through the docs, and found that it's pretty straightforward even for a simpleton like me. 

## 🤖 core feature 

let's say we've an input video of 10 minutes, and if it has 1 minute of non-talking area (the area where no one is talking) after every 2 minutes, it'd look something like this

![input](https://dev-to-uploads.s3.amazonaws.com/i/cnd67n5pu4d3c0zvppyx.png)

i want to timelapse those red areas to 15 seconds of footage. so the total video length becomes 7 minutes and 45 seconds. 

also, while running the timelapse, i want to replace the footage's raw audio with some cool bgm 🥁.

so this was the core feature i wanted to implement in this thing, for which i had not decided a name at that point.

## ⌨️ initial development

i created a `shell script` to process a sample video i downloaded from youtube. i wrote some basic stuff in it, like

- adding intro
- adding text to intro 
- trimming video parts
- timelapse video parts
- adding background music
- adding watermark
- adding end credits

it took me 3 days to write it all by hand. i just wanted to check if `ffmpeg` has the potential to do what i want it to, and it really impressed me, going beyond my expectations.

next thing i wanted to do was generate these `ffmpeg` commands dynamically. 💣

## 🧑‍💻 code improvements

it took me around 5 days to code the entire program. then i proceeded to make some code improvements and made all possible input variables dynamic, which means you can control pretty much ***anything*** in it: timelapse speed, intro title, watermark title, minimum timelapse duration, you name it. 

here's the overview of the core stack:

 - language : [kotlin](https://kotlinlang.org) 🧠
 - video processing : [ffmpeg](https://ffmpeg.org) 🎞
 - audio processing : [autosub](https://github.com/agermanidis/autosub) 🎧
 - command line parsing : [commons-cli](https://commons.apache.org/proper/commons-cli/)

at this stage, i also settled on a name for this project, **auto-motion**.

now, let's run it! 🏃


## 🕹 input 

input is a 6 minutes video from [comma archive](https://www.youtube.com/channel/ucwgkmjm4zjqrj-u5njvr2dg), captured by  [george hotz](https://en.wikipedia.org/wiki/george_hotz) in a recent hackathon they conducted.

<iframe width="560" height="315" src="https://www.youtube.com/embed/0l_zU7XjWXo?si=vUWE35BT4-_9-m71" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>

## ⚙️ execution 

it only took ~1 minute to edit and render the output, whereas a manual edit would have taken hours, perhaps even days, to accomplish it. 🤷

<iframe width="560" height="315" src="https://www.youtube.com/embed/N0rORfltywU?si=yYnIhg8hC6-sgPdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>

## 📺 output 

the output, reduced to 4 minutes 43 seconds, is here. it includes 7 time-lapses of different lengths.

<iframe width="560" height="315" src="https://www.youtube.com/embed/t_vo1SYnMsg?si=hEa5kL0A-TYT1TY-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
 
i know the output is not as enjoyable as a manually edited one, but i believe i can improve this in due time 😇

## 📩 download 

You can view the source code and download the program from [GitHub](https://github.com/theapache64/auto-motion). Please note that this was originally written in 2020, and the testing was mostly done on Ubuntu. If you want to make this work in macOS or Windows, you probably have to tweak something. If there's enough interest from the community on this project, I'll make it compatible with other OSes too ;) 

## thanks for reading!

i'm really happy i wrote this and i'm excited to share more with you all. if you liked the post, do share it with your friends. feel free to post your suggestions for future posts! thank you for reading this. ciao!
