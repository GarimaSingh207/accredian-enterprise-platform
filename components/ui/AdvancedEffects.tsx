'use client';

import React, { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

export function AdvancedEffects() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 z-50 transition-all duration-75 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating "Talk to Us" Mobile FAB */}
      <button
        onClick={openModal}
        aria-label="Talk to our advisor"
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.45)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 group"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-24 group-hover:ml-2 transition-all duration-300 font-bold text-sm whitespace-nowrap">
          Talk to Us
        </span>
      </button>
    </>
  );
}
