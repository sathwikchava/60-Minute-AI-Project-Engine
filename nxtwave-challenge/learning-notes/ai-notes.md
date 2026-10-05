# AI and Learning Notes

Candidate: Chava Sathwik
Status: 4th Year Engineering Student

---

## Entry 1: Referral System Architecture

What I asked:
"How should I structure a referral tracking system for a student registration page that works without a complex backend?"

What AI suggested:
AI initially suggested using Google Sheets via Apps Script as a free database where each registration would post to a row.

What I actually used and changed:
I decided against Google Sheets for live form storage because it is slower on mobile networks and can fail when many students register at the same time during class message broadcasts. Instead, I saved data directly in browser storage for the demo and provided a clean CSV export option in the coordinator dashboard.

---

## Entry 2: AI Project Idea Finder Feature

What I asked:
"How should I provide personalized AI project ideas based on branch and interest?"

What AI suggested:
AI suggested calling an external API on every click with prompts for each student.

What I actually used and changed:
I created a curated list of 8 practical blueprints for different branches like CSE and ECE first. This ensures the demo never breaks or delays if an API key is missing or rate limited.

---

## Entry 3: Landing Page versus Complete Growth System

What I asked:
"Should I build a single landing page or a full referral system?"

What AI suggested:
AI suggested building a complete system that includes registration validation, a referral rewards tier, an admin dashboard, and WhatsApp templates.

What I actually used and changed:
I built all of these user facing modules. However, AI also suggested setting up background email automation on an external server. I rejected that because it adds complex setup that cannot be verified easily. Instead, I built the WhatsApp copy paste templates directly into the webpage so anyone can test it with one click.

---

## What AI Suggested That I Deliberately Rejected

1. Google Sheets as the main database:
Rejected because of slow response times and risk of errors during concurrent traffic spikes from WhatsApp groups.

2. Made up student testimonials:
Rejected because the challenge guidelines specifically prohibit fake testimonials. I used honest demo counters and college lists clearly marked as simulation data.

3. External server automation:
Rejected because external tools are invisible during a short presentation and can fail during evaluation. Built client side copy tools instead.
