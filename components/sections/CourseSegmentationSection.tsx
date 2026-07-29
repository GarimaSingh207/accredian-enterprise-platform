import React from 'react';
import { Award, Building2 } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { courseSegments } from '@/data/course-segments';

export function CourseSegmentationSection() {
  return (
    <SectionWrapper id="course-segmentation" className="bg-section-alt border-b border-neutral-100">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
          Tailored <span className="text-accent-500">Course Segmentation</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 font-medium">
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
              className="flex flex-col space-y-6 p-8 bg-white border-neutral-200 hover:border-primary-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">{segment.title}</h3>
                  <span className="text-xs text-primary-600 font-semibold tracking-wide uppercase">
                    Custom-Fit Curriculum
                  </span>
                </div>
              </div>

              <p className="text-neutral-700 text-base leading-relaxed flex-1">
                {segment.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100">
                {segment.tags.map((tag) => (
                  <Badge key={tag} variant="neutral" className="bg-neutral-100/80">
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
