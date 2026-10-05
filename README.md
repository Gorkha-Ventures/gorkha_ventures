# Gorkha Ventures — Next.js Application

An operator-led accelerator for founders building in India.

Built with **Next.js 15 (App Router)**, **React 19**, and **TypeScript**.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
gorkha-ventures/
├── public/                    # Static assets
│   ├── favicon.svg            # Centered Cobalt squircle favicon
│   ├── logo.svg               # Master Cobalt vector logomark
│   └── assets/
│       ├── logo_tile_cobalt.png # Apple Touch Icon / Social Preview
│       └── mentors/           # 18 high-resolution operator portraits (.jpg)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with fonts, metadata & JSON-LD
│   │   ├── page.tsx           # Main single-page landing assembly
│   │   └── globals.css        # Brand system (Bone, Cobalt, Carbon, Rust, No-Italics)
│   ├── components/
│   │   ├── Header.tsx         # Navigation header + "Apply for Incubation ↗"
│   │   ├── Hero.tsx           # Thesis & ₹1000Cr+ metrics strip
│   │   ├── OperatorCouncil.tsx# Infinite dual-track continuous marquee
│   │   ├── Portfolio.tsx      # OneLeap & FlexiFunnels cards with founder quotes
│   │   ├── Pillars.tsx        # 4 Pillars of Startup Execution
│   │   ├── SelectionProcess.tsx # 7-day selection timeline
│   │   ├── ApplicationCta.tsx # Bottom high-impact application box
│   │   └── Footer.tsx         # Brand lockup & social media vector links
│   ├── data/
│   │   └── operators.ts       # Typed dataset of all 18 council mentors
│   └── types/
│       └── operator.ts        # TypeScript interfaces
├── next.config.mjs            # Next.js configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json              # Strict TypeScript configuration
```

---

## 🚢 Deployment

Deploy seamlessly to:
- **Vercel**: `vercel deploy`
- **Netlify**: Connect GitHub repository or drag & drop `.next` build output
- **Cloudflare Pages / AWS Amplify / Docker**
