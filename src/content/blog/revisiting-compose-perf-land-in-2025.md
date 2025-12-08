---
author: theapache64
pubDatetime: 2025-12-08T00:00:00+05:30
modDatetime: 2025-12-08T00:00:00+05:30
title: Revisiting Compose Perf-Land in 2025
slug: revisiting-compose-perf-land-2025
featured: false
draft: false
description: Revisiting Jetpack Compose performance patterns and assumptions in 2025 to see what has changed
  - performance
  - jetpack-compose
---

Back in 2023, I spent a considerable amount of time diving deep into Jetpack Compose performance. I built a decent understanding of how Compose works under the hood. Concepts like recomposition, compiler metrics, what makes a data model unstable, and why certain composable functions skip recomposition while others don't. These were things I actively tracked and optimized for (because we had a ton of performance issues back then).

Fast forward to today, and it's been nearly 2 years since that deep dive. The framework has evolved, and I found myself wondering: Are those techniques and mental models still valid? Has Compose gotten smarter about handling performance on its own? Are there new tools I should be aware of?

This blog post is essentially my attempt to answer those questions. Think of it less as a comprehensive guide and more as a personal revalidation exercise - double-checking assumptions, exploring what's changed in the landscape, and documenting findings along the way.

If you're someone who learned Compose performance patterns a few years ago and hasn't revisited them since, this might be a useful checkpoint for you too.

---

## Revalidating Assumptions

**Q: Do we still need Compose Compiler Metrics? Are there any better tools?**

**A:** Yes, checking stability is still useful. While the CCM metrics are the gold standard, there are easier visual tools now like the [Compose Stability Analyzer](https://github.com/skydoves/compose-stability-analyzer) by @skydoves.
Note that at the time of writing, it has a [known bug](https://github.com/skydoves/compose-stability-analyzer/issues/18) regarding strong skipping reporting, but a fix is expected soon.

**Q: What exactly is "Strong Skipping"?**

**A:** It is a new compiler mode (enabled by default in Kotlin 2.0.20+) that relaxes the rules for skipping. 
Previously, if you passed an unstable object to a composable, it would never skip. With Strong Skipping, Compose checks if the object instance is the same as before (using reference equality `===`). 
If it's the same instance, it skips recomposition, even if the class is technically "unstable."


```kotlin
// A technically "Unstable" class (contains var)
class UserState(var name: String)

@Composable
fun UserProfile(state: UserState) {
    // Before: This would ALWAYS recompose because UserState is unstable.
    // After (Strong Skipping): This SKIPS if 'state' is the same instance.
    Text(text = state.name)
}
```

**Q: Do classes from external modules (libraries) still make a composable unstable?**

**A:** Technically yes, because the compiler can't verify them. However, with Strong Skipping, this is _largely_ a non-issue. 
As long as you pass the same object instance, Strong Skipping will successfully skip the composable.

**Q: Does using a `List` still make a data class unstable?**

**A:** Yes, standard collections like `List`, `Set`, and `Map` are considered unstable. However, if you are just holding a list in a state variable and passing it down, Strong Skipping will handle it gracefully by checking if the list reference hasn't changed.

**Q: So, is the `@Immutable` annotation basically useless now?**

**A:** No, it is still critical. Strong Skipping only skips if the object *reference* is identical. If you have "derived data" (like filtering or sorting a list), you create a *new* list instance with the *same* data. Strong Skipping will fail here (because the references are different), causing unnecessary recomposition. `@Immutable` fixes this by forcing Compose to check the *content* (`equals()`) instead of the reference.

```kotlin
@Composable
fun UserListScreen(users: List<User>) {
    // ⚠️ PROBLEM: .filter creates a NEW list instance every time.
    // Strong Skipping sees (oldList !== newList) and recomposes ChildList.
    val activeUsers = users.filter { it.isActive }

    ChildList(activeUsers)
}

// ✅ SOLUTION: Wrap it in an @Immutable class.
// Compose will now check activeUsers.equals() instead of reference equality.
@Immutable
data class UserState(val users: List<User>)
```

**Q: Is `kotlinx.collections.immutable.*` the only solution for collections?**

**A:** No. You can also use a simple wrapper class annotated with `@Immutable` (e.g., `data class UserList(val list: List<User>)`). Both approaches work by switching the check from reference equality (`===`) to content equality (`equals()`).

```kotlin
// Option A: The Wrapper Pattern
@Immutable
data class ImmutableList<T>(val items: List<T>)

// Option B: Kotlinx Immutable
// val items: ImmutableList<User> = persistentListOf(...)
```

**Q: What is the difference between "Restartable" and "Skippable"?**

**A:** "Restartable" means a function can serve as an entry point to begin re-executing code (a scope). 
"Skippable" means if the inputs haven't changed, Compose can choose to not run that function at all. 
Most composables are both, but Strong Skipping makes almost all restartable functions skippable.

**Q: Doesn't checking `equals()` on a large list hurt performance?**

**A:** It costs CPU time (math), but it saves UI time (layout and drawing). Generally, verifying that two lists are equal (O(N)) is significantly cheaper than recreating the entire UI tree for that list. However, for massive lists (10k+ items), you should avoid standard `equals()` and use a wrapper with a unique version ID for O(1) comparison.

```kotlin
@Immutable
data class HugeData(
    val id: String = UUID.randomUUID().toString(), // Unique ID
    val items: List<Item> // 10,000 items
) {
    // Fast comparison: Check ID only, ignore the list content
    override fun equals(other: Any?): Boolean {
        return other is HugeData && other.id == this.id
    }
}
```

# Conclusion

The landscape of Compose performance in 2025 is much better than it was in 2023. 
The introduction of Strong Skipping in Kotlin 2.0.x has effectively killed "Stability Worry". 
We no longer need to fear _every_ `List` or external class potentially ruining our skip logic. 

going forward, this wil be my approach:

1.  **Write idiomatic Kotlin.** Trust Strong Skipping to handle the basics.
2.  **Use `@Immutable/@Stable` for domain models.** It’s a cheap insurance policy for derived data.
3.  **Defer reads (Lambdas).** This remains the most effective way to isolate recomposition scopes.
4.  **Profile, don't guess.** Reach for compose tracing, the Compiler Metrics or Stability Analyzer to debug dropped frames.
---