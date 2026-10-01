/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  readingMode: boolean;
  onToggleReadingMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  readingMode,
  onToggleReadingMode,
}) => {
  return (
    <>
      {/* Top Author Student Badge Ribbon */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 text-center border-b border-stone-800 font-sans tracking-wide flex items-center justify-center gap-2">
        <span className="font-semibold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60">
          4º ESO A
        </span>
        <span className="font-medium text-stone-100">Alejandro Santiago Villalón</span>
        <span className="text-stone-400 hidden sm:inline">·</span>
        <span className="text-stone-400 text-[11px] hidden sm:inline">
          {language === 'es' ? 'Física, Química y Termodinámica' : 'Physics & Thermodynamics Project'}
        </span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 h-15 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="text-lg md:text-xl font-serif font-bold tracking-tight text-stone-900 hover:text-amber-800 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <span>Julius Robert von Mayer</span>
            <span className="text-xs font-mono font-normal text-stone-500 hidden md:inline">
              1814–1878
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600">
            <a
              href="#java"
              className="hover:text-stone-900 transition-colors hover:underline underline-offset-4 whitespace-nowrap"
            >
              {language === 'es' ? 'El Descubrimiento' : 'Discovery'}
            </a>
            <a
              href="#pilares"
              className="hover:text-stone-900 transition-colors hover:underline underline-offset-4 whitespace-nowrap"
            >
              {language === 'es' ? 'Leyes de Mayer' : 'Mayer’s Laws'}
            </a>
            <a
              href="#simuladores"
              className="hover:text-stone-900 transition-colors hover:underline underline-offset-4 whitespace-nowrap"
            >
              {language === 'es' ? 'Simulador' : 'Simulator'}
            </a>
            <a
              href="#biografia"
              className="hover:text-stone-900 transition-colors hover:underline underline-offset-4 whitespace-nowrap"
            >
              {language === 'es' ? 'Historia Rápida' : 'History'}
            </a>
            <a
              href="#evaluacion"
              className="hover:text-stone-900 transition-colors hover:underline underline-offset-4 whitespace-nowrap"
            >
              {language === 'es' ? 'Test Flash' : 'Quick Quiz'}
            </a>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
              className="text-xs font-semibold px-2.5 py-1.5 rounded border border-stone-300 text-stone-700 hover:border-stone-400 hover:bg-stone-100 transition-colors"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <a
              href="#simuladores"
              className="text-xs font-medium px-3.5 py-1.5 rounded bg-amber-900 text-white hover:bg-amber-950 transition-colors shadow-xs hidden sm:inline-block"
            >
              {language === 'es' ? 'Probar Simulador' : 'Try Simulator'}
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
