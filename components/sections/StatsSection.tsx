import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { stats } from '@/data/stats';

export function StatsSection() {
  return (
    <SectionWrapper id="stats" className="bg-section-dark border-y border-primary-100/60">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
          Our <span className="text-accent-500">Track Record</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 font-medium">
          The Numbers Behind Our Success
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.id}
            className="text-center flex flex-col items-center justify-center p-6 md:p-8 bg-white border-primary-100 hover:border-primary-300"
          >
            <div className="text-4xl md:text-5xl text-primary-600 mb-2">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-1">{stat.label}</h3>
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
              {stat.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
