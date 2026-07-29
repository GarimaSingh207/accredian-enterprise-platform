'use client';

import React from 'react';
import {
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Users,
  Award,
  Star,
  Lock,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useModal } from '@/context/ModalContext';

export function HeroSection() {
  const { openModal } = useModal();

  return (
    <section
      id="home"
      className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-primary-50/40 to-white"
    >
      {/* Background Decorative Mesh & Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#1565C0_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="bg-white/90 backdrop-blur-md border border-primary-100/80 rounded-3xl p-6 md:p-10 lg:p-12 shadow-card hover:shadow-card-hover transition-all duration-500 relative overflow-hidden">
          {/* Top Right Corner Accent Glow */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-gradient-to-bl from-accent-500/10 via-primary-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge Bar */}
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="primary" className="gap-1.5 px-3.5 py-1.5 text-xs font-semibold shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-primary-600" />
                  Enterprise Learning & Capability Partner
                </Badge>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span>4.9 / 5 Corporate Rating</span>
                </div>
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
                Next-Gen <span className="text-accent-500">Expertise</span> <br />
                For Your <span className="text-primary-600">Enterprise</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-normal leading-relaxed max-w-xl">
                Cultivate high-performance teams through expert learning, bespoke corporate training programs, and application-driven capabilities.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-neutral-50/80 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0" />
                  <span className="text-sm md:text-base font-semibold text-neutral-800">
                    Tailored Solutions
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-neutral-50/80 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0" />
                  <span className="text-sm md:text-base font-semibold text-neutral-800">
                    Industry Insights
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-neutral-50/80 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0" />
                  <span className="text-sm md:text-base font-semibold text-neutral-800">
                    Expert Guidance
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-neutral-50/80 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0" />
                  <span className="text-sm md:text-base font-semibold text-neutral-800">
                    Measurable ROI
                  </span>
                </div>
              </div>

              {/* CTA Group with Micro-copy */}
              <div className="pt-4 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={openModal}
                    className="shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    Enquire Now
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors border border-transparent hover:border-primary-100"
                  >
                    Explore Framework
                  </a>
                </div>

                {/* Conversion Trust Micro-copy */}
                <div className="flex items-center gap-2 text-xs text-neutral-500 pt-1">
                  <Lock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>No obligation • Confidential consultation • Responds in 24 hrs</span>
                </div>
              </div>

              {/* Alumni Avatar Social Proof Bar */}
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-4">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-primary-600 text-white text-xs font-bold flex items-center justify-center">
                    JD
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-accent-500 text-white text-xs font-bold flex items-center justify-center">
                    AK
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                    SR
                  </div>
                  <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                    +
                  </div>
                </div>
                <div className="text-xs text-neutral-600">
                  Joined by <strong className="text-neutral-900 font-bold">10,000+ professionals</strong> from Fortune 500 companies
                </div>
              </div>
            </div>

            {/* Right Column Interactive Showcase Card */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-4/3 sm:aspect-square bg-gradient-to-br from-primary-600 via-primary-700 to-accent-500 rounded-3xl p-7 text-white shadow-xl flex flex-col justify-between overflow-hidden group border border-white/20">
                {/* Subtle Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent)] pointer-events-none" />

                {/* Floating Highlight Pill */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white border border-white/30 flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  Cohort 2026 Active
                </div>

                <div className="relative z-10 space-y-4 pt-2">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xs">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-snug tracking-tight">
                    Transforming Workforce Capabilities
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed font-normal">
                    Bespoke learning tracks engineered for enterprise executives, product leaders, and engineering teams.
                  </p>
                </div>

                <div className="relative z-10 pt-6 grid grid-cols-2 gap-3 border-t border-white/20">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                    <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium">
                      <Award className="w-3.5 h-3.5 text-amber-300" />
                      Satisfaction
                    </div>
                    <div className="text-2xl font-extrabold text-white mt-1">98%</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                    <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                      Retention
                    </div>
                    <div className="text-2xl font-extrabold text-white mt-1">4.9 / 5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
