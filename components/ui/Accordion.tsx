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
            className="border border-neutral-200 rounded-xl bg-white transition-all overflow-hidden shadow-xs hover:border-primary-200"
          >
            <h3>
              <button
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left font-semibold text-neutral-900 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200',
                    isOpen && 'rotate-180 text-primary-600'
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
                <div className="px-5 pb-5 md:px-6 md:pb-6 text-neutral-700 text-sm md:text-base leading-relaxed border-t border-neutral-100 pt-4">
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
