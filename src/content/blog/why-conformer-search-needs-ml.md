---
title: "Why Conformer Search Needs Machine Learning"
date: "2026-05-12"
category: "Machine Learning Potentials"
excerpt: "Classical conformer search methods scale poorly with molecular size. Here's how AI-enhanced meta-dynamics changes the picture."
---

Conformational search sits at the foundation of almost every downstream computational chemistry workflow — from predicting NMR spectra to estimating binding affinities. Yet the search itself remains one of the field's most stubborn bottlenecks.

## The scaling problem

Classical approaches, whether systematic torsion scans or stochastic methods, all face the same enemy: combinatorial explosion. As the number of rotatable bonds grows, the conformational space grows exponentially, and exhaustive sampling quickly becomes intractable.

Meta-dynamics (MTD) approaches, like those implemented in CREST, address this by biasing molecular dynamics trajectories away from already-visited regions of conformational space. This works well, but the underlying force field still has to evaluate energies and gradients for every step of every trajectory — and the accuracy of the search is bounded by the accuracy of that force field.

## Where machine learning fits in

This is where machine learning interatomic potentials (MLIPs) — and methods like AIQM — change the equation. Replacing a classical force field with a fast, near-quantum-accuracy surrogate lets the search explore more of the relevant chemical space without sacrificing the energetic fidelity needed to rank conformers correctly.

In our work implementing an AI-enhanced MTD algorithm within MLatom, the goal has been straightforward to state and hard to achieve: keep the breadth of search that meta-dynamics is good at, while raising the accuracy ceiling closer to what a full quantum chemistry calculation would give you.

## What's next

Benchmarking against CREST across a diverse molecular test set has been the natural next step, and early results are encouraging. I'll share more details — including how the method performs on more flexible and larger systems — as the manuscript comes together.
