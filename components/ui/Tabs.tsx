'use client';

import React from 'react';
import { cn } from '@/lib/cn';

export interface TabOption<T extends string = string> {
  id: T;
  label: string;
}

interface TabsProps<T extends string = string> {
  tabs: TabOption<T>[];
  activeTab: T;
  onChange: (tabId: T) => void;
  className?: string;
}

export function Tabs<T extends string = string>({
  tabs,
  activeTab,
  onChange,
  className,
}: TabsProps<T>) {
  return (
    <div
      role="tablist"
      aria-label="FAQ categories"
      className={cn(
        'flex flex-wrap items-center justify-center gap-2 p-1.5 bg-neutral-100 dark:bg-[#111827] backdrop-blur-xs rounded-xl border border-neutral-200/80 dark:border-[rgba(255,255,255,0.08)] max-w-fit mx-auto transition-colors duration-300',
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600',
              isActive
                ? 'bg-white dark:bg-[#1F2937] text-primary-600 dark:text-primary-400 shadow-xs font-semibold'
                : 'text-neutral-600 dark:text-[#CBD5E1] hover:text-neutral-900 dark:hover:text-[#F8FAFC] hover:bg-neutral-200/50 dark:hover:bg-neutral-800'
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
