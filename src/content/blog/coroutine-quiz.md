---
author: theapache64
pubDatetime: 2029-07-28T00:00:00+00:00
modDatetime: 2029-08-02T00:00:00+00:00
title: Coroutine Coding Quiz
slug: coroutine-quiz
featured: false
draft: false
description: Test your knowledge of Kotlin coroutines with this challenging coding quiz
tags:
  - kotlin
  - coroutines
  - quiz
  - programming
---

Test your Kotlin coroutine knowledge with this quiz! I'm planning to create multiple coroutine quizzes ranging from beginner to advanced levels. Each question has three choices in expandable sections, and you'll need to click to reveal the answer and explanation.

## Q1

What will be the output of this code?

```kotlin
fun main(args: Array<String>) {
    runBlocking {
        println("result is ${myFun()}")
    }
}

suspend fun myFun(): Int {
    return coroutineScope {
        var x = 0
        launch {
            delay(1000)
            x += 100
        }

        launch {
            delay(3000)
            x += 200
        }
        return@coroutineScope x
    }
}
```

### Choices

- result is 0
- result is 300
- doesn't compile


### Answer

<details>
<summary>Click to reveal the answer</summary>

**Answer: `result is 0`**

**Explanation:**

The key here is understanding how `coroutineScope` works with `launch`. The `coroutineScope` function waits for all child coroutines to complete before returning, BUT the output is `0` because the `return@coroutineScope x` statement executes immediately, before the delays in the launch blocks have finished.

</details>

---

