import React from 'react';
import { BookOpen, Code, Wrench, LucideIcon } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { catFramework } from '@/data/cat-framework';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Code,
  Wrench,
};

export function CatSection() {
  return (
    <SectionWrapper id="cat" className="bg-section-dark border-b border-primary-100/60">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
          The <span className="text-accent-500">CAT Framework</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 font-medium">
          A Proven Three-Pillar Methodology for Enterprise Learning Mastery
        </p>
      </div>

      {/* CAT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {catFramework.map((item, idx) => {
          const IconComponent = iconMap[item.iconName] || BookOpen;
          return (
            <Card
              key={item.id}
              className="text-center flex flex-col items-center p-8 bg-white border-primary-100 hover:border-primary-300 relative z-10"
            >
              <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center mb-6 shadow-md">
                <IconComponent className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold tracking-widest text-primary-600 uppercase mb-1">
                Pillar 0{idx + 1}
              </span>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.phase}</h3>
              <p className="text-sm font-semibold text-accent-500 mb-3">{item.title}</p>
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
