import React from 'react';
import { cn } from '@/lib/cn';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = 30,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn('overflow-hidden flex select-none group relative w-full', className)}
    >
      {/* Left/Right Gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div
        className={cn(
          'flex min-w-full shrink-0 items-center justify-around gap-8 md:gap-12 animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          'flex min-w-full shrink-0 items-center justify-around gap-8 md:gap-12 animate-marquee',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}
