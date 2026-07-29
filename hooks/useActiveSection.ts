'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[], defaultSection: string = 'home'): string {
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observerMap = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          observerMap.set(entry.target.id, entry);
        });

        let highestRatio = 0;
        let mostVisibleSection = defaultSection;

        observerMap.forEach((entry, id) => {
          if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
            highestRatio = entry.intersectionRatio;
            mostVisibleSection = id;
          }
        });

        if (highestRatio > 0) {
          setActiveSection(mostVisibleSection);
        }
      },
      { threshold: [0.2, 0.5, 0.8] }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, defaultSection]);

  return activeSection;
}
