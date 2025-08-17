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

## Q2

What will be the output of this code

```kotlin
fun main(args: Array<String>) {
    runBlocking {
        repeat(4) { x ->
            println("${myFun(x)}")
        }
        println("done")
    }
}

suspend fun myFun(x: Int): Int = coroutineScope {
    val handler = CoroutineExceptionHandler { context, throwable ->
        println("caught")
    }
    return@coroutineScope async(handler + SupervisorJob()) {
        if (x == 2) {
            throw IOException("bhoom!")
        }
        x
    }.await()
}
```

### Choices

- 0, 1, caught, 3, done
- 0, 1, process die with `IOException`
- 0, 1, caught, done

### Answer

<details>
<summary>Click to reveal the answer</summary>

**Answer: `0, 1, process die with IOException`**

**Explanation:**

The `async` coroutines hold any exception occured within it and rethrown only when you call `.await()` or `.awaitAll()`. The attached `CoroutineExceptionHandler` won't be triggered because the exception is already "caught" (and held) by the `async` block. In this case, since it'll be rethrown outside `handler` scope, this will then propogate back and kill the process.  

</details>
---

