---
title: Multilingual Agent Safety
kicker: LANGUAGE BOUNDARIES
number: '02'
accent: coral
featured: false
status: Research direction
summary: Does safety alignment survive when an agent reasons, retrieves, and collaborates across languages?
question: What changes when safety behaviour crosses a language boundary before or after an agent acts?
---

## The question

Safety alignment is usually measured in one dominant language. Agent workflows make the boundary less stable: a request can arrive in one language, retrieved evidence can appear in another, and a tool or collaborator can respond in a third.

## Current direction

I am designing multilingual agent baselines to study how safety behaviour transfers across languages and across stages of an agentic workflow. The focus is not only whether a model refuses, but where a change in behaviour first appears: during tool admission, retrieval, reasoning, or generation.

## Why it matters

If a safeguard is language-specific, a multilingual agent may carry an apparently safe decision into an unsafe stage. Mapping the transition points can make multilingual safety evaluations more diagnostic and more useful for mitigation.
