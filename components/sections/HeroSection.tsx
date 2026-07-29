'use client';

import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  ChevronRight,
  Star,
  Lock,
  Award,
  TrendingUp,
  BookOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useModal } from '@/context/ModalContext';

export function HeroSection() {
  const { openModal } = useModal();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 12; // Maximum 12px translation
      const y = (clientY / window.innerHeight - 0.5) * 12;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-white"
    >
      {/* Subtle Specific Radial Gradients */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          backgroundImage: `
            radial-gradient(circle at calc(80% + ${mousePos.x}px) calc(20% + ${mousePos.y}px), rgba(37,99,235,0.10), transparent 45%),
            radial-gradient(circle at calc(20% + ${mousePos.x}px) calc(80% + ${mousePos.y}px), rgba(14,165,233,0.05), transparent 35%)
          `
        }}
      />

      {/* Dotted Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#2563EB_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      {/* Slow Floating Decorative Circles */}
      <div 
        className="absolute top-16 left-12 w-[120px] h-[120px] rounded-full bg-primary-400/5 blur-sm pointer-events-none animate-float-slow"
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
      />
      <div 
        className="absolute bottom-24 left-1/3 w-[80px] h-[80px] rounded-full bg-blue-500/5 blur-xs pointer-events-none animate-float-medium"
        style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-50/80 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">

              {/* Display Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Next-Gen <span className="text-primary-600">Expertise</span> <br />
                For Your <span className="text-blue-700">Enterprise</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-xl">
                Cultivate high-performance teams through expert learning, bespoke corporate training programs, and application-driven capabilities.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-slate-800">
                    Tailored Solutions
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-slate-800">
                    Industry Insights
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-slate-800">
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

              {/* Enterprise Learner Proof Bar */}
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

            {/* Right Column Corporate Visual & Floating Glass Cards */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Subtle Blue Glow Behind Hero Illustration */}
              <div className="absolute inset-0 bg-primary-500/25 blur-[100px] pointer-events-none rounded-full" />
              
              <div className="relative w-full max-w-md aspect-square bg-neutral-50/50 rounded-3xl p-4 border border-neutral-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 group flex items-center justify-center z-10">
                <img
                  src="/assets/images/corporate-team.svg"
                  alt="Accredian Corporate Training Visual"
                  className="w-full h-auto max-h-[350px] object-contain group-hover:scale-[1.01] transition-transform duration-300"
                />

                {/* Floating Glass Card 1 */}
                <div 
                  className="absolute -top-4 -left-6 bg-white/75 backdrop-blur-md border border-white/40 shadow-card rounded-2xl p-3 flex flex-col gap-1 z-20 animate-float-slow pointer-events-none"
                  style={{ transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px)` }}
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary-700">
                    <BookOpen className="w-3.5 h-3.5 text-primary-500" />
                    Enterprise Training
                  </div>
                  <div className="text-[10px] text-neutral-500">500+ Programs</div>
                </div>

                {/* Floating Glass Card 2 */}
                <div 
                  className="absolute bottom-12 -right-8 bg-white/75 backdrop-blur-md border border-white/40 shadow-card rounded-2xl p-3 flex items-center gap-2 z-20 animate-float-medium pointer-events-none"
                  style={{ transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)` }}
                >
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold text-neutral-800">Learning Analytics</span>
                </div>

                {/* Floating Glass Card 3 */}
                <div 
                  className="absolute -bottom-4 -left-8 bg-white/75 backdrop-blur-md border border-white/40 shadow-card rounded-2xl p-3 flex items-center gap-2 z-20 animate-float-fast pointer-events-none"
                  style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)` }}
                >
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold text-neutral-800">Certification Pathways</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
