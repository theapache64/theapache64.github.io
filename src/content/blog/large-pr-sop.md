---
author: theapache64
pubDatetime: 2024-11-17T00:19:41+05:30
modDatetime: 2024-11-19T00:04:23+05:30
title: Large PR SOP
slug: large-pr-sop
featured: false
draft: false
description: How I organize my PRs when building large features
tags:
  - productivity
---

# Large PR SOP

When building features, especially large features that touch different parts of the app, PRs can naturally become larger in size. This size can be a headache during the PR review process for both the author and the reviewer. To address this, I follow this SOP:

- When I start working on the PR, I immediately cut a branch from my trunk branch. Let’s call it `my-feature`.
- For the first code change, I cut a branch from `my-feature`. Let’s call it `part-1`.
- As I progress, I cut branches from `my-feature` or any branch that was cut from it, including child branches. For example, I might cut a branch from `part-1` and call it `part-1.1`.
- Once I’ve implemented my feature, I check the necessity of each branch and merge them into their parent if they are not needed as separate PRs. For example, if `part-1.1` has a code refactor that has already been implemented in `part-1`, and merging it results in fewer than 100 additional lines in the PR (and doesn’t significantly increase the parent PR size > 500 lines), I merge `part-1.1` into `part-1`. This is evaluated on a case-by-case basis.

![image](https://github.com/user-attachments/assets/bf2d237e-f787-4d29-b096-31c3c0decfdd)

- Once my branches are organized, I submit the PRs separately for review.
- After the reviews are approved, I merge everything back into the `my-feature` branch and do one round of "Self Review"
- If anything is found during the self-review, I'll create a branch from `my-feature`, e.g., `my-feature-patch`, and request review separately before merging it back into `my-feature`.
- Finally, I ask PR reviewers to approve just the merge commit on the final PR which they already reviewed and approved (not the entire PR).
- Done.
