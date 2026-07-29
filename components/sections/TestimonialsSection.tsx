import React from 'react';
import { Quote, User } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" className="bg-white dark:bg-[#0B1220] border-b border-neutral-100 dark:border-[rgba(255,255,255,0.08)] py-16 md:py-24 transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-[#F8FAFC]">
          Testimonials from <span className="text-primary-600 dark:text-primary-400">Our Partners</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 dark:text-primary-400 font-medium">
          What Our Clients Are Saying
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((item) => (
          <Card
            key={item.id}
            className="flex flex-col justify-between space-y-6 p-8 relative transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <img
                  src={item.logoSrc}
                  alt={item.logoAlt}
                  className="h-8 w-auto object-contain opacity-85 dark:brightness-150 group-hover:opacity-100 transition-all"
                />
                <Quote className="w-8 h-8 text-primary-200 dark:text-primary-800 transition-colors" />
              </div>
              <p className="text-neutral-700 dark:text-[#CBD5E1] text-sm md:text-base leading-relaxed italic relative z-10">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author Profiler Container */}
            {item.authorName && (
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/50 border border-primary-100 dark:border-primary-800 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-sm shrink-0">
                  <User className="w-5 h-5 text-primary-500 dark:text-primary-400" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900 dark:text-[#F8FAFC] text-sm">{item.authorName}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">{item.authorTitle} • {item.companyName}</div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
