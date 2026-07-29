'use client';

import React from 'react';
import { CheckCircle2, ChevronRight, ShieldCheck, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useModal } from '@/context/ModalContext';

export function HeroSection() {
  const { openModal } = useModal();

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white border border-primary-100 rounded-3xl p-6 md:p-10 lg:p-12 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <Badge variant="primary" className="gap-1.5 px-3.5 py-1.5 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-600" />
                Enterprise Learning & Capability Partner
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
                Next-Gen <span className="text-accent-500">Expertise</span> <br />
                For Your <span className="text-primary-600">Enterprise</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-normal leading-relaxed max-w-xl">
                Cultivate high-performance teams through expert learning, bespoke corporate training, and application-driven capabilities.
              </p>

              {/* Key Highlights Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0" />
                  <span className="text-sm md:text-base font-semibold text-neutral-800">
                    Tailored Solutions
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0" />
                  <span className="text-sm md:text-base font-semibold text-neutral-800">
                    Industry Insights
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0" />
                  <span className="text-sm md:text-base font-semibold text-neutral-800">
                    Expert Guidance
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-success-500 shrink-0" />
                  <span className="text-sm md:text-base font-semibold text-neutral-800">
                    Measurable ROI
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button variant="primary" size="lg" onClick={openModal} className="shadow-md">
                  Enquire Now
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-primary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  Explore Framework
                </a>
              </div>
            </div>

            {/* Right Illustration / Visual Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-4/3 sm:aspect-square bg-gradient-to-tr from-primary-600 to-accent-500 rounded-2xl p-6 text-white shadow-xl flex flex-col justify-between overflow-hidden group">
                {/* Visual Decorative Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    Transforming Workforce Capabilities
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Custom cohorts built for enterprise leaders, product managers, and engineering teams.
                  </p>
                </div>

                <div className="relative z-10 pt-6 grid grid-cols-2 gap-3 border-t border-white/20">
                  <div className="bg-white/10 backdrop-blur-xs rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-xs text-white/80">
                      <Award className="w-3.5 h-3.5" />
                      Satisfaction
                    </div>
                    <div className="text-xl font-bold text-white mt-0.5">98%</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xs rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-xs text-white/80">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Retention
                    </div>
                    <div className="text-xl font-bold text-white mt-0.5">4.9/5</div>
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
