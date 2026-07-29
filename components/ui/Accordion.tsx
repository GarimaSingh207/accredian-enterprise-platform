'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';
import { FaqItem } from '@/types/content.types';

interface AccordionProps {
  items: FaqItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const triggerId = `faq-trigger-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="border border-neutral-200 dark:border-[rgba(255,255,255,0.08)] rounded-xl bg-white dark:bg-[#111827] transition-all overflow-hidden shadow-xs hover:border-primary-200 dark:hover:border-primary-600/50"
          >
            <h3>
              <button
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left font-semibold text-neutral-900 dark:text-[#F8FAFC] hover:text-primary-600 dark:hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-neutral-500 dark:text-neutral-400 shrink-0 transition-transform duration-300',
                    isOpen && 'rotate-180 text-primary-600 dark:text-primary-400'
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={cn(
                'grid transition-all duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 md:px-6 md:pb-6 text-neutral-700 dark:text-[#CBD5E1] text-sm md:text-base leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
