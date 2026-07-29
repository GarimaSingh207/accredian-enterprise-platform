# Accredian Enterprise Landing Page

A production-grade recreation of the [Accredian Enterprise Landing Page](https://enterprise.accredian.com/) built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

---

## 🚀 Live Demo & Repository
- **GitHub Repository:** [GarimaSingh207/accredian-enterprise-platform](https://github.com/GarimaSingh207/accredian-enterprise-platform)

---

## 🛠️ Technology Stack & Architecture

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (`strict: true`)
- **Styling:** Tailwind CSS v4 (`@theme` tokens, custom utilities)
- **Icons:** Lucide React + Inline Brand SVGs
- **Typography:** Google `Inter` via `next/font/google`
- **State Management:** Lightweight React Context (`ModalContext`)

### Key Architecture Principles
1. **Static-First Pre-rendering:** The main landing page route (`/`) is statically generated (SSG) for maximum performance and zero LCP delay.
2. **Island Hydration:** Client-side interactivity (`"use client"`) is isolated strictly to interactive components (`Navbar`, `AnimatedCounter`, `FaqSection`, `EnquiryForm`, `Modal`).
3. **Data & UI Separation:** Page content is decoupled from JSX components and managed as typed objects in `data/`.
4. **Full-Stack Route Handler:** Form submissions are handled via an API Route Handler (`app/api/enquire/route.ts`) with server-side validation and structured responses.

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

## ♿ Accessibility & Performance Features

- **Keyboard Navigation:** Full focus trap inside the Enquiry Modal, `Escape` key close handler, and `focus-visible` outline rings on interactive buttons and tabs.
- **ARIA Standards:** `role="dialog"`, `role="tablist"`, `role="region"`, `aria-expanded`, and `aria-controls` implemented on interactive components.
- **Zero CLS:** Font pre-loading using `next/font/google` prevents layout shifts.

---

## 📜 License
This project is open-source and available under the MIT License.
