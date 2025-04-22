---
author: theapache64
pubDatetime: 2029-01-27T00:00:00+05:30
modDatetime: 2029-01-27T00:00:00+05:30
title: TPP - The Pragmatic Programmer
slug: 
    tpp
featured: false
draft: false
description: 
    TPP - The Pragmatic Programmer
tags:
    - reading
---

I don't read much, and I want to change that. I've read a couple of books, but it took me longer than it should have. I guess I'm a slow reader, and I prefer to think about what I read instead of skimming.

I’m starting a reading log for `The Pragmatic Programmer`. It has 53 topics, and I plan to read at least 2 topics a day, which will take about 26 days! 🥴

## Day 1 : Chapter 1 (Jan 27)
- **Foreword and Preface:** This part shows how the book's content is simple and timeless compared to other tech books. It highlights how intimidating other books can be and emphasizes the importance of simplicity, which is key to this book. Also, the chapters can be read in any order since they're independent.

> Tip 1: Care About Your Craft
> Tip 2: Think About Your Work

- **[It's Your Life](https://x.com/TlogOfTheDay/status/1884345281199890680):** People are complaining about issues at work but not taking action to fix them. This includes every complaint from developers. The goal is to take action until the problem is solved.
> Tip 3: You Have Agency

- **[The Cat Ate My Source Code](https://x.com/TlogOfTheDay/status/1884697560687784340):** Things can go wrong. Instead of blaming someone, focus on finding a solution. This chapter emphasizes the value of ownership as well.

> Tip 4: Provide Options, Don't Make Lame Excuses

## Day 2 (Jan 28)
- **[Software Entropy](https://x.com/TlogOfTheDay/status/1889408618279346401):** This chapter explains how tech debt originates, its impact on projects, and how to manage it. It uses a "broken window" analogy for real-world relatability. The key takeaway is to prevent tech debt and maintain clear actions items for existing tech debts.

> Tip 5: Don't Live with Broken Windows

- **[Stone Soup and Boiled Frogs](https://x.com/TlogOfTheDay/status/1891191104139083849):**  This chapter covers building something step by step and how to creatively persuade others to help you without causing resentment towards you or the project. 

> Tip 6: Be a Catalyst for Change
> Tip 7: Remember the Big Picture 


## Day 3 (Jan 29)
- **[Good-Enough Sofware](https://x.com/TlogOfTheDay/status/1891194941814026366):** 
    - First version of any system should only be "good enough" and shouldn't be the best
    - Know when to improve and when to stop
    - Set tight scope for each version
    - Ship as early as possible to get early feedback

> Tip 8: Make Quality a Requirements Issue

- **Your Knowledge Portfolio [1](https://x.com/TlogOfTheDay/status/1891393142823477465)[2](https://x.com/TlogOfTheDay/status/1891499846236008846):**
    - Develop a habit of learning different new things
    - Participate in local groups and meetups and understand what others are working
    - Read a book a month
    - Think critically (5 whys method)

> Tip 9 : Invest Regularly in Your Knowledge Portfolio
> Tip 10: Critically Analyze What You Read and Hear
> Failed to maintain consistency. Restarting on Feb 12


## Day 4 (Feb 11)
- **Communicate [1](https://x.com/TlogOfTheDay/status/1891760564432498910)[2](https://x.com/TlogOfTheDay/status/1891867015729774684):** 
    - Communication is equally important as your idea or work
    - Filter and convert your conversation based on your audience
    - Write an outline first before writing anything
    - Ask if its a good time before throwing a new idea at someone
    - Value the presentation style and model
    - Provide early drafts for early feedback
    - Listen, even if you already know 
    - Documentation is an intergral part of a good system

> Tip 11: English is Just Another Programming Language

> Tip 12: It's Both What You Say and the Way You Say It

> Tip 13: Build Documentation In, Don't Bolt It On

> This chapter was longer. Hence only one topic

## Day 5 : Chapter 2 (Feb 17)
- **[The Essence of Good Design](https://x.com/TlogOfTheDay/status/1892046451204579542):**
    - ETC (Easy to Change) is the base of all design principle
    - Well designed code basically means easy to change code
    - ETC is value, that guides you to choose the right path for your code
    - Always ask yourself the ETC value of the code you just wrote
    - Try to make what you write replaceable. If not sure, add placeholder tag for future

> Tip 14: Good Design is Easier to Change Than Bad Design 

## Day 6 (Feb 18)

- **DRY : The Evils of Duplication[1](https://x.com/TlogOfTheDay/status/1892404809141252222)[2](https://x.com/TlogOfTheDay/status/1894594991441207634)[3](https://x.com/TlogOfTheDay/status/1894958385113768013)**
    - DRY is not just about copy paste of code, rather duplication of knowledge. This include duplication in different way and in code comments as well.
    - Method/function documentation should be minimised and the code should be the documentation
    - Code duplciatation is okay in some case where it has different meaning at functional level
    - DRY violation in data shouldn't be exposed and should be mitigated with in the entity (or class)
    - Socialise common utilities where people will find it easy to reuse rather than creating their own version

> Tip 15: Don't Repeat Yourself
> Tip 16: Make It Easy to Reuse


## Day 7 (Feb 27)
- **Orthogonality[1](https://x.com/TlogOfTheDay/status/1895402562154573957)[2](https://x.com/TlogOfTheDay/status/1895728459361423786)**
    - Orthogonal systems = easy to design, build, test and extend
    - Independent systems where one's change doesn't affect the other 
    - Layered orthogonal systems are much easier to maintain due to the abstraction
    - Careful when introducing a library that imposes changes in your code
    - Write shy code - modules that don't reveal unneccesary thing about them and don't rely on other modules
    - Avoid global data
    - Writing test is itself is a test to check your code is orthogonal or not
    - When writing documentation, don't worry about style. Use something like Markdown
    - Combining DRY + Orthogonal code produces flexible systems 

> Tip 17: Eliminate Effects Between Unrelated Things

## Day 8 (Mar 3)
- **[Reversibility](https://x.com/TlogOfTheDay/status/1896417081203343627)**
    - Requirements and users change before you finish the code
    - Abstract your 3P integration code in a way that the 3P can be replaced easily with another one without changing any other Layered

> Tip 18: There Are No Final Decisions

> Tip 19: Forgo Following Fads!

## Day 9 (Apr 20)

- **Tracer Bullets**
    - Tracer Bullet Development is a way of building things with immediate feedback under actual conditions. During this time the goal may keep moving based on user feedback
    - End to end flow is covered, but only the essential blocks are built and mostly areas unknown and base to the product
    - Advantages:
        - Early feedback from users
        - Real world environment ready from day 1
        - Faster feedback for developers (faster debugging and testing because you're in real world env)
        - Up to date demo
        - Better feel and sense of progress since each update solves a usecase
        - Tracer code != prototyping because code is not thrown away, but being built up on
    
> Tip 20: Use Tracer Bullets to Find the Target

## Day 10 (Apr 21)
- **Prototypes and Post-it Notes**
    - Prototypes are used to analyse and expose risk.
    - They could be on a whiteboard, paper, mock up or even in code.
    - Correctness, completeness, robustness and style should NOT be part of the prototype 
    - They are disposable and should be cheap to develop
    - Prototyping gives you an environment to experiment and expose risk. This is often is a learning experience. 

> Tip 21: Prototype to learn