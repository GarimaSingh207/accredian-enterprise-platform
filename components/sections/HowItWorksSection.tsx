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
    <SectionWrapper id="how-it-works" className="bg-white border-b border-slate-200/80 py-16 md:py-24 transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          How We <span className="text-primary-600">Deliver Results</span> That Matter
        </h2>
        <p className="text-base md:text-lg text-primary-600 font-medium">
          A Structured Three-Step Approach to Skill Development
        </p>
      </div>

      {/* Stepper Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto">
        {/* Desktop Horizontal Line */}
        <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-slate-200 pointer-events-none z-0" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
          {howItWorksSteps.map((step, idx) => {
            const IconComponent = iconMap[step.iconName] || SearchCheck;
            return (
              <div key={step.id} className="relative flex flex-col items-center text-center group">
                {/* Mobile Vertical Line */}
                {idx < howItWorksSteps.length - 1 && (
                  <div className="md:hidden absolute top-[88px] bottom-[-48px] left-1/2 w-0.5 bg-slate-200 pointer-events-none z-0" />
                )}

                {/* Step Circle with Gradient Background */}
                <div className="w-[88px] h-[88px] rounded-full bg-gradient-to-br from-primary-600 to-blue-700 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 relative z-10 border-4 border-white">
                  <IconComponent className="w-8 h-8" />
                  
                  {/* Step Badge */}
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    {step.step}
                  </span>
                </div>

                {/* Card Info Box */}
                <Card className="mt-6 w-full p-6 shadow-xs hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
