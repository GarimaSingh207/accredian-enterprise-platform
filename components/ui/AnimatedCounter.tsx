'use client';

import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';
import { cn } from '@/lib/cn';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = '',
  duration = 1500,
  className,
}: AnimatedCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isVisible = useIntersectionObserver(containerRef, { threshold: 0.3 });
  const count = useCountUp(target, duration, isVisible);

  return (
    <span ref={containerRef} className={cn('tabular-nums font-extrabold', className)}>
      {count}
      {suffix}
    </span>
  );
}
