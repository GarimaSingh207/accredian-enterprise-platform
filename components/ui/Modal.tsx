'use client';

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useScrollLock } from '@/hooks/useScrollLock';
import { cn } from '@/lib/cn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, className, children }: ModalProps) {
  useScrollLock(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof window === 'undefined') return null;

  return createPortal(
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? 'modal-title' : undefined}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity animate-fade-up"
      />

      {/* Modal Dialog */}
      <div
        ref={modalRef}
        className={cn(
          'relative w-full max-w-lg bg-white rounded-2xl shadow-modal border border-neutral-200 overflow-hidden z-10 animate-fade-up',
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/50">
          {title ? (
            <h2 id="modal-title" className="text-lg font-bold text-neutral-900">
              {title}
            </h2>
          ) : (
            <div />
          )}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/50 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.body
  );
}
