---
title: Sorting
draft: false
date: 2020-08-03T18:44:42.151Z
description: "Sorting"
internal: false
---

### Selection sort

_O(n^2)_

Loop through each position in the array from top to bottom. Then, for each of those positions we loop through the array to find the smallest number to swap.

### Merge sort

_O(n log n)_

Check the sizes of the arrays greater than 1. If it is, it splits it into two halves. (ending up with one value per array)

Merge the first two arrays in order. Merge the second pair (3 & 4)...

Merge the first two arrays (now containing 2 each) in order...

Repeat until merged all arrays.

### Graph search

(Dijkstra's algorithm)

_O(n^2)_ optimized to _O(n log n + 1)_

### Brute force

_O(n!)_

Going through every permutation.
