/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Language } from '../types';

interface ScrollNavigationProps {
  language: Language;
}

export const ScrollNavigation: React.FC<ScrollNavigationProps> = ({ language }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [activeSection, setActiveSection] = useState<string>('hero');

  const chapters = [
    { id: 'hero', label: { es: 'Inicio', en: 'Top' } },
    { id: 'java', label: { es: 'Java 1840', en: 'Java 1840' } },
    { id: 'pilares', label: { es: '5 Pilares', en: '5 Pillars' } },
    { id: 'simuladores', label: { es: 'Simulador', en: 'Lab' } },
    { id: 'biografia', label: { es: 'Biografía', en: 'Life' } },
    { id: 'evaluacion', label: { es: 'Test', en: 'Quiz' } },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const ch of chapters) {
        const el = document.getElementById(ch.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(ch.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Fixed Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-700 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Floating Desktop Scroll Navigation Rail */}
      <aside
        aria-label="Navegación de capítulos"
        className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-end gap-3 pointer-events-auto"
      >
        <div className="bg-white/90 backdrop-blur-md border border-stone-200 rounded-full py-3 px-2 shadow-md flex flex-col items-center gap-2.5">
          {chapters.map((ch) => {
            const isActive = activeSection === ch.id;
            return (
              <button
                key={ch.id}
                type="button"
                onClick={() => scrollToSection(ch.id)}
                className="group relative flex items-center justify-end focus:outline-none p-1"
                aria-label={`Ir a sección ${ch.label[language]}`}
              >
                {/* Tooltip on hover */}
                <span className="absolute right-7 px-2 py-0.5 rounded text-[11px] font-sans font-medium text-stone-800 bg-white border border-stone-200 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {ch.label[language]}
                </span>

                {/* Dot marker */}
                <span
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-amber-800 scale-125'
                      : 'bg-stone-300 group-hover:bg-stone-500'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
};
