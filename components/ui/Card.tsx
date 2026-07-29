import React from 'react';
import { cn } from '@/lib/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "premium-card p-6 md:p-8 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md hover:border-blue-500/40 text-slate-900 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
