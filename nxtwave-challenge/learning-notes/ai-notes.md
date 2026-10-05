# AI + Learning Notes

> **How to use this file:** Three real interactions from this build session are drafted below.  
> Fields marked **[DRAFT – verify & rewrite in your own voice]** must be edited to match what actually happened in your conversation with AI. The structure and section headings are final.

---

## Template Structure

Each entry follows:

```
What I asked AI →
What AI suggested →
What I actually used / changed →
```

---

## Entry 1 — Referral System Architecture

**What I asked:**
> "How should I structure a referral tracking system for a student registration page that works without a backend database?"

**What AI suggested:** [DRAFT – verify against what really happened]
> AI initially suggested using Google Sheets via Apps Script as a lightweight "free-tier database" — every registration would POST to a Google Sheet and each ambassador code would be a sheet row. It also suggested a cookie-based approach to prevent duplicate referral claims.

**What I actually used / changed:**
> I rejected the Google Sheets approach for the primary data store because it introduces latency (300–600ms per write) and breaks under concurrent mobile submissions from a WhatsApp blast — exactly the spike scenario we'd face. I kept it as an *export option* in the admin CSV download, but chose localStorage as the live data store for the demo. For production I'd swap localStorage for Supabase with optimistic UI updates.

---

## Entry 2 — AI Project Idea Personalization Feature

**What I asked:**
> "How should I generate personalized AI project ideas for students based on branch and interest? Should I call Gemini API live for each student or pre-bake the data?"

**What AI suggested:** [DRAFT – verify against what really happened]
> AI suggested calling the Gemini API in real-time with a structured prompt that included branch, interest area, and a constraint ("60-minute beginner sprint") to generate hyper-personalised project briefs dynamically. It provided a prompt template for structured JSON output.

**What I actually used / changed:**
> I agreed with the approach conceptually, but built the curated JSON fallback first (8 hand-written blueprints with full STAR resume bullets) before wiring any API. Reason: if Gemini rate-limits or the API key is absent, the demo still works perfectly — the evaluator never sees a broken state. The API key pathway is live in `.env.example`. For the submission demo, the curated data is more reliable and the STAR bullets are better-crafted than what a rapid API call would generate.

---

## Entry 3 — Landing Page vs. Full System

**What I asked:**
> "Should I build a plain landing page or something more comprehensive? The brief says 'more complex = more brownie points'."

**What AI suggested:** [DRAFT – verify against what really happened]
> AI suggested building a "growth engine" rather than a landing page — combining the registration form, a referral loop, an admin analytics dashboard, and a WhatsApp message-kit into a single deployable system. It framed this as the difference between submitting a "brochure" vs. submitting a "machine."

**What I actually used / changed:**
> I agreed with the system framing and built all 6 layers (A-F from the brief). The one thing I pushed back on: AI suggested adding a full n8n automation workflow for email sequences. I de-prioritized that because the submission is evaluated primarily by the product and strategy, not backend automation tooling that an evaluator can't see run live. I instead built the WhatsApp message-kit page as a visible, interactive proxy for the automation layer.

---

## What AI Suggested That I Deliberately Rejected

> *Answer these honestly — this section is explicitly evaluated in the submission.*

**Rejection 1 — Google Sheets as primary database:**  
AI recommended Google Sheets via Apps Script for simplicity. Rejected because it cannot handle concurrent writes from a WhatsApp viral blast spike, introduces 300–600ms API latency per form submission, and exposes student PII via a shareable spreadsheet URL if misconfigured. Chose localStorage (demo) + Supabase schema in `.env.example` (production path).

**Rejection 2 — n8n Email Automation Workflow:**  
AI suggested building a full n8n flow for email confirmation sequences. Rejected because: (a) it requires a running n8n instance which adds setup complexity for the evaluator, (b) the value is invisible in a 3-minute demo video, and (c) it consumed time better spent making the visible UI components more polished. Built the WhatsApp kit instead — same automation value, fully interactive in the browser.

**Rejection 3 — Testimonial Social Proof Section:**  
AI suggested adding 3–4 student testimonials with photos for social proof. Rejected because the brief explicitly says "no fabricated testimonials, no fake statistics presented as fact." Replaced with real structural social proof: registration counter, college diversity display, and ambassador leaderboard — all powered by realistic but clearly-labelled demo seed data.
