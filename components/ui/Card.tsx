import React from 'react';
import { cn } from '@/lib/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "premium-card p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-500/40 dark:hover:border-blue-500/40 text-slate-900 dark:text-slate-100 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
