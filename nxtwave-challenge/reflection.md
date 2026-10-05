# Reflection

Candidate: Chava Sathwik
Status: 4th Year Engineering Student

---

## Q1. What changed between my first idea and final solution?

My initial plan was simple: create a clean landing page with a registration form and submit it.

When I studied the problem prompt again, I realized a basic landing page would not reach 500 registrations on a budget of Rs 2000. A plain page stops working the moment you stop sharing it. I needed a system that keeps bringing in registrations on its own.

I changed my approach in four specific ways:
1. Registration Form: Added validation to stop duplicate phone numbers and emails, plus automatic referral link creation.
2. Referral System: Built a 3 level reward tier where students unlock project templates when friends sign up through their link.
3. Message Templates: Created copy paste WhatsApp templates customized for college ambassadors so outreach takes seconds.
4. Coordinator Dashboard: Built an admin view to monitor signups, check college distribution, and export data to CSV.

The main difference is that the final solution runs like a referral loop instead of just a static form.

---

## Q2. If I had another 24 hours, what would I improve?

Here are three things I would improve next:

1. Real Database with Supabase
Right now the demo saves data to browser storage. It works well for testing, but each device starts with its own data. In another day, I would connect Supabase to store registrations in a real cloud database across all devices.

2. Live AI Connection
The current project finder gives tailored blueprints from a curated list. Connecting directly to the Gemini API would let students enter any specific project idea and get an instant custom plan.

3. Short Video Walkthrough
Adding a 60 second video at the top of the page showing the project build would help students understand what they will learn before registering.

---

## Q3. What did AI suggest that I rejected and why?

1. Google Sheets as the main database
AI initially suggested using Google Sheets with Apps Script. I decided against this because Google Sheets can fail when many students submit forms at the same time during group message drops. It is also slower on mobile networks. I kept Google Sheets only as a CSV export option and kept data in direct code storage.

2. Adding made up testimonials
AI suggested adding student quotes praising the workshop. I rejected this because the challenge guidelines strictly state not to use fake testimonials. Instead, I used an honest demo counter and college list clearly marked for simulation.

3. Setting up complex external automation tools
AI suggested running an external workflow tool like n8n for background emails. I rejected this because it requires extra server setup that might fail during evaluation. Instead, I built the message template kit directly into the web page where anyone can test and copy it immediately.
