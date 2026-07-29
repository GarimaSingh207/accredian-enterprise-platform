'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function DarkModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle dark mode theme"
      className="p-2 rounded-xl border border-neutral-200 dark:border-[rgba(255,255,255,0.08)] bg-white dark:bg-[#111827] text-neutral-700 dark:text-[#F8FAFC] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue shrink-0"
    >
      {currentTheme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-neutral-600" />
      )}
    </button>
  );
}
