import sys
sys.stdout.reconfigure(encoding='utf-8')
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer,
                                 Table, TableStyle, HRFlowable)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.lib.colors import HexColor

DOC  = 'nxtwave-challenge/growth-plan/NxtWave_Growth_Summary.pdf'
PAGE = A4
NAVY = HexColor('#1e40af')
BLUE = HexColor('#2563eb')
CYAN = HexColor('#06b6d4')
LITE = HexColor('#eff6ff')
DARK = HexColor('#0f172a')
GRAY = HexColor('#64748b')
GRN  = HexColor('#10b981')
RED  = HexColor('#dc2626')
AMB  = HexColor('#f59e0b')

doc = SimpleDocTemplate(DOC, pagesize=PAGE,
                         rightMargin=1.8*cm, leftMargin=1.8*cm,
                         topMargin=1.5*cm, bottomMargin=1.5*cm)

ss = getSampleStyleSheet()

def style(name, parent='Normal', **kw):
    s = ParagraphStyle(name, parent=ss[parent], **kw)
    return s

H1 = style('H1', fontSize=20, textColor=NAVY, leading=26, spaceAfter=4, fontName='Helvetica-Bold')
H2 = style('H2', fontSize=13, textColor=BLUE, leading=18, spaceAfter=3, fontName='Helvetica-Bold')
H3 = style('H3', fontSize=10, textColor=NAVY, leading=14, spaceAfter=2, fontName='Helvetica-Bold')
NRM = style('NRM', fontSize=9, textColor=DARK, leading=13.5, spaceAfter=2)
SML = style('SML', fontSize=8, textColor=GRAY, leading=12, spaceAfter=2)
CENT = style('CENT', fontSize=9, textColor=DARK, leading=13, alignment=TA_CENTER)
TAG = style('TAG', fontSize=7.5, textColor=CYAN, leading=11, fontName='Helvetica-Bold')

def hr():
    return HRFlowable(width='100%', thickness=1, color=BLUE, spaceAfter=6, spaceBefore=6)

def sp(h=0.15):
    return Spacer(1, h * cm)

story = []

# ----- PAGE 1 -----
story.append(Paragraph("NxtWave Growth Intern Challenge", TAG))
story.append(Paragraph("Growth Campaign Summary", H1))
story.append(Paragraph("Build Your First AI Project in 60 Minutes — Get 500 Final-Year Engineering Students Registered in 7 Days with a Budget of Rs.2,000", NRM))
story.append(sp(0.2))
story.append(Paragraph("Submitted by: Chava Sathwik | 4th Year Engineering Student | Round 1 Growth Challenge", SML))
story.append(hr())

# KPI row
kpi_data = [
    [Paragraph("500\nSeats Target", CENT),
     Paragraph("Rs.2,000\nBudget Cap", CENT),
     Paragraph("7 Days\nCampaign", CENT),
     Paragraph("4 Channels\nOnly", CENT)],
]
kpi_table = Table(kpi_data, colWidths=[4*cm, 4*cm, 4*cm, 4*cm])
kpi_table.setStyle(TableStyle([
    ('BACKGROUND', (0,0),(-1,-1), LITE),
    ('BOX', (0,0),(-1,-1), 1, BLUE),
    ('GRID', (0,0),(-1,-1), 0.5, BLUE),
    ('ALIGN', (0,0),(-1,-1), 'CENTER'),
    ('VALIGN', (0,0),(-1,-1), 'MIDDLE'),
    ('TOPPADDING', (0,0),(-1,-1), 8),
    ('BOTTOMPADDING', (0,0),(-1,-1), 8),
]))
story.append(kpi_table)
story.append(sp())

# Section 1 – Student profile
story.append(Paragraph("1. Who Is the Target Student?", H2))
story.append(Paragraph(
    "<b>Segment:</b> Final-year CSE / ECE / IT / EEE students (batch 2025-26) "
    "at Tier-2 &amp; Tier-3 engineering colleges — JNTU affiliates, Anna University, VTU, AKTU, and "
    "equivalent state-level universities across Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, "
    "Maharashtra, and Uttar Pradesh.", NRM))
story.append(Paragraph(
    "<b>Key anxiety:</b> Placement season starts in 60-90 days. The student has 3+ tutorial "
    "certifications but zero live-deployed projects. Their resume still has 'Library Management "
    "System'. Recruiters filter that in 5 seconds. They desperately need a credible project proof "
    "that they can actually explain in a technical interview.", NRM))
story.append(Paragraph(
    "<b>Registration triggers:</b> (1) Peer or campus ambassador sharing the link — social proof "
    "from someone they trust beats any ad. (2) '60-minute BUILD + DEPLOY' promise feels achievable "
    "vs 40-hour video courses. (3) Free NxtWave certificate directly adds to placement records. "
    "(4) Beginner-friendly — no GPU math, no PyTorch prerequisites. (5) This Saturday urgency.", NRM))
story.append(Paragraph(
    "<b>Key objections handled in landing page FAQ:</b> 'Is it really free?' (yes, NxtWave sponsors "
    "it), 'Will I get a certificate?' (yes, on project submission), 'I don't know AI' (no prior AI "
    "knowledge needed, only basic Python or JS), 'What if I miss the live session?' "
    "(recording + code sent to WhatsApp).", NRM))
story.append(sp())
story.append(hr())

# Section 2 – Campaign channels
story.append(Paragraph("2. Campaign Plan — 4 Channels, Ranked by ROI", H2))

ch_data = [
    [Paragraph('<b>Rank &amp; Channel</b>', CENT),
     Paragraph('<b>What I Do</b>', CENT),
     Paragraph('<b>Why It Works</b>', CENT),
     Paragraph('<b>Expected Leads</b>', CENT),
     Paragraph('<b>Budget</b>', CENT)],
    [Paragraph('#1  Campus Ambassador WhatsApp Drops', H3),
     Paragraph('Recruit 25 final-year students as ambassadors (1-2 per college). Give each a unique UTM link and a 5-message WhatsApp template kit. They drop messages in 18 college batch groups.', SML),
     Paragraph('Peer-sent messages have 5-8x higher open rates than brand ads. Zero friction — one tap to register from WhatsApp. Ambassadors are incentivised via leaderboard prize.', SML),
     Paragraph('250 leads\n(18% CTR, 40% conv)', CENT),
     Paragraph('Rs.1,200 prize pool', CENT)],
    [Paragraph('#2  Viral Referral Loop', H3),
     Paragraph('Every registrant gets an instant unique code. 3-friend milestone unlocks VIP rewards: GenAI prompt pack, GitHub starter repos, and 1-on-1 AI resume review.', SML),
     Paragraph('Built directly into the registration engine — zero extra effort per student. Compounds organically. Estimated viral coefficient k = 0.38.', SML),
     Paragraph('130 leads\n(30% CTR, 37% conv)', CENT),
     Paragraph('Rs.0\n(built in-app)', CENT)],
    [Paragraph('#3  College Club + HOD Email', H3),
     Paragraph('Email the CSI, ACM, and IEEE student chapters + placement coordinators at 20 colleges. Forward to official placement WhatsApp groups.', SML),
     Paragraph('Official channel signals legitimacy. Placement cell endorsement increases trust 3x vs. cold brand outreach. Higher attendance conversion.', SML),
     Paragraph('80 leads\n(20% CTR, 50% conv)', CENT),
     Paragraph('Rs.0\n(free email)', CENT)],
    [Paragraph('#4  LinkedIn + Instagram Reel', H3),
     Paragraph('Post 1 short-form reel (showing 60-sec app demo clip) + 3 carousel posts per week on placement anxiety. Boost only the best-performing post.', SML),
     Paragraph('Organic reach via engineering hashtags. Boosts only the proven post — avoids wasting budget on untested creative. Captures SEO-aware students.', SML),
     Paragraph('40 leads\n(8% CTR, 22% conv)', CENT),
     Paragraph('Rs.800 boost\n(1 post only)', CENT)],
]

ch_table = Table(ch_data, colWidths=[3.2*cm, 4.2*cm, 4.2*cm, 2.2*cm, 2.2*cm])
ch_table.setStyle(TableStyle([
    ('BACKGROUND', (0,0),(-1,0), BLUE),
    ('TEXTCOLOR', (0,0),(-1,0), colors.white),
    ('ROWBACKGROUNDS', (0,1),(-1,-1), [LITE, colors.white]),
    ('GRID', (0,0),(-1,-1), 0.4, HexColor('#bfdbfe')),
    ('VALIGN', (0,0),(-1,-1), 'TOP'),
    ('TOPPADDING', (0,0),(-1,-1), 5),
    ('BOTTOMPADDING', (0,0),(-1,-1), 5),
    ('LEFTPADDING', (0,0),(-1,-1), 5),
]))
story.append(ch_table)
story.append(sp())
story.append(Paragraph(
    "<b>Why only 4 channels?</b> Prioritisation is being judged, not volume of ideas. Each channel "
    "chosen has a distinct audience layer and compounds the others — ambassadors seed referrals, "
    "referrals fuel organic virality, club emails add credibility, and social extends reach to "
    "students not in existing groups.", NRM))
story.append(hr())

# ----- PAGE 2 -----
story.append(Paragraph("3. Funnel Math — How 500 Registrations Add Up", H2))
story.append(Paragraph(
    "All conversion rates below are stated estimates and assumptions, not guaranteed figures.", SML))
story.append(sp(0.1))

funnel_data = [
    [Paragraph('<b>Channel</b>', CENT),
     Paragraph('<b>Reach [est]</b>', CENT),
     Paragraph('<b>CTR [est]</b>', CENT),
     Paragraph('<b>Clicks</b>', CENT),
     Paragraph('<b>Reg Rate [est]</b>', CENT),
     Paragraph('<b>Registrations</b>', CENT)],
    [Paragraph('Campus Ambassadors', NRM), Paragraph('3,500 students', NRM),
     Paragraph('18%', CENT), Paragraph('630', CENT), Paragraph('40%', CENT), Paragraph('252', CENT)],
    [Paragraph('Viral Referral Loop', NRM), Paragraph('1,200 link views', NRM),
     Paragraph('30%', CENT), Paragraph('360', CENT), Paragraph('37%', CENT), Paragraph('133', CENT)],
    [Paragraph('Club + HOD Email', NRM), Paragraph('800 addresses', NRM),
     Paragraph('20%', CENT), Paragraph('160', CENT), Paragraph('50%', CENT), Paragraph('80', CENT)],
    [Paragraph('LinkedIn / Instagram', NRM), Paragraph('2,000 impressions', NRM),
     Paragraph('8%', CENT), Paragraph('160', CENT), Paragraph('22%', CENT), Paragraph('35', CENT)],
    [Paragraph('<b>TOTAL</b>', H3), Paragraph('<b>7,500 combined</b>', H3),
     Paragraph('—', CENT), Paragraph('<b>1,310</b>', CENT), Paragraph('—', CENT),
     Paragraph('<b>500 GOAL MET</b>', CENT)],
]

f_table = Table(funnel_data, colWidths=[3.5*cm, 3*cm, 2*cm, 1.5*cm, 2.5*cm, 3.5*cm])
f_table.setStyle(TableStyle([
    ('BACKGROUND', (0,0),(-1,0), BLUE),
    ('TEXTCOLOR', (0,0),(-1,0), colors.white),
    ('BACKGROUND', (0,5),(-1,5), HexColor('#dcfce7')),
    ('ROWBACKGROUNDS', (0,1),(-1,4), [LITE, colors.white]),
    ('GRID', (0,0),(-1,-1), 0.4, HexColor('#bfdbfe')),
    ('ALIGN', (2,0),(-1,-1), 'CENTER'),
    ('VALIGN', (0,0),(-1,-1), 'MIDDLE'),
    ('TOPPADDING', (0,0),(-1,-1), 5),
    ('BOTTOMPADDING', (0,0),(-1,-1), 5),
]))
story.append(f_table)
story.append(sp())

# Budget table
story.append(Paragraph("4. Budget Breakdown — Sums Exactly to Rs.2,000", H2))
budget_data = [
    [Paragraph('<b>Item</b>', CENT), Paragraph('<b>Amount</b>', CENT), Paragraph('<b>Justification</b>', CENT)],
    [Paragraph('Top-3 Ambassador Prize Pool', NRM), Paragraph('Rs.1,200', CENT),
     Paragraph('Rs.600 + Rs.400 + Rs.200 vouchers. Incentivises high-effort ambassadors at colleges with largest student batches.', SML)],
    [Paragraph('Referral Milestone Rewards (8 winner slots)', NRM), Paragraph('Rs.800', CENT),
     Paragraph('~Rs.100 per reward. Students who hit 3-friend milestone unlock VIP perks. Budget covers voucher / coupon delivery costs.', SML)],
    [Paragraph('Design tools (Canva), hosting (Vercel), data (Supabase), email (Gmail)', NRM), Paragraph('Rs.0', CENT),
     Paragraph('All free tiers used intentionally. Budget preserved for direct student incentives — the highest-ROI allocation.', SML)],
    [Paragraph('<b>TOTAL</b>', H3), Paragraph('<b>Rs.2,000</b>', H3), Paragraph('', NRM)],
]
b_table = Table(budget_data, colWidths=[5*cm, 2.2*cm, 8.8*cm])
b_table.setStyle(TableStyle([
    ('BACKGROUND', (0,0),(-1,0), BLUE),
    ('TEXTCOLOR', (0,0),(-1,0), colors.white),
    ('BACKGROUND', (0,4),(-1,4), HexColor('#dcfce7')),
    ('ROWBACKGROUNDS', (0,1),(-1,3), [LITE, colors.white]),
    ('GRID', (0,0),(-1,-1), 0.4, HexColor('#bfdbfe')),
    ('VALIGN', (0,0),(-1,-1), 'TOP'),
    ('TOPPADDING', (0,0),(-1,-1), 5),
    ('BOTTOMPADDING', (0,0),(-1,-1), 5),
    ('LEFTPADDING', (0,0),(-1,-1), 5),
]))
story.append(b_table)
story.append(sp())

# Metrics & Risks
story.append(Paragraph("5. Metrics, Risks & Day-3 Contingency", H2))
mr_data = [
    [Paragraph('<b>Key Metrics Tracked</b>', CENT), Paragraph('<b>Risks + Contingency Plan</b>', CENT)],
    [Paragraph(
        '- Daily registration count vs 71/day target<br/>'
        '- Referral viral coefficient (k-factor, target: 0.4)<br/>'
        '- Channel attribution via UTM source tagging<br/>'
        '- Ambassador leaderboard rank per college<br/>'
        '- Form drop-off rate by field<br/>'
        '- WhatsApp link CTR per batch drop<br/>'
        '- Day-3 pace trigger for contingency activation', NRM),
     Paragraph(
        '<b>Risk 1:</b> Day-3 pace below 150 regs<br/>'
        'Fix: Activate 5 backup ambassadors + countdown urgency drop<br/><br/>'
        '<b>Risk 2:</b> Ambassador no-shows<br/>'
        'Fix: 2 pre-vetted backups per college in the pipeline<br/><br/>'
        '<b>Risk 3:</b> Referral link fatigue in groups<br/>'
        'Fix: Rotate across 5 pre-built message templates every 48h<br/><br/>'
        '<b>Risk 4:</b> LinkedIn reel underperforms<br/>'
        'Fix: Redirect Rs.800 to engineering nano-influencer (2k-10k followers)', NRM)],
]
mr_table = Table(mr_data, colWidths=[8*cm, 8*cm])
mr_table.setStyle(TableStyle([
    ('BACKGROUND', (0,0),(-1,0), BLUE),
    ('TEXTCOLOR', (0,0),(-1,0), colors.white),
    ('BACKGROUND', (0,1),(-1,1), LITE),
    ('GRID', (0,0),(-1,-1), 0.4, HexColor('#bfdbfe')),
    ('VALIGN', (0,0),(-1,-1), 'TOP'),
    ('TOPPADDING', (0,0),(-1,-1), 6),
    ('BOTTOMPADDING', (0,0),(-1,-1), 6),
    ('LEFTPADDING', (0,0),(-1,-1), 6),
]))
story.append(mr_table)
story.append(sp())
story.append(hr())
story.append(Paragraph(
    "Submitted as part of NxtWave Growth Intern Round 1 Challenge. "
    "All figures are clearly labelled estimates. No real outreach was conducted — "
    "this is a simulation exercise demonstrating strategic thinking, product ownership, and bias to ship.",
    SML))

doc.build(story)
print("PDF saved successfully")
