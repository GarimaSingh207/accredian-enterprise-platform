import React from 'react';
import { Building2, Rocket, Building, Landmark, LucideIcon } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { targetAudience } from '@/data/target-audience';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Rocket,
  Building,
  Landmark,
};

export function TargetAudienceSection() {
  return (
    <SectionWrapper id="target-audience" className="bg-white border-b border-neutral-100">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
          Who Should Join <span className="text-accent-500">Our Programs?</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 font-medium">
          Architected for Organizations Ready to Scale Talent Capabilities
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {targetAudience.map((item) => {
          const IconComponent = iconMap[item.iconName] || Building2;
          return (
            <Card
              key={item.id}
              className="flex flex-col space-y-4 p-6 bg-white border-neutral-200 hover:border-primary-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
