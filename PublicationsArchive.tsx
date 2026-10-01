/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { PUBLICATIONS } from '../data/mayerData';

interface PublicationsArchiveProps {
  language: Language;
}

export const PublicationsArchive: React.FC<PublicationsArchiveProps> = ({ language }) => {
  const [activePubIndex, setActivePubIndex] = useState<number>(1); // Default to 1842 classic

  const activePub = PUBLICATIONS[activePubIndex];

  return (
    <section id="tratados" className="py-16 md:py-24 border-b border-stone-200 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Curatorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-3 font-sans">
            <span>{language === 'es' ? 'Archivo Documental y Manuscritos' : 'Documentary Archive & Manuscripts'}</span>
            <span aria-hidden="true">·</span>
            <span>1841 – 1848</span>
            <span aria-hidden="true">·</span>
            <span>{language === 'es' ? 'Tratados Originales' : 'Original Treatises'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            {language === 'es'
              ? 'Los Tratados Originales de Julius Robert von Mayer'
              : 'The Original Treatises of Julius Robert von Mayer'}
          </h2>

          <p className="text-stone-700 text-base sm:text-lg font-serif mt-2 max-w-3xl leading-relaxed">
            {language === 'es'
              ? 'Examine las cuatro memorias científicas cardinales donde Mayer formuló la equivalencia universal, desafiando el rechazo de las academias oficiales.'
              : 'Inspect the four cardinal scientific monographs where Mayer established universal equivalence, defying the indifference of official academies.'}
          </p>
        </motion.div>

        {/* Catalog Grid & Document Inspection Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
          {/* Treatises Catalog List (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-3"
          >
            {PUBLICATIONS.map((pub, idx) => {
              const isActive = activePubIndex === idx;
              return (
                <button
                  key={pub.year}
                  type="button"
                  onClick={() => setActivePubIndex(idx)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    isActive
                      ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                      : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span
                      className={`font-mono font-bold tabular-nums ${
                        isActive ? 'text-amber-400' : 'text-stone-500'
                      }`}
                    >
                      {pub.year}
                    </span>
                    <span
                      className={`text-[11px] truncate max-w-[180px] font-sans ${
                        isActive ? 'text-stone-300' : 'text-stone-500'
                      }`}
                    >
                      {pub.publisher.split('(')[0]}
                    </span>
                  </div>

                  <h3
                    className={`font-serif font-bold text-base ${
                      isActive ? 'text-white' : 'text-stone-900'
                    }`}
                  >
                    {pub.title}
                  </h3>

                  <p
                    className={`text-xs italic font-serif mt-0.5 truncate ${
                      isActive ? 'text-stone-300' : 'text-stone-500'
                    }`}
                  >
                    {pub.originalGerman}
                  </p>
                </button>
              );
            })}
          </motion.div>

          {/* Manuscript Deep Reader & Bilingual Excerpt (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-xl border border-stone-300 p-8 shadow-sm space-y-6"
          >
            <div className="border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-1">
                <span>Anno {activePub.year}</span>
                <span aria-hidden="true">·</span>
                <span>{activePub.publisher}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                {activePub.title}
              </h3>
              <p className="text-sm font-serif italic text-stone-600 mt-1">
                «{activePub.originalGerman}»
              </p>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <h4 className="text-xs uppercase font-sans tracking-wider text-stone-500 font-semibold">
                {language === 'es' ? 'Síntesis y Argumento' : 'Synthesis & Argument'}
              </h4>
              <p className="text-stone-800 font-serif text-sm sm:text-base leading-relaxed">
                {activePub.description[language]}
              </p>
            </div>

            {/* Scientific Significance */}
            <div className="space-y-1">
              <h4 className="text-xs uppercase font-sans tracking-wider text-stone-500 font-semibold">
                {language === 'es' ? 'Trascendencia Histórica' : 'Historical Significance'}
              </h4>
              <p className="text-stone-700 font-serif text-sm leading-relaxed">
                {activePub.significance[language]}
              </p>
            </div>

            {/* Original German Manuscript Excerpt & Translation */}
            <div className="p-5 rounded-lg bg-[#F8F5EE] border border-stone-300 space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-stone-500 font-sans font-semibold block mb-1">
                  Texto Original en Alemán (19. Jh.):
                </span>
                <p className="font-serif italic text-stone-900 text-sm leading-relaxed bg-white/70 p-3 rounded border border-stone-200">
                  «{activePub.keyExcerpt.german}»
                </p>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-widest text-amber-950 font-sans font-semibold block mb-1">
                  {language === 'es' ? 'Traducción y Análisis Crítico:' : 'Translation & Critical Analysis:'}
                </span>
                <p className="font-serif text-stone-800 text-sm leading-relaxed">
                  «{activePub.keyExcerpt.translation[language]}»
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
