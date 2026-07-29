import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-bold transition-all duration-200 cursor-pointer rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
        
        variant === 'primary' && "bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(37,99,235,0.35)] btn-shine-effect",
        
        variant === 'secondary' && "btn-secondary-glass text-primary-600 hover:text-primary-700 hover:-translate-y-[3px] hover:shadow-sm",
        
        variant === 'ghost' && "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
        
        size === 'sm' && "px-4 py-2 text-xs",
        size === 'md' && "px-5 py-3 text-sm",
        size === 'lg' && "px-7 py-4 text-base",
        
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </button>
  );
}
