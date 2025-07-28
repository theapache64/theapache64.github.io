---
author: theapache64
pubDatetime: 2025-07-27T15:00:00+00:00
modDatetime: 2025-07-27T15:00:00+00:00
title: The Boy Who Loved Fireflies and Electronics
slug: 
    the-boy-who-loved-fireflies
featured: true
draft: false
description: 
    A heartwarming tale about curiosity, wonder, and the magic of nature's simplest creatures
tags:
    - storytelling
    - nature
    - childhood
---
There lived a boy who loved fireflies.  But in recent years, the fireflies stopped coming for some reason. He started missing them.

One day, while browsing the internet, he came accross a topic called "Astable Multivibrator"—a clever circuit that can blink an LED, even with a 1.5V battery, and that too for over a year if optimised well(yeah, running 24/7)
[image:3]

He thought, "I can make fireflies with this!"
[image:4]

But he didn’t know the basics of electronics, so he started learning: what is a resistor, a capacitor, and a transistor. He learned the basics one by one.
[image:5]

He used AI to ask his questions about basic electronics, even very simple ones.
[image:6]

Once he learned the items he needed to build the firefly, he rushed to the nearest electronics shop and bought the needed components.
[image:7]

He came back and built it, and luckily, it worked on the first try. Yes—the LED was blinking, but too fast. He asked Perplexity how to slow it down. Perplexity suggested increasing the resistance or the capacitor’s capacity.
[image:8]

Then he thought, "This blinks 24/7, but fireflies don’t blink all the time. I want them to blink only at night." Curious, he asked Perplexity: "How can I make this blink only at night?"
[image:9]

Perplexity suggested using an LDR—a Light Dependent Resistor—which changes resistance based on light. The boy was stunned: "That’s exactly what I need!" He double-checked if LDRs are real. They are! Excited, he took his bike and went to the electronics shop to buy a few LDRs.
[image:10]

He came home excitedly and started to solder the LDR into the circuit. "Nah... it’s not working," he thought. Something was missing. He dug deeper and realized Perplexity had suggested the wrong connection. He made the right connection and—voilà! The LED didn’t blink when the room light was on.
[image:11]

But it blinked in low light. He turned to Perplexity again and asked how to adjust the sensitivity. The answer was to add a resistor in series with the LDR to set the right sensitivity—not just change the resistance to 500k ohms.
[image:12]

To control the LED delay, he increased a 100k resistor to 500k, and the delay between each blink changed from 1s to 5s. He also experimented with different capacitors, which further changed the delay. To make this easier, he built his own simulator to predict the delay: https://a64.in/tools/astable-delay-simulator.html
[image:13]

After that, he wanted to verify if his resistor and capacitor values were optimal. He learned how to measure power consumption with a multimeter and discovered that using a lower-value capacitor and higher resistance was best. He then built another tool to calculate how long the circuit could run on a 1.5V AA battery—his calculations predicted 8.1 months. "That's good enough," he thought.
[image:14]

But the road was not always smooth. At one point, one of his circuit builds stopped working. He tested all the components one by one—everything was working. Losing hope, he went to bed. The next morning, he thought: "What if it's not the components—what if it's the wires?" He tested each jumper wire and realized that most were broken or had high resistance. (He learned this from Perplexity.) From then on, he began using proper hookup wires.
[image:15]

Then another interesting thing happened. One night, he realized he needed a 22μF capacitor instead of a 10μF. For the first time, he opened up a broken power supply board and carefully desoldered a 22μF capacitor. It felt like magic—free electronics components from broken boards!
[image:16]

Another highlight was his usual debugging step: putting the finished circuit in a dark room and looking from far away to see if it really looked like a firefly. This one little blinking light brought a big sense of joy.
[image:17]

At one point, to help with solder smoke, he ripped out a cooler fan from an old CPU and used it as a fume extractor—a creative hands-on hack.
[image:18]

Since his circuit was built freeform and powered by a battery, making it stand upright and neat was tricky. He tried using a glue gun, and even a 3D pen to create custom stands. Being inexperienced in these areas, he struggled, his designs looked pretty ugly—but they still worked.
[image:19]

By now, he had built five circuits. One was on a breadboard for tuning and testing. Once satisfied, he assembled the others using "dead bug" or freeform construction. He mounted the finished circuits in waterproof, transparent covers and placed them outside for his first real-world test—they worked, and that was good enough for him.
[image:20]

He took a pause and looked back… “What am I doing? Why am I so exhilarated?”
The last time he felt this deeply immersed was when he was learning his first programming language, PHP, 7 or 8 years ago. Now, he realized, he was once again fully absorbed—learning something entirely new, stumbling and getting back up every time he failed. That's what truly gave him a sense of purpose and excitement.
He thought, I should note this down… this is why I feel so alive when learning and building—falling, but always standing and learning again.
[image:21]

Now, he’s planning to build more of these “firefly” circuits and keep optimizing their performance.

To be continued...
[image:22]