---
title: Journey Through 0x3f DP List
description: Journey Through 0x3f LeetDode Dynamic Porgramming List
summary: A ProblemSet Tracker
published: '2025-05-16T23:31:08.000+08:00'
updated: '2025-05-16T23:31:08.000+08:00'
cover: ./cover.png
coverCaption: Bunnies Stan For NJ
coverStyle: 'RIGHT'
series_tag:
series_title:
# tag:
#   - [svelte-QWER]
tags:
  - LeetCode
# options:
#   - unlisted
---

## Introduction

Recently, I discovered a well-structured dynamic programming (DP) problem list curated by [0x3f](https://github.com/EndlessCheng), a respected figure in the Chinese LeetCode community. His list offers a progressive roadmap for mastering dynamic programming, starting from basic concepts like climbing stairs and house robber, all the way to hard-level problems involving interval DP, decision monotonicity, and digit DP.

[Origial Post From 靈茶山艾府](https://leetcode.cn/discuss/post/3581838/fen-xiang-gun-ti-dan-dong-tai-gui-hua-ru-007o/)

## Why I'm Doing This

Although I’ve solved various DP problems before, I often find myself struggling with identifying the right state transition or building intuition quickly during contests or interviews. This list gives me a clear structure to review, consolidate, and deepen my understanding of different DP paradigms. By completing it, I hope to:

 - Strengthen my DP intuition through categorization and repetition

 - Build a reference sheet of my own optimized solutions

 - Document pitfalls and tricks along the way for future review

I’ll update this post as I make progress, including notes and solution links.

## DP Tracker

> All are classified according to original problemset.

<div style="color: #000 !important;">
<tbody style="color: #000 !important;">
<!-- DP Problem Tracker -->
<div style="padding: 2em; margin: 1em 0; background: #f1f8e9; border: 2px solid #aed581; border-radius: 10px;">
  <h2 style="margin-top:0; color: #33691e;">1. Introductory DP</h2>
  <p style="color: #33691e;">1.1 Climbing Stairs </p>

  <table style="width: 100%; border-collapse: collapse; background: #ffffff;">
    <thead style="background-color: #dcedc8;">
      <tr>
        <th style="padding: 10px; border: 1px solid #c5e1a5;">✅</th>
        <th style="padding: 10px; border: 1px solid #c5e1a5;">Topic</th>
        <th style="padding: 10px; border: 1px solid #c5e1a5;">Problem</th>
        <th style="padding: 10px; border: 1px solid #c5e1a5;"> My Submission </th>
      </tr>
    </thead>
    <tbody>
      {#each [
        {
          topic: "Climbing Stairs",
          name: "Climbing Stairs",
          id: 70,
          url: "https://leetcode.com/problems/climbing-stairs",
          solution: "https://leetcode.com/problems/climbing-stairs/submissions/1149915155",
          done: true
        },
        {
          topic: "Climbing Stairs",
          name: "Min Cost Climbing Stairs",
          id: 746,
          url: "https://leetcode.com/problems/min-cost-climbing-stairs/",
          solution: "https://leetcode.com/problems/min-cost-climbing-stairs/submissions/937508226",
          done: true
        },
        {
          topic: "Climbing Stairs",
          name: "Combination Sum IV",
          id: 377,
          url: "https://leetcode.com/problems/combination-sum-iv/",
          solution: "https://leetcode.com/problems/combination-sum-iv/submissions/1635703587",
          done: true
        },
        {
          topic: "Climbing Stairs",
          name: "Count Ways To Build Good Strings",
          id: 2466,
          url: "https://leetcode.com/problems/count-ways-to-build-good-strings/",
          solution: "https://leetcode.com/problems/count-ways-to-build-good-strings/submissions/1641234461",
          done: true
        },
        {
          topic: "Climbing Stairs",
          name: "Count Number of Texts",
          id: 2266,
          url: "https://leetcode.com/problems/count-number-of-texts/description/",
          solution: "https://leetcode.com/problems/count-number-of-texts/submissions/1641235812",
          done: true
        },
      ] as prob}
      <tr>
        <td style="text-align: center; padding: 10px; border: 1px solid #e6ee9c;">
          <input type="checkbox" bind:checked={prob.done} />
        </td>
        <td style="padding: 10px; border: 1px solid #e6ee9c;"> {prob.topic} </td>
        <td style="padding: 10px; border: 1px solid #e6ee9c;">
          <a href={prob.url} target="_blank" style="color: #000 !important;"> #{prob.id} {prob.name} </a>
        </td>
        <td style="padding: 10px; border: 1px solid #e6ee9c;">
          {#if prob.solution !== ""}
            <a href={prob.solution} target="_blank" style="color: #000 !important;"> Link</a>
          {:else}
            <em style="color: #999;">(Happy Birthday, Haerin)</em>
          {/if}
        </td>
      </tr>
      {/each}
    </tbody>
  </table>

  <p style="color: #33691e;">1.2 House Robber </p>

  <table style="width: 100%; border-collapse: collapse; background: #ffffff;">
    <thead style="background-color: #dcedc8;">
      <tr>
        <th style="padding: 10px; border: 1px solid #c5e1a5;">✅</th>
        <th style="padding: 10px; border: 1px solid #c5e1a5;">Topic</th>
        <th style="padding: 10px; border: 1px solid #c5e1a5;">Problem</th>
        <th style="padding: 10px; border: 1px solid #c5e1a5;"> My Submission </th>
      </tr>
    </thead>
    <tbody>
      {#each [
        {
          topic: "House Robber",
          name: "House Robber",
          id: 198,
          url: "https://leetcode.com/problems/house-robber/description/",
          solution: "https://leetcode.com/problems/house-robber/submissions/1641237214",
          done: true
        },
        {
          topic: "House Robber",
          name: "House Robber II",
          id: 213,
          url: "https://leetcode.com/problems/house-robber-ii/description/",
          solution: "https://leetcode.com/problems/house-robber-ii/submissions/1641237709",
          done: true
        },
        {
          topic: "House Robber",
          name: "Count Number of Ways to Place Houses",
          id: 2320,
          url: "https://leetcode.com/problems/count-number-of-ways-to-place-houses/description//",
          solution: "https://leetcode.com/problems/count-number-of-ways-to-place-houses/submissions/1641238415",
          done: true
        },
        {
          topic: "House Robber",
          name: "Delete and Earn",
          id: 740,
          url: "https://leetcode.com/problems/delete-and-earn/description/",
          solution: "https://leetcode.com/problems/delete-and-earn/submissions/1641239244",
          done: true
        },
        {
          topic: "House Robber",
          name: "Maximum Total Damage With Spell Casting",
          id: 3186,
          url: "https://leetcode.com/problems/maximum-total-damage-with-spell-casting/description/",
          solution: "https://leetcode.com/problems/maximum-total-damage-with-spell-casting/submissions/1696041440/",
          done: true
        },
        {
          topic: "House Robber",
          name: "Solving Questions With Brainpower",
          id: 2140,
          url: "https://leetcode.com/problems/solving-questions-with-brainpower/description/",
          solution: "https://leetcode.com/problems/solving-questions-with-brainpower/submissions/1696040171/",
          done: true
        },
      ] as prob}
      <tr>
        <td style="text-align: center; padding: 10px; border: 1px solid #e6ee9c;">
          <input type="checkbox" bind:checked={prob.done} />
        </td>
        <td style="padding: 10px; border: 1px solid #e6ee9c;"> {prob.topic} </td>
        <td style="padding: 10px; border: 1px solid #e6ee9c;">
          <a href={prob.url} target="_blank" style="color: #000 !important;"> #{prob.id} {prob.name} </a>
        </td>
        <td style="padding: 10px; border: 1px solid #e6ee9c;">
          {#if prob.solution !== ""}
            <a href={prob.solution} target="_blank" style="color: #000 !important;"> Link</a>
          {:else}
            <em style="color: #999;">(Happy Birthday, Haerin)</em>
          {/if}
        </td>
      </tr>
      {/each}
    </tbody>
  </table>

  <p style="color: #33691e;">1.3 Maximum Subarray </p>

  <table style="width: 100%; border-collapse: collapse; background: #ffffff;">
    <thead style="background-color: #dcedc8;">
      <tr>
        <th style="padding: 10px; border: 1px solid #c5e1a5;">✅</th>
        <th style="padding: 10px; border: 1px solid #c5e1a5;">Topic</th>
        <th style="padding: 10px; border: 1px solid #c5e1a5;">Problem</th>
        <th style="padding: 10px; border: 1px solid #c5e1a5;"> My Submission </th>
      </tr>
    </thead>
    <tbody>
      {#each [
        {
          topic: "Maximum Subarray",
          name: "Maximum Subarray",
          id: 53,
          url: "https://leetcode.com/problems/maximum-subarray/description/",
          solution: "https://leetcode.com/problems/maximum-subarray/submissions/794567138",
          done: true
        },
        {
          topic: "Maximum Subarray",
          name: "Find the Substring With Maximum Cost",
          id: 2606,
          url: "https://leetcode.com/problems/find-the-substring-with-maximum-cost/description/",
          solution: "https://leetcode.com/problems/find-the-substring-with-maximum-cost/submissions/1733223316",
          done: true
        },
        {
          topic: "Maximum Subarray",
          name: "Maximum Absolute Sum of Any Subarray",
          id: 1749,
          url: "https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/description/",
          solution: "https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/submissions/1733224554",
          done: true
        },
        {
          topic: "Maximum Subarray",
          name: "K-Concatenation Maximum Sum",
          id: 1191,
          url: "https://leetcode.com/problems/k-concatenation-maximum-sum/description/",
          solution: "https://leetcode.com/problems/k-concatenation-maximum-sum/submissions/1733226015",
          done: true
        },
        {
          topic: "Maximum Subarray",
          name: "Maximum Sum Circular Subarray",
          id: 918,
          url: "https://leetcode.com/problems/maximum-sum-circular-subarray/description/",
          solution: "https://leetcode.com/problems/maximum-sum-circular-subarray/submissions/1733227017",
          done: true
        },
        {
          topic: "Maximum Subarray",
          name: "Maximum Score Of Spliced Array",
          id: 2321,
          url: "https://leetcode.com/problems/maximum-score-of-spliced-array/description/",
          solution: "https://leetcode.com/problems/maximum-score-of-spliced-array/submissions/1733228174",
          done: true
        },
        {
          topic: "Maximum Subarray",
          name: "Maximum Product Subarray",
          id: 152,
          url: "https://leetcode.com/problems/maximum-product-subarray/description/",
          solution: "https://leetcode.com/problems/maximum-product-subarray/submissions/1733229493",
          done: true
        },
        {
          topic: "Maximum Subarray",
          name: "Maximum Subarray Sum with One Deletion",
          id: 1186,
          url: "https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/description/",
          solution: "",
          done: false
        },
      ] as prob}
      <tr>
        <td style="text-align: center; padding: 10px; border: 1px solid #e6ee9c;">
          <input type="checkbox" bind:checked={prob.done} />
        </td>
        <td style="padding: 10px; border: 1px solid #e6ee9c;"> {prob.topic} </td>
        <td style="padding: 10px; border: 1px solid #e6ee9c;">
          <a href={prob.url} target="_blank" style="color: #000 !important;"> #{prob.id} {prob.name} </a>
        </td>
        <td style="padding: 10px; border: 1px solid #e6ee9c;">
          {#if prob.solution !== ""}
            <a href={prob.solution} target="_blank" style="color: #000 !important;"> Link</a>
          {:else}
            <em style="color: #999;">(Happy Birthday, Haerin)</em>
          {/if}
        </td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>
