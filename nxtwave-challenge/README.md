# NxtWave Growth Intern Challenge: Full Submission

Candidate: Chava Sathwik | 4th Year Engineering Student  
Challenge: Get 500 final year engineering students to register for "Build Your First AI Project in 60 Minutes"  
Budget: Rs 2000 | Duration: 7 days | Submission: Round 1

---

## Live Links

Netlify Live Demo: https://nxtwave-ai60-engine.netlify.app  
GitHub Repository: https://github.com/sathwikchava/60-Minute-AI-Project-Engine

---

## Project Structure

```
nxtwave-challenge/
├── asset/                          (The working growth engine, deployed on Netlify)
│   ├── index.html                  (Mobile friendly registration page)
│   ├── styles.css                  (Blue and white glassmorphism theme)
│   ├── app.js                      (Frontend logic and registration engine)
│   ├── data/
│   │   └── project-ideas.json      (8 curated 60 minute AI blueprints)
│   ├── tests/
│   │   └── test-engine.js          (5 automated logic tests, all passing)
│   ├── .env.example                (Environment configuration template)
│   └── package.json
│
├── growth-plan/                    (Strategy deliverables)
│   ├── NxtWave_Growth_Plan.pptx    (5 slide presentation deck)
│   └── NxtWave_Growth_Summary.pdf  (2 page executive summary PDF)
│
├── learning-notes/
│   └── ai-notes.md                 (AI interaction logs and decisions)
│
├── reflection.md                   (Answers to the 3 reflection questions)
├── video-script.md                 (Timestamped 3 minute video script)
└── README.md                       (Project documentation)
```

---

## Quick Start (Run Locally in 60 Seconds)

```bash
# 1. Clone the repository
git clone https://github.com/sathwikchava/60-Minute-AI-Project-Engine.git
cd 60-Minute-AI-Project-Engine

# 2. Run local server using Python
python -m http.server 3000 --directory nxtwave-challenge/asset

# 3. Open in browser
http://localhost:3000
```

Run automated verification tests:
```bash
node nxtwave-challenge/asset/tests/test-engine.js
```

---

## Features

### 1. Registration Engine
- Simple mobile friendly form: name, email, WhatsApp number, college, branch, and college year.
- Validation checks for email formats and 10 digit Indian phone numbers.
- Checks to prevent duplicate registrations using email or phone.
- Automatically captures referral codes from URL parameters.

### 2. AI Project Idea Finder
- Select branch and topic to get a custom 60 minute project blueprint.
- Shows project title, summary, tech stack, and a ready made resume bullet point.
- Blueprints included for CSE, ECE, AI, and allied branches.

### 3. Referral System
- Each registered student receives a personal invite link.
- 3 tier unlock system: invite friends to unlock prompt packs, starter code repositories, and priority guidance.
- One click sharing to WhatsApp and LinkedIn.

### 4. Coordinator Dashboard
- Shows total signups against the 500 student target.
- Channel breakdown: Ambassador, Referral, WhatsApp, LinkedIn, College Clubs.
- Ambassador leaderboard by college.
- Search, filter, and CSV download of registrations.

### 5. WhatsApp Message Templates
- Ready to copy messages for class groups, college notices, and reminders.
- Automatically inserts the student ambassador code into the link.

---

## Campaign Plan Summary

| Channel | Expected Signups | Budget |
|---|---|---|
| Campus Ambassador WhatsApp Drops (25 ambassadors, 18 colleges) | 252 | Rs 1200 prize pool |
| Friend Referral Loop | 133 | Rs 0 |
| College Club Notices | 80 | Rs 0 |
| Social Media Posts | 35 | Rs 800 |
| TOTAL | 500 | Rs 2000 |

Note: All numbers represent estimated figures for this simulation challenge.
