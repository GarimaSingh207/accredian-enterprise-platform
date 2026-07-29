import React from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  hover?: boolean;
  accent?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Card({ hover = true, accent = true, className, children }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-neutral-200/80 rounded-2xl shadow-card p-6 md:p-8 transition-all duration-300 relative overflow-hidden group',
        accent && 'before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-primary-500 before:to-accent-500 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity',
        hover && 'hover:shadow-card-hover hover:-translate-y-1.5 hover:border-primary-200/80',
        className
      )}
    >
      {children}
    </div>
  );
}

