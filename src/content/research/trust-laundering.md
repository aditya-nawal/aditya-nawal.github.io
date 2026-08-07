---
title: Trust Laundering
kicker: MULTI-AGENT SECURITY
number: '03'
accent: teal
featured: false
status: Research direction
summary: How adversarial consensus between agents can make an unsafe recommendation appear trustworthy.
question: Can agreement between agents launder the provenance of a harmful recommendation?
---

## The question

When several agents collaborate, agreement can look like evidence. But consensus does not necessarily mean that the underlying information is reliable. A harmful instruction can become more persuasive when it is repeated, paraphrased, or endorsed by another agent.

## Current direction

This line of work studies **Trust Laundering**: an attack vector in which adversarial consensus bypasses inline filters by changing how a recommendation is presented rather than changing its underlying intent.

The experiments examine how agents attribute trust, how safety filters respond to the changed provenance, and which interaction patterns make the system more vulnerable.

## Why it matters

Agent security needs to account for social dynamics inside a workflow. A robust system should inspect the path and evidence behind a recommendation, not only the confidence or agreement attached to its final form.
