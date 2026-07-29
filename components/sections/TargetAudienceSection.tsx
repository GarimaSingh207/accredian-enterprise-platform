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
    <SectionWrapper id="target-audience" className="bg-white dark:bg-[#0B1220] border-b border-neutral-100 dark:border-[rgba(255,255,255,0.08)] transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-[#F8FAFC]">
          Who Should Join <span className="text-primary-600 dark:text-primary-400">Our Programs?</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 dark:text-primary-400 font-medium">
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
              className="flex flex-col space-y-4 p-6"
            >
              <div className="icon-container-48 shrink-0">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-[#F8FAFC]">{item.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-[#CBD5E1] leading-relaxed">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
