'use client';

import React, { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Tabs, TabOption } from '@/components/ui/Tabs';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { faqs } from '@/data/faqs';
import { FaqCategory } from '@/types/content.types';
import { useModal } from '@/context/ModalContext';

const faqTabs: TabOption<FaqCategory>[] = [
  { id: 'course', label: 'Course' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'partnership', label: 'Partnership' },
  { id: 'misc', label: 'Miscellaneous' },
];

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('course');
  const { openModal } = useModal();

  const filteredFaqs = faqs.filter((item) => item.category === activeCategory);

  return (
    <SectionWrapper id="faqs" className="bg-white border-b border-slate-200/80 transition-colors duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Frequently Asked <span className="text-primary-600">Questions</span>
        </h2>
        <p className="text-base md:text-lg text-primary-600 font-medium">
          Everything You Need to Know About Enterprise Learning Integrations
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-10">
        <Tabs
          tabs={faqTabs}
          activeTab={activeCategory}
          onChange={(catId) => setActiveCategory(catId)}
        />
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto mb-12">
        <Accordion items={filteredFaqs} />
      </div>

      {/* Bottom CTA */}
      <div className="text-center bg-slate-50 border border-slate-200/90 p-8 rounded-2xl max-w-xl mx-auto shadow-xs">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Have more questions for your enterprise?
        </h3>
        <p className="text-sm text-slate-600 mb-6">
          Our L&D advisors are ready to craft a custom learning strategy for your organization.
        </p>
        <Button variant="primary" size="md" onClick={openModal}>
          Enquire Now
        </Button>
      </div>
    </SectionWrapper>
  );
}
