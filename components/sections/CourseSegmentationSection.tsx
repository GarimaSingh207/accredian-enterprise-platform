import React from 'react';
import { Award, Building2 } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { courseSegments } from '@/data/course-segments';

export function CourseSegmentationSection() {
  return (
    <SectionWrapper id="course-segmentation" className="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
          Tailored <span className="text-primary-600 dark:text-primary-400">Course Segmentation</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 dark:text-primary-400 font-medium">
          Explore Custom-fit Courses Designed to Address Every Professional Focus
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courseSegments.map((segment, idx) => {
          const Icon = idx === 0 ? Award : Building2;
          return (
            <Card
              key={segment.id}
              className="flex flex-col space-y-6 p-8 relative overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{segment.title}</h3>
                  <span className="text-xs text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase">
                    Custom-Fit Curriculum
                  </span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed flex-1">
                {segment.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                {segment.tags.map((tag) => (
                  <Badge key={tag} variant="neutral" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
