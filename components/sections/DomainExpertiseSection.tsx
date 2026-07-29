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
    <SectionWrapper id="domain-expertise" className="bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
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
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 transition-colors">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {hub.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {hub.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
