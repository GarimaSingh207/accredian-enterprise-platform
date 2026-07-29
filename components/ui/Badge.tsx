import React from 'react';
import { cn } from '@/lib/cn';

interface BadgeProps {
  variant?: 'primary' | 'neutral' | 'success';
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = 'primary', className, children }: BadgeProps) {
  const baseStyles =
    'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors';

  const variants = {
    primary: 'bg-primary-50 text-primary-700 border border-primary-100',
    neutral: 'bg-neutral-100 text-neutral-700 border border-neutral-200',
    success: 'bg-success-50 text-success-700 border border-success-100',
  };

  return <span className={cn(baseStyles, variants[variant], className)}>{children}</span>;
}
