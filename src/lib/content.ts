export const CONTACT = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@ethixweb.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999",
  hours: "Mon–Sat, 10 am – 7 pm IST",
};

export const waLink = (text = "Hi Ethixweb, I'd like to discuss a project.") =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

export const indiaPoints = [
  { title: "UPI-first checkout", body: "Razorpay, PhonePe and Cashfree wired in, with COD and EMI where your customers expect them." },
  { title: "WhatsApp is the inbox", body: "Enquiries, order updates and abandoned-cart nudges land where India already talks." },
  { title: "Hindi and regional languages", body: "Pages written natively in Hindi, Tamil, Marathi, Bengali and more — not machine-translated afterthoughts." },
  { title: "Fast on a ₹12,000 phone", body: "Built for mid-range Android on patchy 4G, because that is how most of your customers will arrive." },
];

export const services = [
  {
    slug: "web",
    name: "Website design & development",
    from: "₹45,000",
    blurb: "Fast, premium sites for Indian brands, built on Next.js and designed mobile first.",
    includes: ["Hindi + English page templates", "GST and Udyam details done right", "Core Web Vitals tuned for 4G", "CMS your team can actually use"],
  },
  {
    slug: "ecommerce",
    name: "E-commerce with UPI & Razorpay",
    from: "₹95,000",
    blurb: "Stores that convert on Indian payment habits, shipping rules and festive-season spikes.",
    includes: ["UPI, cards, netbanking, COD, EMI", "Shiprocket / Delhivery integration", "GST-ready invoices", "Pincode serviceability checks"],
  },
  {
    slug: "ads",
    name: "Google Ads & performance marketing",
    from: "₹25,000 / month",
    blurb: "Campaigns tuned to Indian search behaviour, city tiers and call-first buyers.",
    includes: ["Search, Performance Max and YouTube", "Call and WhatsApp conversion tracking", "City-tier budget splits", "Weekly reporting in plain language"],
  },
  {
    slug: "seo",
    name: "SEO for Indian search",
    from: "₹20,000 / month",
    blurb: "Rank for how India searches: Hinglish queries, local intent and voice.",
    includes: ["Hinglish keyword research", "Google Business Profile for every branch", "Local landing pages by city", "Technical SEO and schema"],
  },
  {
    slug: "automation",
    name: "WhatsApp & CRM automation",
    from: "₹30,000",
    blurb: "Every enquiry answered, tracked and followed up without manual copy-paste.",
    includes: ["WhatsApp Business API flows", "Lead routing to your sales team", "Zoho / HubSpot / Sheets sync", "Follow-up reminders"],
  },
  {
    slug: "care",
    name: "Website care & support",
    from: "₹5,000 / month",
    blurb: "Updates, security, backups and speed checks handled by people in your time zone.",
    includes: ["Support in IST business hours", "Monthly speed and uptime report", "Content updates within 48 hours", "DPDP Act-aware consent flows"],
  },
];

export const steps = [
  { title: "Listen", body: "A 45-minute call in your language about your customers, your city mix and what a good month looks like." },
  { title: "Design", body: "Wireframes and a clickable design on your phone first, signed off before any code is written." },
  { title: "Build", body: "Weekly demos on a live link. Payments, WhatsApp and analytics are tested with real transactions." },
  { title: "Launch & grow", body: "We go live, watch the numbers and keep improving speed, search and conversion every month." },
];

export const work = [
  {
    name: "Nirmala Ayurveda",
    type: "D2C store · Lucknow",
    tone: "from-[#1F6B4F] to-[#0E3B2B]",
    result: "Hindi-first storefront with UPI one-tap checkout and WhatsApp order updates.",
    tags: ["Next.js", "Razorpay", "WhatsApp API"],
  },
  {
    name: "Kothari Textiles",
    type: "Exporter · Surat",
    tone: "from-[#C4222B] to-[#7C1219]",
    result: "Catalogue site with bulk-enquiry flow that routes buyers straight to the right salesperson.",
    tags: ["Catalogue", "CRM sync", "SEO"],
  },
  {
    name: "Sanjeevani Clinics",
    type: "Healthcare · Indore",
    tone: "from-[#2B3A9F] to-[#1A1740]",
    result: "Branch pages, call tracking and appointment requests for 6 locations in 2 languages.",
    tags: ["Local SEO", "Google Ads", "Booking"],
  },
];

export const why = [
  { title: "We build for how India buys", body: "Payment habits, trust signals, regional languages and mobile networks are in the first draft, not a later patch." },
  { title: "Global standards, local pricing", body: "The same engineering we use for US clients, priced and supported for Indian businesses." },
  { title: "One team for site and growth", body: "Design, development, Google Ads and SEO under one roof, so nothing falls between agencies." },
  { title: "People who pick up the phone", body: "Support in IST, on WhatsApp or a call. No ticket queues in another time zone." },
];
