'use client';

import React from 'react';
import { ChevronRight, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useModal } from '@/context/ModalContext';

export function CtaBannerSection() {
  const { openModal } = useModal();

  return (
    <section className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 text-white py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="space-y-3 text-center md:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-white/90">
            <PhoneCall className="w-3.5 h-3.5" />
            Dedicated L&D Advisory
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Looking for Custom Enterprise Training Solutions?
          </h2>
          <p className="text-base md:text-lg text-white/90">
            Get Expert Guidance Tailored for Your Team’s Success!
          </p>
        </div>

        <div className="shrink-0">
          <Button
            variant="inverse"
            size="lg"
            onClick={openModal}
            className="shadow-lg hover:bg-white text-primary-700"
          >
            Contact Us
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
