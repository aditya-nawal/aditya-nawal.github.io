---
title: Relevance as a Vulnerability
kicker: RETRIEVAL-INDUCED SAFETY
number: '01'
accent: lavender
featured: true
status: arXiv preprint · 2026
summary: How web retrieval can degrade safety alignment in language-model agents — and why relevance itself can become part of the attack surface.
question: When retrieved context is relevant, can relevance itself become a safety vulnerability?
paper: https://arxiv.org/abs/2605.29224
pdf: https://arxiv.org/pdf/2605.29224
---

## The question

Language-model agents are often evaluated as if safety belongs to the model's final response. In a retrieval-augmented workflow, the model must also interpret external information and decide what to do with it. This project asks what happens when the retrieved source is useful, relevant, and still harmful to the agent's safety behaviour.

## What I built

I built **AgentREVEAL**, a diagnostic framework for studying retrieval-induced safety degradation, and **HarmURLBench**, a benchmark containing 1,405 real-world URLs spanning 320 harmful behaviours.

The evaluation follows the agent across the retrieval loop: the request, the retrieved source, the model's decision, and the resulting response. This makes it possible to distinguish failures caused by retrieval from failures that would have appeared without external context.

## What the work surfaces

The analysis identifies relevance-triggered failure modes, including the **Safe Source Paradox**: a source can appear safe or useful at the surface while the interaction it enables creates a more harmful downstream trajectory.

The broader goal is to make agent safety evaluations sensitive to the environments in which models operate, rather than treating the model as an isolated text generator.
