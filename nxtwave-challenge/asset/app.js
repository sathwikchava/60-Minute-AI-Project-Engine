/**
 * NxtWave Growth Intern Challenge: Working System Engine
 * Features:
 * - High-converting Mobile-First Registration Engine with Duplicate Detection
 * - AI Project Idea Matcher (Branch + Interest -> Tailored 60-min Blueprint & STAR Bullet)
 * - Viral Referral Engine with Gamified Milestone Unlocks (0/3 to 3/3)
 * - Campus Ambassador Tracker & Admin Analytics Dashboard with CSV Export
 * - WhatsApp Broadcast Message Kit for Ambassadors
 * - Instant Demo Data Seeding & Resetting for Zero-Setup Evaluation
 */

// Global App State
const AppState = {
  registrations: [],
  currentUser: null,
  activeAmbassadors: [
    { code: 'AMB_JNTU_01', name: 'Rohit Varma', college: 'JNTU College of Engineering, Hyderabad', count: 38, prize: '₹600 Voucher (1st)' },
    { code: 'AMB_ANNA_02', name: 'Priya Raman', college: 'Anna University (CEG Campus), Chennai', count: 32, prize: '₹400 Voucher (2nd)' },
    { code: 'AMB_VTU_03', name: 'Kiran Gowda', college: 'BMS College of Engineering (VTU)', count: 26, prize: '₹200 Voucher (3rd)' },
    { code: 'AMB_AKTU_04', name: 'Aman Sharma', college: 'AKTU Lucknow Campus', count: 21, prize: 'Top 5 Finisher' },
    { code: 'AMB_PU_05', name: 'Sneha Patil', college: 'Pune Institute of Computer Technology (PICT)', count: 19, prize: 'Top 5 Finisher' },
    { code: 'AMB_GRIET_06', name: 'Nikhil Reddy', college: 'GRIET Hyderabad', count: 16, prize: 'Active' },
    { code: 'AMB_CBIT_07', name: 'Kavya S', college: 'CBIT Hyderabad', count: 14, prize: 'Active' },
    { code: 'AMB_VIT_08', name: 'Arjun Das', college: 'VIT Vellore', count: 12, prize: 'Active' },
    { code: 'AMB_SRM_09', name: 'Deepak Kumar', college: 'SRM Kattankulathur', count: 10, prize: 'Active' }
  ],
  projectIdeas: []
};

// Seed dataset of realistic student registrations
const DEMO_SEEDS = [
  { id: 'NW-1001', name: 'Chava Sathwik', email: 'chava.sathwik@gmail.com', phone: '9848022334', college: 'JNTU College of Engineering, Hyderabad', branch: 'CSE / IT', gradYear: '2025', channel: 'Campus Ambassador', refCode: 'NW-SATH-9021', referredBy: 'AMB_JNTU_01', referralCount: 3, createdAt: '2026-10-01 09:30' },
  { id: 'NW-1002', name: 'Ananya Deshmukh', email: 'ananya.d@pict.edu', phone: '9765432190', college: 'Pune Institute of Computer Technology (PICT)', branch: 'CSE / IT', gradYear: '2025', channel: 'Viral Referral', refCode: 'NW-ANAN-4412', referredBy: 'NW-SATH-9021', referralCount: 1, createdAt: '2026-10-01 11:15' },
  { id: 'NW-1003', name: 'Karthik Raja', email: 'karthik.r@ceg.annauniv.edu', phone: '9443215678', college: 'Anna University (CEG Campus), Chennai', branch: 'ECE', gradYear: '2025', channel: 'Campus Ambassador', refCode: 'NW-KART-1823', referredBy: 'AMB_ANNA_02', referralCount: 2, createdAt: '2026-10-01 13:40' },
  { id: 'NW-1004', name: 'Rahul Varma', email: 'rahul.v@griet.ac.in', phone: '9876501234', college: 'GRIET Hyderabad', branch: 'AI / Data Science', gradYear: '2025', channel: 'WhatsApp Groups', refCode: 'NW-RAHU-8831', referredBy: 'AMB_JNTU_01', referralCount: 0, createdAt: '2026-10-02 08:20' },
  { id: 'NW-1005', name: 'Megha Nair', email: 'megha.nair@bmsce.ac.in', phone: '9845123987', college: 'BMS College of Engineering (VTU)', branch: 'CSE / IT', gradYear: '2025', channel: 'Campus Ambassador', refCode: 'NW-MEGH-3390', referredBy: 'AMB_VTU_03', referralCount: 3, createdAt: '2026-10-02 10:45' },
  { id: 'NW-1006', name: 'Vikram Singh', email: 'vikram.aktu@gmail.com', phone: '9123456780', college: 'AKTU Lucknow Campus', branch: 'ECE', gradYear: '2025', channel: 'College Club', refCode: 'NW-VIKR-5521', referredBy: 'AMB_AKTU_04', referralCount: 1, createdAt: '2026-10-02 14:10' },
  { id: 'NW-1007', name: 'Divya Sri', email: 'divya.sri@cbit.ac.in', phone: '9988776655', college: 'CBIT Hyderabad', branch: 'CSE / IT', gradYear: '2025', channel: 'LinkedIn Organic', refCode: 'NW-DIVY-9901', referredBy: '', referralCount: 0, createdAt: '2026-10-03 09:00' },
  { id: 'NW-1008', name: 'Harsha Vardhan', email: 'harsha.v@jntuh.ac.in', phone: '9490123456', college: 'JNTU College of Engineering, Hyderabad', branch: 'EEE', gradYear: '2025', channel: 'Viral Referral', refCode: 'NW-HARS-6623', referredBy: 'NW-SATH-9021', referralCount: 2, createdAt: '2026-10-03 11:30' },
  { id: 'NW-1009', name: 'Pooja Iyer', email: 'pooja.iyer@vit.ac.in', phone: '9840129876', college: 'VIT Vellore', branch: 'AI / Data Science', gradYear: '2025', channel: 'Campus Ambassador', refCode: 'NW-POOJ-7712', referredBy: 'AMB_VIT_08', referralCount: 1, createdAt: '2026-10-03 15:20' },
  { id: 'NW-1010', name: 'Abhishek Rao', email: 'abhishek.rao@psgtech.ac.in', phone: '9789012345', college: 'PSG College of Technology, Coimbatore', branch: 'Mechanical / Civil', gradYear: '2025', channel: 'College Club', refCode: 'NW-ABHI-2210', referredBy: '', referralCount: 0, createdAt: '2026-10-04 10:15' }
];

// WhatsApp Message Templates
const WHATSAPP_TEMPLATES = {
  'group-drop': `Notice for 4th Year Engineering Students

Hello everyone!
If your resume has the same old academic projects like a simple website or basic calculator, recruiters tend to overlook them.

NxtWave is hosting a free live workshop:
"Build Your First AI Project in 60 Minutes"

What you will get:
1. Build and deploy a real working AI web project
2. Verified NxtWave Certificate for your profile
3. No machine learning or complex math needed
4. Starter code and resume ready bullet points

When: Saturday at 6:00 PM IST
Limited to 500 students.

Register for free here:
{{LINK}}

Feel free to share this with friends preparing for placements!`,

  'placement-cell': `Subject: Free 60 Minute AI Project Workshop for 4th Year Students

Respected Placement Officer or Faculty Coordinator,

To help our final year batch prepare for technical interviews and build practical generative AI projects for their resumes, NxtWave is conducting a free online workshop:

Event: Build Your First AI Project in 60 Minutes
For: CSE, IT, ECE, EEE and allied engineering students
Cost: Free
Outcome: Working project link and Certificate of Completion

Please share this registration link with student groups:
{{LINK}}

Regards,
Campus Coordinator
{{AMB_NAME}}`,

  'reminder-t24': `Reminder: Workshop tomorrow at 6:00 PM IST

Hello everyone!
This is a quick reminder that the workshop "Build Your First AI Project in 60 Minutes" is taking place tomorrow evening.

Many students from our college have already registered. Please keep your laptop ready with Google Chrome.

Save your free seat here before the 500 limit is reached:
{{LINK}}`,

  'reminder-t1': `Starting in 1 hour!

Please keep your laptop ready.
The live AI project workshop starts today at 6:00 PM IST.

Join using the session link here:
{{LINK}}

See you in the session!`,

  'post-event': `Good job on building your AI project today!

Next steps to complete:
1. Submit your deployed project link to receive your NxtWave Certificate:
{{LINK}}
2. Review your code repository and add the project to your resume.

You can also share your project link on LinkedIn and tag NxtWave!`
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  initLocalStorage();
  loadProjectIdeas();
  setupEventListeners();
  checkUrlReferralParam();
  renderDashboard();
  renderWhatsAppKit();
  setupFaqAccordion();
});

// Initialize LocalStorage with Seed Data if empty
function initLocalStorage() {
  const stored = localStorage.getItem('nw_registrations');
  if (!stored) {
    seedDemoRegistrations(false);
  } else {
    try {
      AppState.registrations = JSON.parse(stored);
    } catch (e) {
      seedDemoRegistrations(false);
    }
  }

  // Set default current user for referral demo preview
  if (AppState.registrations.length > 0) {
    AppState.currentUser = AppState.registrations[0];
  }
}

// Generate 348 realistic registrations
function seedDemoRegistrations(save = true) {
  const colleges = [
    'JNTU College of Engineering, Hyderabad',
    'Anna University (CEG Campus), Chennai',
    'BMS College of Engineering (VTU)',
    'AKTU Lucknow Campus',
    'Pune Institute of Computer Technology (PICT)',
    'GRIET Hyderabad',
    'CBIT Hyderabad',
    'VIT Vellore',
    'SRM Kattankulathur',
    'PSG College of Technology, Coimbatore',
    'Vasavi College of Engineering',
    'Coimbatore Institute of Technology (CIT)'
  ];

  const branches = ['CSE / IT', 'ECE', 'EEE', 'AI / Data Science', 'Mechanical / Civil'];
  const channels = ['Campus Ambassador', 'Viral Referral', 'WhatsApp Groups', 'LinkedIn Organic', 'College Club'];
  const firstNames = ['Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Rohan', 'Ananya', 'Diya', 'Kavya', 'Sneha', 'Meera', 'Pooja', 'Tanvi', 'Ishaan', 'Nikhil', 'Manish', 'Vikram', 'Divya', 'Sanjay', 'Rahul', 'Pranav'];
  const lastNames = ['Reddy', 'Sharma', 'Patil', 'Iyer', 'Varma', 'Rao', 'Gowda', 'Kumar', 'Singh', 'Nair', 'Das', 'Deshmukh', 'Menon', 'Joshi', 'Gupta', 'Choudhury'];

  const generated = [...DEMO_SEEDS];

  for (let i = 11; i <= 348; i++) {
    const fn = firstNames[Math.floor(Math.random() * firstNames.length)];
    const ln = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = `${fn} ${ln}`;
    const email = `${fn.toLowerCase()}.${ln.toLowerCase()}${i}@gmail.com`;
    const phone = `9${Math.floor(100000000 + Math.random() * 900000000)}`;
    const college = colleges[Math.floor(Math.random() * colleges.length)];
    const branch = branches[Math.floor(Math.random() * branches.length)];
    const channel = channels[Math.floor(Math.random() * channels.length)];
    const refCode = `NW-${fn.substring(0, 4).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const referredBy = channel === 'Viral Referral' ? 'NW-SATH-9021' : (channel === 'Campus Ambassador' ? AppState.activeAmbassadors[Math.floor(Math.random() * AppState.activeAmbassadors.length)].code : '');
    const referralCount = Math.random() > 0.75 ? Math.floor(Math.random() * 4) : 0;
    
    // Day distribution over past 5 days
    const day = Math.min(5, Math.ceil(i / 70));
    const hour = String(Math.floor(8 + Math.random() * 12)).padStart(2, '0');
    const minute = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    const createdAt = `2026-10-0${day} ${hour}:${minute}`;

    generated.push({
      id: `NW-${1000 + i}`,
      name: fullName,
      email,
      phone,
      college,
      branch,
      gradYear: '2025',
      channel,
      refCode,
      referredBy,
      referralCount,
      createdAt
    });
  }

  AppState.registrations = generated;
  if (save) {
    localStorage.setItem('nw_registrations', JSON.stringify(AppState.registrations));
  }
}

// Load Curated Project Ideas
async function loadProjectIdeas() {
  try {
    const res = await fetch('data/project-ideas.json');
    if (res.ok) {
      AppState.projectIdeas = await res.json();
    }
  } catch (err) {
    console.warn('Could not load project-ideas.json, using fallback internal data:', err);
    AppState.projectIdeas = [
      {
        id: 'cse-genai',
        branch: 'CSE / IT',
        interest: 'GenAI & LLMs',
        title: 'SmartResume AI: Automated ATS Feedback & Keyword Gap Analyzer',
        tagline: 'Turn PDF resumes into structured interview readiness scores with Gemini Flash',
        duration: '55 mins',
        difficulty: 'Beginner Friendly',
        stack: ['Python', 'Streamlit', 'Gemini API', 'PyPDF2'],
        summary: 'Builds a web tool where a student uploads their resume PDF and a target job description; the AI performs gap analysis, identifies missing skills, and rewrites weak bullet points into impactful STAR-format achievements.',
        resumeBullet: 'Engineered an ATS resume optimization engine using Google Gemini API and Streamlit; extracted semantic discrepancies against JD keywords, boosting candidate match relevancy by 40%.'
      }
    ];
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Mobile Nav Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // AI Idea Generator Button
  const btnGenerate = document.getElementById('btn-generate-idea');
  if (btnGenerate) {
    btnGenerate.addEventListener('click', handleGenerateIdea);
  }

  const btnBuildThis = document.getElementById('btn-build-this-project');
  if (btnBuildThis) {
    btnBuildThis.addEventListener('click', () => {
      const regSection = document.getElementById('register');
      if (regSection) regSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Registration Form Submit
  const regForm = document.getElementById('registration-form');
  if (regForm) {
    regForm.addEventListener('submit', handleRegistrationSubmit);
  }

  // Referral Copy Button
  const btnCopyRef = document.getElementById('btn-copy-ref-link');
  if (btnCopyRef) {
    btnCopyRef.addEventListener('click', handleCopyReferralLink);
  }

  // WhatsApp Share Button
  const btnShareWA = document.getElementById('btn-share-whatsapp');
  if (btnShareWA) {
    btnShareWA.addEventListener('click', handleShareWhatsApp);
  }

  // Simulate Referral Button (For testing milestone unlock)
  const btnSimulateRef = document.getElementById('btn-simulate-referral-click');
  if (btnSimulateRef) {
    btnSimulateRef.addEventListener('click', handleSimulateReferral);
  }

  // LinkedIn Share Button
  const btnShareLI = document.getElementById('btn-share-linkedin');
  if (btnShareLI) {
    btnShareLI.addEventListener('click', handleShareLinkedIn);
  }

  // Admin Data Management
  const btnReseed = document.getElementById('btn-reseed-data');
  if (btnReseed) {
    btnReseed.addEventListener('click', () => {
      seedDemoRegistrations(true);
      renderDashboard();
      showToast('⚡ Demo data re-seeded with 348 realistic registrations!');
    });
  }

  const btnReset = document.getElementById('btn-reset-data');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      AppState.registrations = [];
      localStorage.setItem('nw_registrations', JSON.stringify([]));
      renderDashboard();
      showToast('🔄 State cleared to 0 registrations.');
    });
  }

  const btnExportCSV = document.getElementById('btn-export-csv');
  if (btnExportCSV) {
    btnExportCSV.addEventListener('click', exportRegistrationsCSV);
  }

  // Admin Search & Filter
  const searchInput = document.getElementById('admin-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => filterRegistrationsTable());
  }

  const filterCollege = document.getElementById('filter-college');
  if (filterCollege) {
    filterCollege.addEventListener('change', () => filterRegistrationsTable());
  }

  const filterChannel = document.getElementById('filter-channel');
  if (filterChannel) {
    filterChannel.addEventListener('change', () => filterRegistrationsTable());
  }

  // Demo Toggle Button in Navbar
  const btnDemoToggle = document.getElementById('btn-demo-toggle');
  if (btnDemoToggle) {
    btnDemoToggle.addEventListener('click', () => {
      if (AppState.registrations.length > 50) {
        AppState.registrations = AppState.registrations.slice(0, 10);
        localStorage.setItem('nw_registrations', JSON.stringify(AppState.registrations));
        document.getElementById('demo-toggle-label').textContent = 'Demo Data: LIGHT';
        showToast('Demo data reduced to 10 entries');
      } else {
        seedDemoRegistrations(true);
        document.getElementById('demo-toggle-label').textContent = 'Demo Data: ON (348)';
        showToast('Demo data seeded with 348 entries');
      }
      renderDashboard();
    });
  }

  // WhatsApp Kit Ambassador Select & Tabs
  const kitAmbSelect = document.getElementById('kit-amb-select');
  if (kitAmbSelect) {
    kitAmbSelect.addEventListener('change', () => updateWhatsAppTemplate());
  }

  const kitTabs = document.querySelectorAll('.kit-tab-btn');
  kitTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      kitTabs.forEach(t => t.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      updateWhatsAppTemplate();
    });
  });

  const btnCopyTemplate = document.getElementById('btn-copy-template');
  if (btnCopyTemplate) {
    btnCopyTemplate.addEventListener('click', handleCopyWhatsAppTemplate);
  }
}

// Check if URL has ?ref=... parameter and pre-fill form
function checkUrlReferralParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const ref = urlParams.get('ref');
  if (ref) {
    const refInput = document.getElementById('reg-referral-code');
    const refMsg = document.getElementById('referral-code-msg');
    if (refInput) {
      refInput.value = ref;
      refInput.classList.add('pulse');
    }
    if (refMsg) {
      refMsg.textContent = `🎉 Priority Referral link active (${ref})!`;
      refMsg.style.color = '#10b981';
      refMsg.style.fontWeight = '700';
    }
  }
}

// AI Project Idea Matcher Handler
function handleGenerateIdea() {
  const branch = document.getElementById('matcher-branch').value;
  const interest = document.getElementById('matcher-interest').value;
  const btn = document.getElementById('btn-generate-idea');

  btn.disabled = true;
  btn.innerHTML = '<span>⚡ Matching 60-Min AI Blueprint...</span>';

  setTimeout(() => {
    // Find matching idea or fallback
    let match = AppState.projectIdeas.find(p => p.branch === branch && p.interest === interest);
    if (!match) {
      match = AppState.projectIdeas.find(p => p.branch === branch) || AppState.projectIdeas[0];
    }

    if (match) {
      document.getElementById('result-branch-badge').textContent = match.branch;
      document.getElementById('result-interest-badge').textContent = match.interest;
      document.getElementById('result-duration-badge').textContent = `${match.duration} Build`;
      document.getElementById('result-difficulty').textContent = match.difficulty;
      document.getElementById('result-title').textContent = match.title;
      document.getElementById('result-tagline').textContent = match.tagline;
      document.getElementById('result-summary').textContent = match.summary;
      document.getElementById('result-resume-bullet').textContent = `"${match.resumeBullet}"`;

      const stackContainer = document.getElementById('result-stack');
      stackContainer.innerHTML = '';
      match.stack.forEach(tech => {
        const chip = document.createElement('span');
        chip.className = 'tech-chip';
        chip.textContent = tech;
        stackContainer.appendChild(chip);
      });

      // Animate card
      const resultCard = document.getElementById('matcher-result');
      resultCard.style.animation = 'none';
      resultCard.offsetHeight; // trigger reflow
      resultCard.style.animation = 'fadeIn 0.4s ease';
    }

    btn.disabled = false;
    btn.innerHTML = '<span>Generate My 60 Min AI Project</span>';
  }, 350);
}

// Handle Registration Form Submission
function handleRegistrationSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const phone = document.getElementById('reg-phone').value.trim();
  const college = document.getElementById('reg-college').value.trim();
  const branch = document.getElementById('reg-branch').value;
  const gradYear = document.getElementById('reg-grad-year').value;
  const refCodeInput = document.getElementById('reg-referral-code').value.trim();

  const alertBox = document.getElementById('form-alert-box');
  const btnText = document.getElementById('btn-submit-text');
  const btnSpinner = document.getElementById('btn-spinner');

  // Basic Validation
  let isValid = true;

  if (name.length < 2) {
    document.getElementById('err-name').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('err-name').style.display = 'none';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('err-email').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('err-email').style.display = 'none';
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById('err-phone').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('err-phone').style.display = 'none';
  }

  if (college.length < 3) {
    document.getElementById('err-college').style.display = 'block';
    isValid = false;
  } else {
    document.getElementById('err-college').style.display = 'none';
  }

  if (!isValid) return;

  // Duplicate Check
  const existing = AppState.registrations.find(r => r.email === email || r.phone === phone);
  if (existing) {
    alertBox.className = 'form-alert error';
    alertBox.textContent = `You are already registered with ticket #${existing.id}. Your referral link is ready below.`;
    alertBox.style.display = 'block';
    updateReferralHub(existing);
    document.getElementById('referrals').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  // Simulate server submission
  btnText.textContent = 'Securing Your Seat...';
  btnSpinner.style.display = 'inline-block';

  setTimeout(() => {
    // Generate unique ID and referral code
    const regId = `NW-${1000 + AppState.registrations.length + 1}`;
    const namePart = name.split(' ')[0].substring(0, 4).toUpperCase();
    const personalRefCode = `NW-${namePart}-${Math.floor(1000 + Math.random() * 9000)}`;

    // Channel attribution
    let channel = 'Direct Website';
    if (refCodeInput) {
      if (refCodeInput.startsWith('AMB_')) {
        channel = 'Campus Ambassador';
        // update ambassador count
        const amb = AppState.activeAmbassadors.find(a => a.code === refCodeInput);
        if (amb) amb.count++;
      } else {
        channel = 'Viral Referral';
        // award referral point to referrer
        const referrer = AppState.registrations.find(r => r.refCode === refCodeInput);
        if (referrer) referrer.referralCount = (referrer.referralCount || 0) + 1;
      }
    }

    const now = new Date();
    const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newRecord = {
      id: regId,
      name,
      email,
      phone,
      college,
      branch,
      gradYear,
      channel,
      refCode: personalRefCode,
      referredBy: refCodeInput || '',
      referralCount: 0,
      createdAt: timestamp
    };

    AppState.registrations.unshift(newRecord);
    localStorage.setItem('nw_registrations', JSON.stringify(AppState.registrations));
    AppState.currentUser = newRecord;

    btnText.textContent = 'Seat Confirmed';
    btnSpinner.style.display = 'none';

    alertBox.className = 'form-alert success';
    alertBox.textContent = `Registration successful! Your seat #${regId} is confirmed. Your referral link is ready below.`;
    alertBox.style.display = 'block';

    updateReferralHub(newRecord);
    renderDashboard();

    setTimeout(() => {
      document.getElementById('referrals').scrollIntoView({ behavior: 'smooth' });
    }, 600);
  }, 500);
}

// Update Referral Hub Display
function updateReferralHub(user) {
  if (!user) return;
  AppState.currentUser = user;

  const origin = window.location.origin + window.location.pathname;
  const personalLink = `${origin}?ref=${user.refCode}`;

  document.getElementById('ref-user-name').textContent = user.name;
  document.getElementById('ref-ticket-num').textContent = user.id.replace('NW-', '');
  document.getElementById('ref-user-college').textContent = user.college;
  document.getElementById('ref-user-branch').textContent = user.branch;
  document.getElementById('referral-link-input').value = personalLink;

  const count = user.referralCount || 0;
  document.getElementById('referral-count-display').textContent = count;

  const fillPct = Math.min(100, Math.round((count / 3) * 100));
  document.getElementById('referral-progress-fill').style.width = `${fillPct}%`;

  // Milestone Tiers
  updateMilestoneTier('tier-1-status', count >= 1, 'Unlocked', 'Locked (Need 1)');
  updateMilestoneTier('tier-2-status', count >= 2, 'Unlocked', 'Locked (Need 2)');
  updateMilestoneTier('tier-3-status', count >= 3, 'Unlocked', 'Locked (Need 3)');
}

function updateMilestoneTier(elementId, isUnlocked, unlockedText, lockedText) {
  const el = document.getElementById(elementId);
  if (!el) return;
  if (isUnlocked) {
    el.className = 'tier-status status-unlocked';
    el.textContent = unlockedText;
  } else {
    el.className = 'tier-status status-locked';
    el.textContent = lockedText;
  }
}

// Copy Referral Link
function handleCopyReferralLink() {
  const linkInput = document.getElementById('referral-link-input');
  linkInput.select();
  navigator.clipboard.writeText(linkInput.value).then(() => {
    const btnText = document.getElementById('copy-btn-text');
    btnText.textContent = 'Copied';
    showToast('Link copied to clipboard! Share it in your college groups.');
    setTimeout(() => { btnText.textContent = 'Copy Link'; }, 2000);
  }).catch(() => {
    showToast('Link ready to copy!');
  });
}

// WhatsApp Share Button
function handleShareWhatsApp() {
  const user = AppState.currentUser || { name: 'Batchmate', refCode: 'NW-DEMO-01' };
  const origin = window.location.origin + window.location.pathname;
  const link = `${origin}?ref=${user.refCode}`;

  const message = `Free 60 Minute AI Project Workshop\n\nHello! I registered for NxtWave's live session "Build Your First AI Project in 60 Minutes".\n\nWe will write code, deploy a working AI app, and get a certificate for campus placements. No prior AI background required.\n\nRegister for free using this link:\n${link}`;

  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// LinkedIn Share Button
function handleShareLinkedIn() {
  const user = AppState.currentUser || { name: 'Engineering Student', refCode: 'NW-DEMO-01' };
  const origin = window.location.origin + window.location.pathname;
  const link = `${origin}?ref=${user.refCode}`;
  const text = `Joining NxtWave's 60 Minute AI Project Workshop to build and deploy a working AI project for campus placements. You can register for free here: ${link}`;

  const liUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;
  window.open(liUrl, '_blank');
}

// Simulate Friend Sign up via User's Referral Code
function handleSimulateReferral() {
  if (!AppState.currentUser) return;
  AppState.currentUser.referralCount = (AppState.currentUser.referralCount || 0) + 1;

  // Add dummy friend registration
  const friendName = `Friend of ${AppState.currentUser.name.split(' ')[0]}`;
  const newFriend = {
    id: `NW-${1000 + AppState.registrations.length + 1}`,
    name: `${friendName} #${AppState.currentUser.referralCount}`,
    email: `friend${AppState.currentUser.referralCount}_${Date.now().toString().slice(-4)}@gmail.com`,
    phone: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
    college: AppState.currentUser.college,
    branch: AppState.currentUser.branch,
    gradYear: '2025',
    channel: 'Viral Referral',
    refCode: `NW-FRND-${Math.floor(1000 + Math.random() * 9000)}`,
    referredBy: AppState.currentUser.refCode,
    referralCount: 0,
    createdAt: 'Just now'
  };

  AppState.registrations.unshift(newFriend);
  localStorage.setItem('nw_registrations', JSON.stringify(AppState.registrations));

  updateReferralHub(AppState.currentUser);
  renderDashboard();
  showToast(`🎉 Simulation: A batchmate joined using your code! Progress: ${AppState.currentUser.referralCount}/3 friends.`);
}

// RENDER ADMIN DASHBOARD
function renderDashboard() {
  const total = AppState.registrations.length;
  const target = 500;
  const pct = Math.min(100, ((total / target) * 100)).toFixed(1);

  // Update Hero & Admin counters
  const heroCount = document.getElementById('hero-reg-count');
  if (heroCount) heroCount.textContent = total;

  const kpiTotal = document.getElementById('kpi-total-reg');
  if (kpiTotal) kpiTotal.textContent = total;

  const kpiGoalFill = document.getElementById('kpi-goal-fill');
  if (kpiGoalFill) kpiGoalFill.style.width = `${pct}%`;

  const referralRegs = AppState.registrations.filter(r => r.channel === 'Viral Referral').length;
  const kpiRef = document.getElementById('kpi-referral-count');
  if (kpiRef) kpiRef.textContent = referralRegs;

  const ambRegs = AppState.registrations.filter(r => r.channel === 'Campus Ambassador').length;

  // Populate Channel Breakdown Bars
  renderChannelBreakdown(total);

  // Populate Ambassador Leaderboard
  renderAmbassadorLeaderboard();

  // Populate Colleges Filter Dropdown
  populateCollegeFilter();

  // Render Table
  filterRegistrationsTable();

  // Update Referral Hub if user exists
  if (AppState.currentUser) {
    updateReferralHub(AppState.currentUser);
  }
}

// Render Channel Attribution Bars
function renderChannelBreakdown(total) {
  const container = document.getElementById('channel-bars-list');
  if (!container) return;

  const channels = [
    { name: 'Campus Ambassadors', key: 'Campus Ambassador', color: '#2563eb' },
    { name: 'Viral Referral Loop', key: 'Viral Referral', color: '#10b981' },
    { name: 'Class WhatsApp Drops', key: 'WhatsApp Groups', color: '#06b6d4' },
    { name: 'College Clubs / HODs', key: 'College Club', color: '#8b5cf6' },
    { name: 'LinkedIn / Social Ads', key: 'LinkedIn Organic', color: '#f59e0b' }
  ];

  container.innerHTML = '';

  channels.forEach(ch => {
    const count = AppState.registrations.filter(r => r.channel === ch.key).length;
    const share = total > 0 ? ((count / total) * 100).toFixed(1) : 0;

    const div = document.createElement('div');
    div.className = 'channel-item';
    div.innerHTML = `
      <div class="channel-header">
        <span>${ch.name}</span>
        <span><strong>${count}</strong> (${share}%)</span>
      </div>
      <div class="channel-bar-bg">
        <div class="channel-bar-fill" style="width: ${share}%; background: ${ch.color};"></div>
      </div>
    `;
    container.appendChild(div);
  });
}

// Render Ambassador Leaderboard
function renderAmbassadorLeaderboard() {
  const list = document.getElementById('ambassador-leaderboard-list');
  if (!list) return;

  // Recalculate real counts from registrations
  const counts = {};
  AppState.registrations.forEach(r => {
    if (r.referredBy && r.referredBy.startsWith('AMB_')) {
      counts[r.referredBy] = (counts[r.referredBy] || 0) + 1;
    }
  });

  const sortedAmbassadors = [...AppState.activeAmbassadors].map(a => ({
    ...a,
    count: (counts[a.code] || a.count)
  })).sort((a, b) => b.count - a.count);

  list.innerHTML = '';

  sortedAmbassadors.slice(0, 5).forEach((amb, idx) => {
    const item = document.createElement('div');
    item.className = 'ambassador-item';
    item.innerHTML = `
      <span class="amb-rank">#${idx + 1}</span>
      <div class="amb-info">
        <div class="amb-name">${amb.name} <small style="color: #64748b;">(${amb.code})</small></div>
        <div class="amb-college">${amb.college}</div>
      </div>
      <div class="amb-score">
        <div class="amb-count">${amb.count}</div>
        <div class="amb-voucher">${amb.prize}</div>
      </div>
    `;
    list.appendChild(item);
  });
}

// Populate Colleges Dropdown in Table
function populateCollegeFilter() {
  const select = document.getElementById('filter-college');
  if (!select || select.options.length > 1) return;

  const colleges = [...new Set(AppState.registrations.map(r => r.college))].filter(Boolean);
  colleges.forEach(col => {
    const opt = document.createElement('option');
    opt.value = col;
    opt.textContent = col;
    select.appendChild(opt);
  });
}

// Filter and Render Registrations Table
function filterRegistrationsTable() {
  const tbody = document.getElementById('registrations-tbody');
  const countEl = document.getElementById('table-showing-count');
  if (!tbody) return;

  const query = (document.getElementById('admin-search-input')?.value || '').toLowerCase();
  const collegeFilter = document.getElementById('filter-college')?.value || 'all';
  const channelFilter = document.getElementById('filter-channel')?.value || 'all';

  const filtered = AppState.registrations.filter(r => {
    const matchQuery = !query || 
      r.name.toLowerCase().includes(query) || 
      r.email.toLowerCase().includes(query) || 
      r.college.toLowerCase().includes(query) || 
      r.refCode.toLowerCase().includes(query) ||
      (r.referredBy && r.referredBy.toLowerCase().includes(query));

    const matchCollege = collegeFilter === 'all' || r.college === collegeFilter;
    const matchChannel = channelFilter === 'all' || r.channel === channelFilter;

    return matchQuery && matchCollege && matchChannel;
  });

  tbody.innerHTML = '';

  filtered.slice(0, 15).forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${r.id}</strong></td>
      <td>
        <div style="font-weight: 700;">${r.name}</div>
        <small style="color: #64748b;">${r.email}</small>
      </td>
      <td>
        <div>${r.college}</div>
        <small style="color: #2563eb; font-weight: 600;">${r.branch} ('${r.gradYear.slice(-2)})</small>
      </td>
      <td>
        <span class="badge-pill-cyan">${r.channel}</span>
        ${r.referredBy ? `<div style="font-size: 10px; color: #64748b; margin-top: 2px;">Ref: ${r.referredBy}</div>` : ''}
      </td>
      <td><code>${r.refCode}</code></td>
      <td><strong>${r.referralCount || 0}</strong></td>
      <td><small style="color: #64748b;">${r.createdAt}</small></td>
    `;
    tbody.appendChild(tr);
  });

  if (countEl) {
    countEl.textContent = `Showing ${Math.min(15, filtered.length)} of ${filtered.length} entries (Total database: ${AppState.registrations.length})`;
  }
}

// Export Table to CSV
function exportRegistrationsCSV() {
  if (AppState.registrations.length === 0) {
    showToast('No registrations to export.');
    return;
  }

  const headers = ['Registration ID', 'Name', 'Email', 'WhatsApp Phone', 'College', 'Branch', 'Graduation Year', 'Channel', 'Referral Code', 'Referred By', 'Referral Count', 'Created At'];
  const rows = AppState.registrations.map(r => [
    r.id,
    `"${r.name.replace(/"/g, '""')}"`,
    r.email,
    r.phone,
    `"${r.college.replace(/"/g, '""')}"`,
    r.branch,
    r.gradYear,
    r.channel,
    r.refCode,
    r.referredBy || '',
    r.referralCount || 0,
    r.createdAt
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `nxtwave_registrations_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('📥 CSV Export downloaded successfully!');
}

// WhatsApp Message Kit Renderer
function renderWhatsAppKit() {
  updateWhatsAppTemplate();
}

function updateWhatsAppTemplate() {
  const ambCode = document.getElementById('kit-amb-select')?.value || 'AMB_JNTU_01';
  const amb = AppState.activeAmbassadors.find(a => a.code === ambCode) || { name: 'Campus Ambassador', code: ambCode };

  const activeTab = document.querySelector('.kit-tab-btn.active');
  const templateKey = activeTab ? activeTab.getAttribute('data-template') : 'group-drop';

  const origin = window.location.origin + window.location.pathname;
  const customLink = `${origin}?ref=${amb.code}`;

  let rawTemplate = WHATSAPP_TEMPLATES[templateKey] || WHATSAPP_TEMPLATES['group-drop'];
  const formatted = rawTemplate
    .replace(/{{LINK}}/g, customLink)
    .replace(/{{AMB_NAME}}/g, amb.name);

  const previewBox = document.getElementById('kit-message-text');
  if (previewBox) {
    previewBox.textContent = formatted;
  }
}

function handleCopyWhatsAppTemplate() {
  const previewBox = document.getElementById('kit-message-text');
  if (!previewBox) return;

  navigator.clipboard.writeText(previewBox.textContent).then(() => {
    const btnText = document.getElementById('copy-template-text');
    btnText.textContent = 'Copied to Clipboard! ✓';
    showToast('WhatsApp message template copied! Ready to broadcast to student groups.');
    setTimeout(() => { btnText.textContent = '📋 Copy Formatted Message'; }, 2000);
  });
}

// FAQ Accordion Setup
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Helper: Lightweight Toast Notification
function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.right = '24px';
    toast.style.background = '#0f172a';
    toast.style.color = '#ffffff';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '9999px';
    toast.style.fontSize = '13.5px';
    toast.style.fontWeight = '600';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.25)';
    toast.style.zIndex = '9999';
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
  }, 3200);
}
