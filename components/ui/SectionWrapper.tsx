import React from 'react';
import { cn } from '@/lib/cn';

interface SectionWrapperProps {
  id: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export function SectionWrapper({
  id,
  className,
  containerClassName,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-12 md:py-16 lg:py-24 scroll-mt-20', className)}>
      <div className={cn('max-w-7xl mx-auto px-4 md:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
