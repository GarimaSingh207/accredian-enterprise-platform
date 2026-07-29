import React from 'react';
import { Sparkles, Cpu, Layers, Sliders, LucideIcon } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { edgeFeatures } from '@/data/edge-features';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Cpu,
  Layers,
  Sliders,
};

export function AccredianEdgeSection() {
  return (
    <SectionWrapper id="edge" className="bg-white dark:bg-[#0B1220] border-b border-neutral-100 dark:border-[rgba(255,255,255,0.08)] transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-[#F8FAFC]">
          The <span className="text-primary-600 dark:text-primary-400">Accredian Edge</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 dark:text-primary-400 font-medium">
          Key Aspects of Our Strategic Training
        </p>
      </div>

      {/* Edge Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {edgeFeatures.map((feature) => {
          const IconComponent = iconMap[feature.iconName] || Sparkles;
          return (
            <Card
              key={feature.id}
              className="flex flex-col space-y-4 p-6 md:p-8 group"
            >
              <div className="icon-container-48 shrink-0">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-[#F8FAFC]">{feature.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-[#CBD5E1] leading-relaxed flex-1">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
