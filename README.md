# Accredian Enterprise Landing Page

A full-stack implementation of the [Accredian Enterprise Landing Page](https://enterprise.accredian.com/) built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🚀 Live Demo & Repository

- **Live Vercel Deployment:** [https://accredian-enterprise-platform-two.vercel.app/](https://accredian-enterprise-platform-two.vercel.app/)
- **GitHub Repository:** [GarimaSingh207/accredian-enterprise-platform](https://github.com/GarimaSingh207/accredian-enterprise-platform)

---

## 📋 Project Overview

This repository contains a responsive web platform developed for Accredian Enterprise corporate training solutions. Key features include:

- **13 Complete Sections:** Hero, Track Record (Stats), Client Marquee, Accredian Edge, Domain Expertise, Course Segmentation, Target Audience, CAT Framework, How It Works, Testimonials, FAQ Accordion, CTA Banner, and Footer.
- **Lead Capture & API Integration:** Enterprise enquiry modal connected to a server-side Next.js Route Handler (`/api/enquire`) with form validation.
- **Interactive UI Components:** Smooth scrolling, active section tracking, counter animations, marquee loops, and accessible modal overlays.

---

## 🛠️ Technology Stack & Architecture

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS v4 (`@theme` design tokens and CSS variables)
- **Icons:** Lucide React + Inline Brand SVGs
- **Typography:** Google `Inter` via `next/font/google`
- **State Management:** React Context (`ModalContext`)

---

## 🎯 Approach Taken

1. **Static Pre-rendering (SSG):** The main landing page route (`/`) is statically generated at build time to ensure fast page loads and good search engine indexability.
2. **Client Component Isolation:** Client-side interactivity (`"use client"`) is restricted to dynamic UI elements (`Navbar`, `AnimatedCounter`, `FaqSection`, `EnquireForm`, `Modal`), keeping server-rendered HTML minimal.
3. **Data & UI Decoupling:** Content objects (FAQs, statistics, domain hubs, and partner logos) are managed in typed configuration files in `data/`, making updates straightforward.
4. **Full-Stack Route Handler:** Form submissions are processed by a server-side API Route Handler (`app/api/enquire/route.ts`) that validates input fields and returns structured JSON responses.
5. **Structured Design System:** Consistent color palette (Accredian Primary Blue `#2563EB` and Slate neutral scale) applied across reusable UI components.

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

AI assistance was utilized as a supportive tool during development in the following specific areas:

- **Architecture Planning:** Discussing component structure, file layout, and Next.js App Router patterns.
- **Code Review & Audits:** Reviewing component logic, identifying potential re-render issues, and checking TypeScript type definitions.
- **Performance Optimizations:** Identifying high-frequency browser events (`scroll` and `mousemove`) and implementing `requestAnimationFrame` throttling patterns.
- **Documentation:** Structuring clear technical documentation for setup instructions and project details.

*All generated code patterns were reviewed, customized, and manually tested in the local development environment.*

---

## 🛠️ Manual Improvements

Hands-on engineering tasks completed manually in the repository include:

- **UI & Layout Development:** Building and styling all 13 landing page sections to match the required visual structure.
- **Responsive Navigation & Media Handling:** Creating desktop and mobile layouts, including a full-screen navigation drawer with scroll locking.
- **Performance Tuning:** Throttling window `scroll` and `mousemove` event listeners using `requestAnimationFrame` to prevent layout thrashing. Adding `loading="lazy"` and `decoding="async"` attributes to images.
- **Accessibility Implementation:** Adding keyboard focus traps, `Escape` key listeners for modal closing, `aria-label` tags, ARIA roles (`role="dialog"`, `role="tablist"`), and visible focus indicators (`focus-visible`).
- **Build Verification & Code Hygiene:** Resolving linter feedback (`npm run lint`), ensuring clean production builds (`npm run build`), and organizing git commits.

---

## 🔮 Future Improvements

Potential enhancements that could be added in future iterations include:

1. **Database Persistence:** Connecting `/api/enquire` to a PostgreSQL or MongoDB database using an ORM like Prisma.
2. **Admin Dashboard:** Creating a secure route (`/admin`) to view and manage incoming corporate leads.
3. **Analytics Integration:** Integrating privacy-friendly analytics to track page views and form conversion metrics.
4. **Form Auto-Save:** Adding local storage draft persistence to prevent accidental form data loss.
5. **Automated Testing:** Implementing unit tests using Vitest and end-to-end tests with Playwright.
6. **Internationalization (i18n):** Adding multi-language support for international enterprise clients.
7. **CMS Integration:** Connecting content files to a headless CMS (such as Sanity or Contentful) for non-technical content management.

---

## ♿ Accessibility & Performance Features

- **Keyboard Navigation:** Focus management inside the Enquiry Modal, `Escape` key close handling, and `focus-visible` outline rings on interactive controls.
- **ARIA Standards:** `role="dialog"`, `role="tablist"`, `role="region"`, `aria-expanded`, and `aria-controls` attributes implemented across interactive components.
- **Font Optimization:** Zero-CLS font loading using `next/font/google`.

---

## 📝 Assignment Context

This repository was developed as part of the **Full Stack Developer Intern** assignment to recreate the Accredian Enterprise landing page using Next.js. The project focuses on responsive design, reusable component architecture, server-side API integration, clean engineering practices, and responsible AI-assisted development.

---

## 📜 License
This project is open-source and available under the MIT License.
