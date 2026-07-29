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
    <SectionWrapper id="edge" className="bg-slate-50 border-b border-slate-200/80 transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          The <span className="text-primary-600">Accredian Edge</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 font-medium">
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
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
