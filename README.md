# Accredian Enterprise Landing Page

A production-grade recreation of the [Accredian Enterprise Landing Page](https://enterprise.accredian.com/) built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🚀 Live Demo & Repository

- **Live Vercel Deployment:** [https://accredian-enterprise-platform-two.vercel.app/](https://accredian-enterprise-platform-two.vercel.app/)
- **GitHub Repository:** [GarimaSingh207/accredian-enterprise-platform](https://github.com/GarimaSingh207/accredian-enterprise-platform)

---

## 📋 Project Overview

Accredian Enterprise provides executive corporate training and capability-building programs for high-performance enterprise teams. This repository contains a fully responsive, accessible, and high-performance landing page application featuring:

- **13 Complete Sections:** Hero, Track Record (Stats), Client Marquee, Accredian Edge, Domain Expertise, Course Segmentation, Target Audience, CAT Framework, How It Works, Testimonials, FAQ Accordion, CTA Banner, and Footer.
- **Lead Capture & API Integration:** Enterprise enquiry modal and server-side Next.js Route Handler (`/api/enquire`) with form validation.
- **Interactive Micro-Animations:** Fluid scrolling, active section tracking, counter animations, marquee loops, and smooth modal overlays.

---

## 🛠️ Technology Stack & Architecture

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS v4 (`@theme` design tokens and custom utilities)
- **Icons:** Lucide React + Inline Brand SVGs
- **Typography:** Google `Inter` via `next/font/google`
- **State Management:** Lightweight React Context (`ModalContext`)

---

## 🎯 Approach Taken

1. **Static-First Pre-rendering (SSG):** The primary landing page route (`/`) is pre-rendered at build time for instant initial paint, maximum SEO indexability, and minimal LCP latency.
2. **Island Hydration:** Client-side interactivity (`"use client"`) is restricted strictly to dynamic interactive components (`Navbar`, `AnimatedCounter`, `FaqSection`, `EnquiryForm`, `Modal`), keeping the component tree lean.
3. **Data & UI Decoupling:** Content objects (FAQs, stats, domain hubs, client logos) are isolated into strongly typed data files in `data/`, making content updates straightforward and type-safe.
4. **Full-Stack Route Handler:** Form submissions connect to a server-side API Route Handler (`app/api/enquire/route.ts`), enforcing field validation and returning structured JSON payloads.
5. **Systematic Design System:** Consistent color scale (Accredian Primary Blue `#2563EB` and Slate neutral palette) applied uniformly across all UI primitives.

---

## 📁 Directory Structure

```text
├── app/
│   ├── api/enquire/route.ts   # POST API endpoint for enquiry submissions
│   ├── globals.css            # Tailwind CSS v4 tokens and keyframe animations
│   ├── layout.tsx             # Root layout with Inter font, OpenGraph metadata & JSON-LD
│   └── page.tsx               # Home page composition
├── components/
│   ├── ui/                    # Generic, reusable UI primitives (Button, Card, Modal, etc.)
│   └── sections/              # Page sections (Hero, Stats, Clients, FAQ, Footer, etc.)
├── context/
│   └── ModalContext.tsx       # Global modal state provider
├── data/                      # Typed content files (faqs, stats, domain-hubs, etc.)
├── hooks/                     # Custom React hooks (useCountUp, useActiveSection, etc.)
├── lib/                       # Utility functions (cn, validators, constants)
└── types/                     # TypeScript interface definitions
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GarimaSingh207/accredian-enterprise-platform.git
   cd accredian-enterprise-platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Start production server locally:**
   ```bash
   npm run start
   ```

---

## 🤖 AI Usage Explanation

AI assistance was utilized as a collaborative pair-programmer throughout the development lifecycle in the following specific areas:

- **Architecture & Planning:** Evaluating component hierarchy, layout structures, and Next.js App Router static-first rendering patterns.
- **Code Review & Quality Audits:** Identifying potential re-render bottlenecks, checking TypeScript interface completeness, and verifying zero lint/build errors.
- **Performance Optimizations:** Identifying high-frequency browser events (`scroll` and `mousemove`) and suggesting `requestAnimationFrame` throttling patterns.
- **Documentation & Readiness Review:** Assisting in structuring comprehensive technical documentation and verifying compliance against assignment criteria.

*Note: All generated code patterns were manually inspected, customized, tested, and validated in local runtime environments.*

---

## 🛠️ Manual Improvements

Hands-on engineering and manual refinements completed on the repository include:

- **UI & Layout Refinements:** Standardized section hierarchy, typography scales, spacing tokens, and card styling across 13 distinct sections.
- **Responsive Viewport Customization:** Designed and tested desktop and mobile layouts, including a full-screen mobile navigation drawer with scroll lock capabilities.
- **Performance Tuning:** Throttled window `scroll` and `mousemove` event handlers using `requestAnimationFrame` and `passive: true` listeners to eliminate layout thrashing. Added `loading="lazy"` and `decoding="async"` attributes to marquee client logos.
- **Accessibility Enhancements:** Implemented keyboard focus trap, `Escape` key listeners for modal closing, `aria-label` tags, `role="dialog"`, `role="tablist"`, and visible focus rings (`focus-visible`).
- **Codebase Clean-up & Git Organization:** Maintained clean commit history, zero lint errors (`npm run lint`), and verified production builds (`npm run build`).

---

## 🔮 Future Improvements

With additional timeline and scope, planned technical enhancements include:

1. **Database Persistence:** Connect the `/api/enquire` route handler to PostgreSQL / Prisma to store lead submissions in a persistent database.
2. **L&D Admin Dashboard:** Build an authenticated administrative portal (`/admin`) for viewing, filtering, and managing corporate leads.
3. **Analytics & Conversion Tracking:** Integrate privacy-focused analytics (e.g. Vercel Analytics / PostHog) to monitor CTA conversion rates.
4. **Form State Persistence:** Implement local storage auto-save drafts for enquiry forms to prevent data loss on accidental reloads.
5. **Automated Testing Suite:** Add unit tests with Vitest/React Testing Library and End-to-End (E2E) tests with Playwright.
6. **Internationalization (i18n):** Add multi-language support (Next.js i18n) for international corporate clients.
7. **Headless CMS Integration:** Connect content files to a Headless CMS (Contentful or Sanity) for dynamic L&D team content management.

---

## ♿ Accessibility & Performance Features

- **Keyboard Navigation:** Full focus trap inside the Enquiry Modal, `Escape` key close handler, and `focus-visible` outline rings on interactive buttons and tabs.
- **ARIA Standards:** `role="dialog"`, `role="tablist"`, `role="region"`, `aria-expanded`, and `aria-controls` implemented on interactive components.
- **Zero CLS & Pre-loading:** Font pre-loading using `next/font/google` prevents layout shifts.

---

## 📜 License
This project is open-source and available under the MIT License.
