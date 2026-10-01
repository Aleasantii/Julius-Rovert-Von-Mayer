/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div className="space-y-1">
            <span className="font-serif font-bold text-lg text-stone-100 block">
              Julius Robert von Mayer (1814 – 1878)
            </span>
            <p className="text-xs text-stone-400 font-serif">
              {language === 'es'
                ? 'Monografía interactiva de física, termodinámica e historia de la ciencia.'
                : 'Interactive monograph on physics, thermodynamics, and history of science.'}
            </p>
          </div>

          {/* Student Badge in Footer */}
          <div className="bg-stone-800/80 px-4 py-2.5 rounded-xl border border-stone-700 text-xs">
            <span className="text-amber-400 font-bold block">4º ESO A</span>
            <span className="text-stone-200 font-medium">Alejandro Santiago Villalón</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-serif">
          <p>
            {language === 'es'
              ? 'Imágenes históricas reales de dominio público procedentes de Wikimedia Commons y Stadtarchiv Heilbronn.'
              : 'Public domain authentic historical imagery from Wikimedia Commons and Stadtarchiv Heilbronn.'}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-amber-400/80">«Causa aequat effectum»</span>
            <span aria-hidden="true">·</span>
            <span>1842</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
