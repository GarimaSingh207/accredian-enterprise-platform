import React from 'react';
import { SearchCheck, FileCheck2, TrendingUp, LucideIcon } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { howItWorksSteps } from '@/data/how-it-works';

const iconMap: Record<string, LucideIcon> = {
  SearchCheck,
  FileCheck2,
  TrendingUp,
};

export function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" className="bg-white border-b border-neutral-100">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
          How We <span className="text-accent-500">Deliver Results</span> That Matter?
        </h2>
        <p className="text-base md:text-lg text-primary-600 font-medium">
          A Structured Three-Step Approach to Skill Development
        </p>
      </div>

      {/* Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {howItWorksSteps.map((step) => {
          const IconComponent = iconMap[step.iconName] || SearchCheck;
          return (
            <Card
              key={step.id}
              className="flex flex-col space-y-4 p-8 bg-white border-neutral-200 hover:border-primary-300 relative group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors flex items-center justify-center">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-700 font-bold text-sm flex items-center justify-center border border-neutral-200">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">{step.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
