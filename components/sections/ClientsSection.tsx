import React from 'react';
import { Award, Building2, ShieldCheck, Star } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { clients } from '@/data/clients';

export function ClientsSection() {
  return (
    <SectionWrapper id="clients" className="bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 py-12 md:py-16 transition-colors duration-300">
      {/* Verified Trust Metrics Bar */}
      <div className="max-w-5xl mx-auto mb-10 p-4 md:p-6 bg-slate-50 dark:bg-slate-900/90 rounded-2xl border border-slate-200/80 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-0 md:divide-x divide-slate-200/80 dark:divide-slate-800">
        <div className="flex flex-col items-center justify-center p-2">
          <div className="flex items-center gap-1 text-amber-500 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-sm font-bold text-slate-900 dark:text-slate-100">4.9 / 5 Rating</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Learner Satisfaction</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2">
          <div className="flex items-center gap-1.5 text-primary-600 dark:text-primary-400 font-bold mb-1">
            <Building2 className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span>200+ Corporate</span>
          </div>
          <span className="text-sm font-bold text-slate-900 dark:text-slate-100">Clients Trained</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Enterprise Partners</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2">
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold mb-1">
            <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>98% Program</span>
          </div>
          <span className="text-sm font-bold text-slate-900 dark:text-slate-100">Satisfaction</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Verified Impact</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2">
          <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold mb-1">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>10,000+</span>
          </div>
          <span className="text-sm font-bold text-slate-900 dark:text-slate-100">Upskilled Professionals</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Industry Workforce</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
          Our Proven <span className="text-primary-600 dark:text-primary-400">Partnerships</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 dark:text-primary-400 font-medium">
          Trusted by Industry-Leading Enterprise Organizations & Global Brands
        </p>
      </div>

      {/* Client Marquee */}
      <div className="py-2">
        <Marquee speed={28}>
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center h-20 md:h-24 w-36 md:w-48 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:scale-[1.06] transition-all duration-300 cursor-default group"
            >
              <img
                src={client.src}
                alt={client.alt}
                width={client.width}
                height={client.height}
                className="max-h-8 md:max-h-10 w-auto filter grayscale opacity-75 dark:brightness-200 group-hover:filter-none group-hover:opacity-100 transition-all duration-300 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </SectionWrapper>
  );
}
