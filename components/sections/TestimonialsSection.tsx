import React from 'react';
import { Quote, User } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { testimonials } from '@/data/testimonials';

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" className="bg-white border-b border-neutral-100 py-16 md:py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
          Testimonials from <span className="text-accent-500">Our Partners</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 font-medium">
          What Our Clients Are Saying
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((item) => (
          <Card
            key={item.id}
            className="flex flex-col justify-between space-y-6 p-8 bg-white border-neutral-200 hover:border-primary-300 relative transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 hover:shadow-card-hover group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <img
                  src={item.logoSrc}
                  alt={item.logoAlt}
                  className="h-8 w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity"
                />
                <Quote className="w-8 h-8 text-primary-100 group-hover:text-primary-200 transition-colors" />
              </div>
              <p className="text-neutral-700 text-sm md:text-base leading-relaxed italic relative z-10">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author Profiler Container */}
            {item.authorName && (
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm shrink-0">
                  <User className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900 text-sm">{item.authorName}</div>
                  <div className="text-xs text-neutral-500">{item.authorTitle} • {item.companyName}</div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
