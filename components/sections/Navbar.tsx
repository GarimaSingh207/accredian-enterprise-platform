'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navLinks } from '@/data/nav-links';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useModal } from '@/context/ModalContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { openModal } = useModal();

  const sectionIds = navLinks.map((link) => link.sectionId);
  const activeSection = useActiveSection(sectionIds, 'home');
  useScrollLock(isDrawerOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsDrawerOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300 bg-white/75 backdrop-blur-[16px] border-b border-white/25',
          isScrolled
            ? 'shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-2.5'
            : 'shadow-none py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-primary-600">
                accredian
              </span>
              <span className="text-[10px] font-medium tracking-widest text-neutral-500 uppercase -mt-1">
                credentials that matter
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.sectionId}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors relative cursor-pointer group',
                    isActive ? 'text-primary-600 font-semibold' : 'text-neutral-700 hover:text-neutral-900'
                  )}
                >
                  {link.label}
                  {/* Underline grows from center on hover, solid on active */}
                  <span className={cn(
                    "absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-all duration-250",
                    isActive 
                      ? "bg-primary-600 w-auto" 
                      : "bg-primary-500 w-0 group-hover:w-auto left-1/2 right-1/2 group-hover:left-3 group-hover:right-3"
                  )} />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="primary" size="md" onClick={openModal}>
              Enquire Now
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isDrawerOpen}
            className="lg:hidden p-2 text-neutral-700 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
          >
            {isDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white animate-fade-up">
          <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200">
            <div className="flex flex-col">
              <span className="text-xl font-black text-primary-600">accredian</span>
              <span className="text-[9px] font-medium tracking-widest text-neutral-500 uppercase -mt-1">
                credentials that matter
              </span>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.sectionId}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    'flex items-center justify-between p-3.5 rounded-xl text-base font-medium transition-colors',
                    isActive
                      ? 'bg-primary-50 text-primary-700 font-semibold'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  )}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </a>
              );
            })}
          </nav>

          <div className="p-6 border-t border-neutral-100 bg-neutral-50">
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => {
                setIsDrawerOpen(false);
                openModal();
              }}
            >
              Enquire Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
