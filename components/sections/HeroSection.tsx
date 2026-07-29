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
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useModal } from '@/context/ModalContext';

export function HeroSection() {
  const { openModal } = useModal();

  return (
    <section
      id="home"
      className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white"
    >
      {/* Background Decorative Mesh & Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#1565C0_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-primary-100/80 rounded-3xl p-6 md:p-10 lg:p-12 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
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
              </div>

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
                Next-Gen <span className="text-accent-500">Expertise</span> <br />
                For Your <span className="text-primary-600">Enterprise</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-normal leading-relaxed max-w-xl">
                Cultivate high-performance teams through expert learning, bespoke corporate training programs, and application-driven capabilities.
              </p>

              {/* Key Highlights Grid (Matching Reference Site Highlights) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-neutral-50/60 border border-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-neutral-800">
                    Tailored Solutions
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-neutral-50/60 border border-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-neutral-800">
                    Industry Insights
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2 rounded-lg bg-neutral-50/60 border border-neutral-100">
                  <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-neutral-800">
                    Expert Guidance
                  </span>
                </div>
              </div>

              {/* CTA Group with Micro-copy */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={openModal}
                    className="shadow-md hover:shadow-lg transition-all"
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
                  <Lock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>No obligation • Confidential L&D consultation</span>
                </div>
              </div>

              {/* Enterprise Learner Proof Bar (Contained cleanly inside left column) */}
              <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-neutral-600">
                  <strong className="text-neutral-900 font-bold">10,000+ Enterprise Professionals</strong> upskilled across Fortune 500 & tech leaders
                </div>
              </div>
            </div>

            {/* Right Column Corporate Visual Illustration */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square bg-neutral-50/50 rounded-3xl p-4 border border-neutral-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 group flex items-center justify-center">
                <img
                  src="/assets/images/corporate-team.svg"
                  alt="Accredian Corporate Training Visual"
                  className="w-full h-auto max-h-[350px] object-contain group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
