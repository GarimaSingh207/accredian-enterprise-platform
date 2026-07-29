import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  loading = false,
  disabled = false,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:scale-100 cursor-pointer';

  const variants = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 shadow-xs hover:shadow-md hover:-translate-y-[1px]',
    secondary:
      'border-1.5 border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700',
    ghost:
      'text-primary-600 hover:bg-primary-50',
    inverse:
      'bg-white text-primary-700 hover:bg-primary-50 shadow-xs hover:shadow-md',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
