---
author: theapache64
pubDatetime: 2025-08-10T00:00:00+05:30
modDatetime: 2025-08-10T00:00:00+05:30
title: "Power of Two with Bitwise"
slug: power-of-two-with-bitwise
featured: false
draft: false
description: "Efficiently detect powers of two using bitwise operations in Kotlin with a simple AND trick."
tags:
  - performance
  - bitwise
---

## Detecting Powers of Two in Kotlin ⚡

In Kotlin, there’s a neat bit trick to check if a number is a power of two:  

```kotlin
fun isPowerOfTwo(n: Int): Boolean {
    return n > 0 && (n and (n - 1)) == 0
}
```

**Why it works:**  
A power of two’s binary representation has **exactly one bit set**:  

```
1   -> 0001
2   -> 0010
4   -> 0100
8   -> 1000
```

Subtracting 1 flips all bits after that `1` into `1`s and clears the `1` bit itself:  

```
8 (1000)  
7 (0111)
```

Now bitwise `and` doesn't match with any bit, resulting in all `0`:  

```
1000
& 0111
------
0000
```

This makes the check extremely fast — no loops, no math functions — just pure bitwise magic 🙌🏼

