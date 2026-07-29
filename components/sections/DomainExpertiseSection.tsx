import React from 'react';
import {
  Kanban,
  BrainCircuit,
  BarChart3,
  Workflow,
  Globe,
  Landmark,
  LucideIcon,
} from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { domainHubs } from '@/data/domain-hubs';

const iconMap: Record<string, LucideIcon> = {
  Kanban,
  BrainCircuit,
  BarChart3,
  Workflow,
  Globe,
  Landmark,
};

export function DomainExpertiseSection() {
  return (
    <SectionWrapper id="domain-expertise" className="bg-white dark:bg-[#0B1220] border-b border-neutral-100 dark:border-[rgba(255,255,255,0.08)] transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-[#F8FAFC]">
          Tailored <span className="text-primary-600 dark:text-primary-400">Domain Expertise</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 dark:text-primary-400 font-medium">
          Strategic Training Curriculums Designed for High-Impact Roles
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domainHubs.map((hub) => {
          const IconComponent = iconMap[hub.iconName] || Kanban;
          return (
            <Card
              key={hub.id}
              className="flex flex-col space-y-4 p-6 md:p-8 group"
            >
              <div className="icon-container-48 shrink-0">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-[#F8FAFC] group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {hub.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-[#CBD5E1] leading-relaxed">
                {hub.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
