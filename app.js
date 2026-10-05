/**
 * GORKHA VENTURES — APP CONTROLLER
 * Zero-dependency Vanilla JS implementation
 * Infinite Continuous Horizontal Marquee of Operator Council Mentors
 */

// Full Operator Council Directory (18/18 with real portraits)
const OPERATOR_COUNCIL = [
  {
    name: "Abhimanyu Saxena",
    initials: "AS",
    role: "Co-Founder",
    company: "Scaler",
    domain: "SCALING & TECH",
    isUnicorn: true,
    image: "assets/mentors/abhimanyu-saxena.jpg"
  },
  {
    name: "Saurabh Bhatnagar",
    initials: "SB",
    role: "Co-Founder",
    company: "FlexiFunnels",
    domain: "GTM & REVENUE",
    isUnicorn: false,
    image: "assets/mentors/saurabh-bhatnagar.jpg"
  },
  {
    name: "Bhavik Rasyara",
    initials: "BR",
    role: "Managing Partner",
    company: "Pravah Capital",
    domain: "EARLY STAGE CAPITAL",
    isUnicorn: false,
    image: "assets/mentors/bhavik-rasyara.jpg"
  },
  {
    name: "Shubham Pandey",
    initials: "SP",
    role: "Founder",
    company: "OneLeap",
    domain: "ENTERPRISE SAAS",
    isUnicorn: false,
    image: "assets/mentors/shubham-pandey.jpg"
  },
  {
    name: "Bindu Reddy",
    initials: "BR",
    role: "Investor",
    company: "Dexter Capital",
    domain: "VENTURE CAPITAL",
    isUnicorn: false,
    image: "assets/mentors/bindu-reddy.jpg"
  },
  {
    name: "Mudit Goel",
    initials: "MG",
    role: "Head of AI Product",
    company: "CommerceIQ (Softbank)",
    domain: "AI & PRODUCT STRATEGY",
    isUnicorn: false,
    image: "assets/mentors/mudit-goel.jpg"
  },
  {
    name: "Abhineet Kumar",
    initials: "AK",
    role: "Co-Founder",
    company: "Rockethealth",
    domain: "PRODUCT & GROWTH",
    isUnicorn: false,
    image: "assets/mentors/abhineet-kumar.jpg"
  },
  {
    name: "Dhrupad Shrivastava",
    initials: "DS",
    role: "Founder",
    company: "Dumpum",
    domain: "OPERATIONS & SCALE",
    isUnicorn: false,
    image: "assets/mentors/dhrupad-shrivastava.jpg"
  },
  {
    name: "Dr. Rajneesh Negi",
    initials: "RN",
    role: "Founder & Director",
    company: "PMT India / Ganga Net",
    domain: "STRATEGY & ECOSYSTEM",
    isUnicorn: false,
    image: "assets/mentors/rajneesh-negi.jpg"
  },
  {
    name: "Parminder Singh",
    initials: "PS",
    role: "Founder",
    company: "Redscope.AI",
    domain: "AI & DEEPTECH",
    isUnicorn: false,
    image: "assets/mentors/parminder-singh.jpg"
  },
  {
    name: "Apurv Singh Baghel",
    initials: "AB",
    role: "Group Manager",
    company: "NEC Corp",
    domain: "ENTERPRISE TECH",
    isUnicorn: false,
    image: "assets/mentors/apurv-singh.jpg"
  },
  {
    name: "Vibhu Rishi",
    initials: "VR",
    role: "Senior Product Manager",
    company: "McAfee",
    domain: "SECURITY & ARCHITECTURE",
    isUnicorn: false,
    image: "assets/mentors/vibhu-rishi.jpg"
  },
  {
    name: "Jyoti Malhotra",
    initials: "JM",
    role: "Co-Founder",
    company: "SoJo Marketing",
    domain: "GROWTH & GTM",
    isUnicorn: false,
    image: "assets/mentors/jyoti-malhotra.jpg"
  },
  {
    name: "Dr. Srishty P. Gajbhiye",
    initials: "SG",
    role: "Chief Emotional Architect",
    company: "Jaagr Mind",
    domain: "LEADERSHIP & CULTURE",
    isUnicorn: false,
    image: "assets/mentors/dr-srishty.jpg"
  },
  {
    name: "Gaurav Agrawal",
    initials: "GA",
    role: "Founder & CEO",
    company: "Ascendra Advisors",
    domain: "CAPITAL & WEALTH",
    isUnicorn: false,
    image: "assets/mentors/gaurav-agrawal.jpg"
  },
  {
    name: "Divya Tak",
    initials: "DT",
    role: "Founder",
    company: "Joyus Studio",
    domain: "DESIGN & BRAND",
    isUnicorn: false,
    image: "assets/mentors/divya-tak.jpg"
  },
  {
    name: "Preeti Kumbhaj",
    initials: "PK",
    role: "Chief of Staff",
    company: "OneLeap",
    domain: "OPERATIONS & EXECUTION",
    isUnicorn: false,
    image: "assets/mentors/preeti-kumbhaj.jpg"
  },
  {
    name: "Saurabh Saxena",
    initials: "SS",
    role: "Co-Founder",
    company: "Jaagr Mind",
    domain: "OPERATIONS & SCALE",
    isUnicorn: false,
    image: "assets/mentors/saurabh-saxena.jpg"
  }
];

// DOM Elements
const marqueeTrack1 = document.getElementById('marqueeTrack1');
const marqueeTrack2 = document.getElementById('marqueeTrack2');

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  setupMarquee();
});

// Build Card HTML
function createOperatorCard(op) {
  const avatarHtml = op.image 
    ? `<img src="${op.image}" alt="${op.name}" class="operator-avatar-img" loading="lazy">` 
    : `<div class="operator-avatar ${op.isUnicorn ? 'unicorn-avatar' : ''}">${op.initials}</div>`;

  return `
    <article class="operator-marquee-card">
      <div class="avatar-wrap">
        ${avatarHtml}
      </div>
      <div class="operator-details">
        <h3 class="operator-name">${op.name}</h3>
        <p class="operator-title">${op.role}, <span class="operator-company">${op.company}</span></p>
        <span class="operator-tag mono-label">${op.domain}</span>
      </div>
    </article>
  `;
}

// Populate Dual Infinite Marquee Tracks
function setupMarquee() {
  if (!marqueeTrack1 || !marqueeTrack2) return;

  // Split into two balanced sets for varied visual flow
  const half = Math.ceil(OPERATOR_COUNCIL.length / 2);
  const set1 = OPERATOR_COUNCIL.slice(0, half);
  const set2 = OPERATOR_COUNCIL.slice(half);

  // Generate and duplicate cards for continuous seamless looping
  const cards1 = set1.map(createOperatorCard).join('');
  const cards2 = set2.map(createOperatorCard).join('');

  // Duplicate 4x to ensure smooth loop without gap on ultra-wide screens
  marqueeTrack1.innerHTML = cards1 + cards1 + cards1 + cards1;
  marqueeTrack2.innerHTML = cards2 + cards2 + cards2 + cards2;
}
