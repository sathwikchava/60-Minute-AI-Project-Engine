import sys
sys.stdout.reconfigure(encoding='utf-8')
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN

prs = Presentation()
prs.slide_width = Inches(13.33)
prs.slide_height = Inches(7.5)

NAVY  = RGBColor(0x1e, 0x40, 0xaf)
BLUE  = RGBColor(0x25, 0x63, 0xeb)
CYAN  = RGBColor(0x06, 0xb6, 0xd4)
WHITE = RGBColor(0xff, 0xff, 0xff)
LIGHT = RGBColor(0x94, 0xa3, 0xb8)
DARK  = RGBColor(0x0f, 0x17, 0x2a)
LBLUE = RGBColor(0xef, 0xf6, 0xff)
GREEN = RGBColor(0x10, 0xb9, 0x81)
RED   = RGBColor(0xdc, 0x26, 0x26)
AMBER = RGBColor(0xf5, 0x9e, 0x0b)


def blank_slide(prs):
    return prs.slides.add_slide(prs.slide_layouts[6])


def rect(slide, l, t, w, h, color):
    s = slide.shapes.add_shape(1, Inches(l), Inches(t), Inches(w), Inches(h))
    s.line.fill.background()
    s.fill.solid()
    s.fill.fore_color.rgb = color
    return s


def tb(slide, text, l, t, w, h, size=12, bold=False, color=None, align=PP_ALIGN.LEFT):
    box = slide.shapes.add_textbox(Inches(l), Inches(t), Inches(w), Inches(h))
    box.word_wrap = True
    tf = box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.alignment = align
    run = p.add_run()
    run.text = text
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.color.rgb = color or DARK
    return box


# ===================================================
# SLIDE 1 – COVER
# ===================================================
s1 = blank_slide(prs)
rect(s1, 0, 0, 13.33, 7.5, NAVY)
rect(s1, 0, 0, 0.45, 7.5, CYAN)
rect(s1, 0.8, 1.0, 8.4, 5.6, RGBColor(0x1a, 0x34, 0x7e))

tb(s1, "NXTWAVE GROWTH INTERN CHALLENGE", 1.2, 1.25, 8.0, 0.45, size=10, bold=True, color=CYAN)
tb(s1, "Build Your First AI Project\nin 60 Minutes", 1.2, 1.75, 8.0, 1.9, size=32, bold=True, color=WHITE)
tb(s1, "Campaign to get 500 Final-Year Engineering Students to Register\nin 7 Days with a Budget of Rs.2,000", 1.2, 3.75, 8.0, 0.8, size=13, color=LIGHT)
tb(s1, "Growth Plan by Sathwik Reddy | B.Tech CSE 2027 | Round 1 Submission", 1.2, 5.1, 8.0, 0.5, size=10, color=RGBColor(0x7d, 0xa1, 0xe8))

stats = [("500", "Seats Target"), ("Rs.2,000", "Budget Cap"), ("7 Days", "Duration"), ("4", "Channels")]
for i, (val, lbl) in enumerate(stats):
    x = 9.6
    y = 1.2 + i * 1.45
    rect(s1, x, y, 3.0, 1.2, RGBColor(0x23, 0x52, 0xb5))
    tb(s1, val, x + 0.1, y + 0.07, 2.8, 0.6, size=20, bold=True, color=CYAN, align=PP_ALIGN.CENTER)
    tb(s1, lbl, x + 0.1, y + 0.65, 2.8, 0.45, size=10, color=LIGHT, align=PP_ALIGN.CENTER)

# ===================================================
# SLIDE 2 – WHO IS THE STUDENT?
# ===================================================
s2 = blank_slide(prs)
rect(s2, 0, 0, 13.33, 7.5, LBLUE)
rect(s2, 0, 0, 13.33, 1.0, BLUE)
tb(s2, "SLIDE 1 / 4 - WHO IS THE TARGET STUDENT?", 0.4, 0.22, 12, 0.55, size=10, bold=True, color=WHITE)
tb(s2, "The Anxious Final-Year Engineer", 0.4, 1.1, 12, 0.6, size=24, bold=True, color=NAVY)
tb(s2, "Exact segment, pain points, and specific registration triggers", 0.4, 1.72, 12, 0.38, size=10, color=LIGHT)

panels = [
    ("WHO THEY ARE", BLUE, [
        "Final-year CSE / ECE / IT (2025-2026 batch)",
        "Tier-2 & Tier-3 colleges: JNTU, Anna Univ, VTU, AKTU",
        "3+ courses consumed, 0 own projects deployed live",
        "Placement season starts in 60-90 days",
        "Smartphone-first: discovered link via WhatsApp",
    ]),
    ("ANXIETY TRIGGERS", RED, [
        "Placement form demands a live GitHub link",
        "Batchmates bragging about personal project demos",
        "Library Management System on resume feels weak",
        "No GPU access, heavy frameworks feel overwhelming",
        "Tutorial courses never lead to actual deployment",
    ]),
    ("WHAT MAKES THEM REGISTER", GREEN, [
        "60-minute BUILD and DEPLOY promise is credible",
        "Free verified certificate for placement records",
        "Peer or ambassador shared the link (social trust)",
        "Beginner-friendly - no heavy ML math required",
        "Workshop is THIS Saturday - urgency is real",
    ]),
]

for i, (title, color, bullets) in enumerate(panels):
    x = 0.4 + i * 4.3
    rect(s2, x, 2.3, 4.1, 4.5, WHITE)
    rect(s2, x, 2.3, 4.1, 0.4, color)
    tb(s2, title, x + 0.1, 2.33, 3.9, 0.35, size=9, bold=True, color=WHITE)
    for j, b in enumerate(bullets):
        tb(s2, "- " + b, x + 0.15, 2.85 + j * 0.6, 3.8, 0.55, size=9, color=DARK)

# ===================================================
# SLIDE 3 – CAMPAIGN PLAN
# ===================================================
s3 = blank_slide(prs)
rect(s3, 0, 0, 13.33, 7.5, LBLUE)
rect(s3, 0, 0, 13.33, 1.0, BLUE)
tb(s3, "SLIDE 2 / 4 - CAMPAIGN PLAN: 4 PRIORITISED CHANNELS ONLY", 0.4, 0.22, 12, 0.55, size=10, bold=True, color=WHITE)
tb(s3, "Deliberate Prioritisation, Not a Channel Dump", 0.4, 1.1, 10, 0.55, size=22, bold=True, color=NAVY)

channels = [
    ("#1  Campus Ambassador WhatsApp Drops", BLUE, "250 leads",
     "25 ambassadors span 18 tier-2/3 colleges. Pre-existing trust in peer messages converts at 40%+. Zero variable cost.",
     "Rs.1,200 prize pool"),
    ("#2  Viral Referral Loop (Built-in Engine)", GREEN, "130 leads",
     "Every registrant gets unique code. 3-friend milestone unlocks VIP reward. Compound growth, k-factor approx 0.38.",
     "Rs.0 (tool built)"),
    ("#3  College Club + HOD Email Blast", CYAN, "80 leads",
     "Official placement cell endorsement. CSI/ACM chapters forward to batch WhatsApp. Higher show-up rate than social.",
     "Rs.0 (free email)"),
    ("#4  LinkedIn + Instagram Reel", AMBER, "40 leads",
     "1 short-form reel + 3 posts targeting final-year engineering hashtags. Only 1 post boosted to cap ad spend.",
     "Rs.800 boost"),
]

for i, (title, color, target, why, budget) in enumerate(channels):
    y = 1.82 + i * 1.28
    rect(s3, 0.4, y, 12.5, 1.18, WHITE)
    rect(s3, 0.4, y, 0.15, 1.18, color)
    tb(s3, title, 0.65, y + 0.08, 4.2, 0.42, size=11, bold=True, color=NAVY)
    tb(s3, "Expected: " + target, 0.65, y + 0.6, 2.8, 0.38, size=10, bold=True, color=color)
    tb(s3, why, 5.0, y + 0.1, 5.8, 1.0, size=9, color=DARK)
    tb(s3, budget, 11.1, y + 0.1, 1.8, 0.42, size=10, bold=True, color=color, align=PP_ALIGN.CENTER)

# ===================================================
# SLIDE 4 – FUNNEL MATH + BUDGET + CALENDAR
# ===================================================
s4 = blank_slide(prs)
rect(s4, 0, 0, 13.33, 7.5, LBLUE)
rect(s4, 0, 0, 13.33, 1.0, BLUE)
tb(s4, "SLIDE 3 / 4 - FUNNEL MATH + Rs.2,000 BUDGET BREAKDOWN + 7-DAY CALENDAR", 0.4, 0.22, 12, 0.55, size=10, bold=True, color=WHITE)
tb(s4, "How 500 Registrations Add Up  [All rates are stated assumptions/estimates]", 0.4, 1.1, 11, 0.5, size=16, bold=True, color=NAVY)

# Funnel table
headers = ["Channel", "Reach [est]", "CTR [est]", "Clicks", "Reg Rate [est]", "Registrations"]
rows = [
    ["Campus Ambassadors", "3,500 students", "18%", "630", "40%", "252"],
    ["Viral Referral Loop", "1,200 link views", "30%", "360", "37%", "133"],
    ["Club + HOD Email", "800 addresses", "20%", "160", "50%", "80"],
    ["LinkedIn / Instagram", "2,000 impressions", "8%", "160", "22%", "35"],
    ["TOTAL", "7,500 combined", "-", "1,310", "-", "500  GOAL MET"],
]
col_w = [2.2, 1.85, 0.95, 0.75, 1.5, 1.65]
cx = [0.35]
for w in col_w[:-1]:
    cx.append(cx[-1] + w)

for ci, h in enumerate(headers):
    rect(s4, cx[ci], 1.72, col_w[ci] - 0.04, 0.42, BLUE)
    tb(s4, h, cx[ci] + 0.05, 1.74, col_w[ci] - 0.08, 0.38, size=8, bold=True, color=WHITE)

for ri, row in enumerate(rows):
    is_total = ri == len(rows) - 1
    bg = RGBColor(0xdc, 0xfc, 0xe7) if is_total else WHITE
    for ci, cell in enumerate(row):
        rect(s4, cx[ci], 2.14 + ri * 0.42, col_w[ci] - 0.04, 0.4, bg)
        tb(s4, cell, cx[ci] + 0.05, 2.16 + ri * 0.42, col_w[ci] - 0.08, 0.38,
           size=8, bold=is_total, color=NAVY if is_total else DARK)

# Budget section (right)
tb(s4, "Rs.2,000 Budget (sums exactly)", 9.45, 1.72, 3.7, 0.45, size=13, bold=True, color=NAVY)
budget_items = [
    ("Top-3 Ambassador Prize Pool (600+400+200)", "Rs.1,200"),
    ("Referral Milestone Rewards (8 winners x tiers)", "Rs.800"),
    ("Design / Tool Costs", "Rs.0  (all free-tier)"),
    ("TOTAL SPEND", "Rs.2,000"),
]
for i, (desc, amt) in enumerate(budget_items):
    is_t = i == len(budget_items) - 1
    bg = RGBColor(0xdc, 0xfc, 0xe7) if is_t else WHITE
    rect(s4, 9.45, 2.22 + i * 0.58, 3.8, 0.54, bg)
    tb(s4, desc, 9.55, 2.27 + i * 0.58, 2.6, 0.44, size=8, bold=is_t, color=DARK)
    tb(s4, amt, 11.9, 2.27 + i * 0.58, 1.25, 0.44, size=9, bold=True,
       color=GREEN if not is_t else RGBColor(0x05, 0x96, 0x69), align=PP_ALIGN.RIGHT)

tb(s4, "Note: All tools (Vercel, Supabase free tier, Canva free, Google Forms) are zero cost.", 9.45, 4.65, 3.8, 0.5, size=7.5, color=LIGHT)

# 7-day calendar
tb(s4, "7-Day Campaign Calendar", 0.35, 4.7, 8.0, 0.42, size=12, bold=True, color=NAVY)
days = [
    ("D1", "Setup + Ambassador\nOnboarding Kit", BLUE),
    ("D2", "WhatsApp Drop #1\n18 Colleges", GREEN),
    ("D3", "LinkedIn Reel\n+ Instagram Post", CYAN),
    ("D4", "Referral Check\n+ Backup Activation", AMBER),
    ("D5", "HOD + Club\nEmail Blast", BLUE),
    ("D6", "T-24h Reminder\nBroadcast", GREEN),
    ("D7", "Event Live\n+ Certificate Drop", CYAN),
]
for i, (day, task, col) in enumerate(days):
    xd = 0.35 + i * 1.87
    rect(s4, xd, 5.2, 1.82, 1.1, col)
    tb(s4, day, xd + 0.05, 5.22, 1.72, 0.38, size=11, bold=True, color=WHITE, align=PP_ALIGN.CENTER)
    tb(s4, task, xd + 0.05, 5.6, 1.72, 0.62, size=7.5, color=WHITE, align=PP_ALIGN.CENTER)

# ===================================================
# SLIDE 5 – METRICS, RISKS, ASSET OVERVIEW
# ===================================================
s5 = blank_slide(prs)
rect(s5, 0, 0, 13.33, 7.5, LBLUE)
rect(s5, 0, 0, 13.33, 1.0, NAVY)
tb(s5, "SLIDE 4 / 4 - METRICS, RISKS, CONTINGENCY + ASSET FEATURE MATRIX", 0.4, 0.22, 12, 0.55, size=10, bold=True, color=WHITE)
tb(s5, "What We Track, What Could Fail, and What We Shipped", 0.4, 1.1, 12, 0.5, size=18, bold=True, color=NAVY)

# Metrics
rect(s5, 0.4, 1.7, 3.85, 5.0, WHITE)
tb(s5, "KEY METRICS", 0.6, 1.82, 3.5, 0.38, size=10, bold=True, color=BLUE)
metrics = [
    "Daily registrations vs 71/day target",
    "Referral viral coefficient (k-factor)",
    "Channel attribution via UTM source",
    "Ambassador leaderboard rank per college",
    "WhatsApp link CTR per drop",
    "Form drop-off rate by field",
    "Referral code redemption rate",
    "Day-3 pace check (contingency trigger)",
]
for i, m in enumerate(metrics):
    tb(s5, "- " + m, 0.6, 2.3 + i * 0.52, 3.55, 0.48, size=9, color=DARK)

# Risks
rect(s5, 4.55, 1.7, 4.05, 5.0, WHITE)
tb(s5, "RISKS + DAY-3 CONTINGENCY", 4.75, 1.82, 3.7, 0.38, size=10, bold=True, color=RED)
risks = [
    ("Low Day-3 pace (<150 regs)",
     "Activate 5 backup ambassadors + send urgency WhatsApp drop with countdown."),
    ("Ambassador no-shows",
     "2 pre-vetted backup ambassadors per college in the outreach list."),
    ("Referral link fatigue",
     "Rotate across 5 pre-built message templates every 48 hours."),
    ("LinkedIn reel underperforms",
     "Reallocate Rs.800 to a nano-influencer (engineering niche, 2k-10k followers)."),
]
for i, (risk, fix) in enumerate(risks):
    y = 2.3 + i * 1.08
    tb(s5, "Risk: " + risk, 4.75, y, 3.65, 0.38, size=8.5, bold=True, color=RED)
    tb(s5, "Fix: " + fix, 4.75, y + 0.38, 3.65, 0.62, size=8.5, color=DARK)

# Asset features
rect(s5, 8.9, 1.7, 4.1, 5.0, RGBColor(0xef, 0xf6, 0xff))
tb(s5, "WORKING ASSET SHIPPED", 9.1, 1.82, 3.8, 0.38, size=10, bold=True, color=BLUE)
features = [
    "Mobile-first Registration + Validation",
    "Duplicate Protection (email + phone)",
    "AI Project Idea Matcher (branch+interest)",
    "Unique Referral Code per Registrant",
    "3-Tier Gamified Referral Reward Hub",
    "1-Tap WhatsApp Group Share Button",
    "Admin Telemetry + Ambassador Leaderboard",
    "CSV Export of All Leads",
    "WhatsApp 5-Template Message Kit",
    "Seed / Demo Mode (348 realistic leads)",
    "Glassmorphism Blue + White UI",
    "All 5 Logic Tests: PASS",
]
for i, f in enumerate(features):
    tb(s5, "✓ " + f, 9.1, 2.3 + i * 0.36, 3.8, 0.34, size=8.5, color=DARK)

prs.save('nxtwave-challenge/growth-plan/NxtWave_Growth_Plan.pptx')
print("PPTX saved successfully")
