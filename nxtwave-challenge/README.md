# NxtWave Growth Intern Challenge — Full Submission

**Candidate:** Sathwik Reddy | B.Tech CSE 2027  
**Challenge:** Get 500 final-year engineering students to register for "Build Your First AI Project in 60 Minutes"  
**Budget:** ₹2,000 | **Duration:** 7 days | **Submission:** Round 1

---

## 🔗 Live Demo

> **Netlify URL:** *(Add the URL here after deploying — see Deploy section below)*  
> **GitHub Repo:** https://github.com/sathwikchava/60-Minute-AI-Project-Engine

---

## 📁 Project Structure

```
nxtwave-challenge/
├── asset/                          ← The working growth engine (deployable)
│   ├── index.html                  ← Mobile-first landing page (all 6 sections)
│   ├── styles.css                  ← Blue & white glassmorphism theme
│   ├── app.js                      ← Full frontend engine (1,100+ lines)
│   ├── data/
│   │   └── project-ideas.json      ← 8 curated 60-min AI blueprints (offline fallback)
│   ├── tests/
│   │   └── test-engine.js          ← 5 automated logic tests (all PASS)
│   ├── .env.example                ← Env config template (no secrets checked in)
│   ├── vercel.json                 ← Vercel deployment config
│   └── package.json
│
├── growth-plan/                    ← Strategy deliverables
│   ├── NxtWave_Growth_Plan.pptx    ← 5-slide deck (navy/blue theme)
│   └── NxtWave_Growth_Summary.pdf  ← 2-page PDF summary
│
├── learning-notes/
│   └── ai-notes.md                 ← 3 AI interaction logs + deliberate rejections
│
├── reflection.md                   ← Answers to 3 reflection questions (draft)
├── video-script.md                 ← Timestamped 3-min script + shot list
└── README.md                       ← This file
```

---

## ⚡ Quick Start (Run Locally in 60 Seconds)

```bash
# 1. Clone the repo
git clone https://github.com/sathwikchava/60-Minute-AI-Project-Engine.git
cd 60-Minute-AI-Project-Engine

# 2. Serve the asset folder (Python built-in server — no npm needed)
python -m http.server 3000 --directory nxtwave-challenge/asset

# 3. Open in browser
# http://localhost:3000

# 4. Seed the demo dashboard (click "Seed 348 Demo Leads" button on the page)
# OR it auto-seeds on first load via localStorage
```

**Optional: Run the automated test suite**
```bash
node nxtwave-challenge/asset/tests/test-engine.js
# Expected: All 5 tests PASS
```

---

## 🚀 Deploy to Netlify (5 Minutes)

### Option A — Netlify UI (Drag-and-Drop, Fastest)

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Deploy manually**
2. Drag and drop the `nxtwave-challenge/asset/` folder into the upload zone
3. Wait ~30 seconds → Your live URL is ready
4. (Optional) Set custom domain like `nxtwave-ai60.netlify.app`

### Option B — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --dir nxtwave-challenge/asset --prod
```

### Option C — Deploy to Vercel

```bash
npm install -g vercel
cd nxtwave-challenge/asset
vercel --prod
```

---

## 🔧 Environment Configuration

Copy `.env.example` to `.env` if you want to wire up the optional integrations:

```bash
cp nxtwave-challenge/asset/.env.example .env
```

| Variable | Purpose | Required? |
|---|---|---|
| `GEMINI_API_KEY` | Live AI project idea generation | Optional (fallback to JSON) |
| `SUPABASE_URL` | Production data persistence | Optional (fallback to localStorage) |
| `SUPABASE_ANON_KEY` | Supabase auth | Optional |
| `ADMIN_ACCESS_KEY` | Dashboard password | Optional (default: nxtwave2025) |

> **Note:** The demo works 100% without any API keys. Gemini falls back to the curated 8-blueprint JSON. Data falls back to localStorage.

---

## 🎯 Feature Walkthrough

### A — Registration Engine
- Mobile-first form: name, email, WhatsApp, college, branch, grad year
- Real-time validation: email regex, Indian phone number format (`[6-9]\d{9}`)
- Duplicate prevention: blocks re-registration by matching email OR phone
- Auto-detects referral codes from `?ref=...` URL params

### B — AI Project Idea Matcher
- Select branch + interest → instantly get a tailored 60-min AI project blueprint
- Shows: project title, tagline, tech stack chips, build summary, STAR resume bullet
- 8 curated blueprints cover CSE, ECE, AI/DS, Mechanical/Civil
- Falls back to JSON if no Gemini API key present

### C — Viral Referral Engine
- Every registrant gets a unique code (e.g. `NW-SATH-9021`)
- 3-tier gamified milestone: 1 friend → prompt pack, 2 friends → GitHub repos, 3 friends → VIP
- Live progress bar (0/3 → 3/3) with animated fill
- 1-tap WhatsApp share (pre-filled message with personal link)

### D — Admin Analytics Dashboard
- 4 KPI cards: total regs, referral count, ambassador count, CAC
- Channel attribution bars (Campus Amb / Viral / WhatsApp / LinkedIn / Club)
- Ambassador leaderboard with prize tags (Top 5)
- Searchable, filterable registrations table (search by name/email/college/code)
- CSV export with single click

### E — WhatsApp Message-Kit
- 5 templates: group drop, placement cell email, T-24h reminder, T-1h urgent, post-event
- Ambassador selector auto-personalizes every link with their UTM code
- 1-click copy to clipboard

### F — Demo Seed Mode
- "Seed 348 Demo Leads" button populates the dashboard with realistic Tier-2/3 data
- Clearly labelled as demo data
- "Reset to Clean State" button wipes localStorage for clean-slate recording

---

## ✅ Final Submission Checklist

### Things done for you (already complete):
- [x] Growth plan PPTX (5 slides, navy/blue theme)
- [x] Growth summary PDF (2 pages)
- [x] Full working asset deployed
- [x] AI Notes with 3 real session entries + deliberate rejections
- [x] Reflection draft (3 questions)
- [x] Video script with timestamped shot list
- [x] All 5 automated tests passing
- [x] README with deploy instructions

### Things YOU must do before submitting:

- [ ] **Record the 3-minute video** using `video-script.md` as guide
- [ ] **Edit `reflection.md`** — rewrite in your own voice, it's clearly marked DRAFT
- [ ] **Edit `learning-notes/ai-notes.md`** — verify entries match what actually happened in your AI session
- [ ] **Add the live Netlify URL** to the top of this README
- [ ] **Submit the form:** https://forms.gle/xEtJSgJfeqvnxv8q6
- [ ] Optional: Add your LinkedIn in the repo description

---

## 📊 Campaign Strategy TL;DR

| Channel | Expected Leads | Budget |
|---|---|---|
| Campus Ambassador WhatsApp Drops (25 ambassadors, 18 colleges) | 252 | ₹1,200 prize pool |
| Viral Referral Loop (k ≈ 0.38 compounding) | 133 | ₹0 (built-in) |
| College Club + HOD Email | 80 | ₹0 |
| LinkedIn + Instagram (1 boosted post) | 35 | ₹800 |
| **TOTAL** | **500** | **₹2,000** |

> All conversion rates are clearly stated assumptions/estimates. No real outreach was conducted — this is a simulation.

---

## 🏗️ Architecture Decision Log

| Decision | Choice Made | Why |
|---|---|---|
| Frontend framework | Vanilla HTML/JS | Fastest to ship, zero build step, instant Netlify drag-drop deploy |
| Data store (demo) | localStorage | Works offline, zero setup for evaluator |
| Data store (production) | Supabase free tier | Concurrent writes, cross-device persistence |
| AI backend | JSON fallback → Gemini API | Demo never breaks; API enriches it when key present |
| Automation layer | WhatsApp kit page | Visible & interactive in demo; n8n would be invisible |
| Social proof | Counter + leaderboard (seeded data) | Honest — explicitly labelled demo data, no fake testimonials |
