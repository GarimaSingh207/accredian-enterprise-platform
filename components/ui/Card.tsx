import React from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Card({ hover = true, className, children }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-neutral-200 rounded-xl shadow-card p-6 md:p-8 transition-all duration-250',
        hover && 'hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-200',
        className
      )}
    >
      {children}
    </div>
  );
}
