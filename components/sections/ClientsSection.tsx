import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Marquee } from '@/components/ui/Marquee';
import { clients } from '@/data/clients';

export function ClientsSection() {
  return (
    <SectionWrapper id="clients" className="bg-white border-b border-neutral-100">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
          Our Proven <span className="text-accent-500">Partnerships</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 font-medium">
          Successful Collaborations With the Industry’s Best
        </p>
      </div>

      {/* Client Marquee */}
      <div className="py-4">
        <Marquee speed={25}>
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center h-20 px-8 py-3 bg-neutral-50/80 rounded-xl border border-neutral-200/60 hover:border-primary-200 hover:bg-white hover:shadow-xs transition-all cursor-default group"
            >
              <span className="text-xl md:text-2xl font-black tracking-tight text-neutral-600 group-hover:text-primary-600 transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </SectionWrapper>
  );
}
