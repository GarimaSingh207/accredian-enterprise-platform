import React from 'react';
import { Award, Building2, ShieldCheck, Star } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { clients } from '@/data/clients';

export function ClientsSection() {
  return (
    <SectionWrapper id="clients" className="bg-white border-b border-neutral-100 py-12 md:py-16">
      {/* Trust Rating Bar Header */}
      <div className="max-w-5xl mx-auto mb-10 p-4 md:p-6 bg-neutral-50/80 rounded-2xl border border-neutral-200/60 grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x-0 md:divide-x divide-neutral-200/60">
        <div className="flex flex-col items-center justify-center p-2">
          <div className="flex items-center gap-1 text-amber-500 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-sm font-bold text-neutral-900">4.9 / 5 Corporate Rating</span>
          <span className="text-xs text-neutral-500">Based on 500+ Cohorts</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2">
          <div className="flex items-center gap-1.5 text-primary-600 font-bold mb-1">
            <Building2 className="w-4 h-4 text-primary-600" />
            <span>200+ Enterprise</span>
          </div>
          <span className="text-sm font-bold text-neutral-900">Global Partners</span>
          <span className="text-xs text-neutral-500">Fortune 500 & Startups</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2">
          <div className="flex items-center gap-1.5 text-emerald-600 font-bold mb-1">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>98% Completion</span>
          </div>
          <span className="text-sm font-bold text-neutral-900">Retention Rate</span>
          <span className="text-xs text-neutral-500">Verified Program ROI</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2">
          <div className="flex items-center gap-1.5 text-indigo-600 font-bold mb-1">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>ISO Certified</span>
          </div>
          <span className="text-sm font-bold text-neutral-900">Accredited Quality</span>
          <span className="text-xs text-neutral-500">Global L&D Standards</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-neutral-900">
          Our Proven <span className="text-accent-500">Partnerships</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 font-medium">
          Trusted by Industry-Leading Enterprise Organizations & Global Brands
        </p>
      </div>

      {/* Client Marquee */}
      <div className="py-2">
        <Marquee speed={28}>
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center h-16 md:h-20 px-8 py-3 bg-neutral-50/80 rounded-xl border border-neutral-200/60 hover:border-primary-300 hover:bg-white hover:shadow-xs transition-all cursor-default group"
            >
              <span className="text-lg md:text-2xl font-black tracking-tight text-neutral-600 group-hover:text-primary-600 transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </SectionWrapper>
  );
}
