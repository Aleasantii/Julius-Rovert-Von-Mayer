/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  return (
    <section id="hero" className="relative pt-10 pb-14 md:pt-16 md:pb-20 border-b border-stone-200 overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#F5F1EA]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Curatorial Header Marker */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-900 mb-4"
        >
          <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-semibold">
            {language === 'es' ? 'Física Fundamental' : 'Fundamental Physics'}
          </span>
          <span>·</span>
          <span>1ª Ley de la Termodinámica (1842)</span>
          <span>·</span>
          <span>Heilbronn, Alemania</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Title & Editorial Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.05] text-balance">
              Julius Robert <br className="hidden sm:inline" />
              <span className="text-amber-900 underline decoration-amber-300 underline-offset-6">von Mayer</span>
            </h1>

            <p className="text-lg sm:text-xl font-serif text-stone-700 leading-relaxed">
              {language === 'es'
                ? 'El médico naval que descubrió la regla suprema de la ciencia moderna: la energía no se crea ni se destruye, solo se transforma.'
                : 'The ship surgeon who formulated the supreme rule of modern science: energy can neither be created nor destroyed, only transformed.'}
            </p>

            {/* Punchy Golden Quote Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 rounded-xl bg-amber-900 text-amber-50 shadow-md border border-amber-800"
            >
              <p className="font-serif italic text-base sm:text-lg leading-snug">
                {language === 'es'
                  ? '«Las fuerzas son causas: a ellas les es enteramente aplicable el axioma: causa aequat effectum.»'
                  : '«Forces are causes: hence the axiom fully applies to them: causa aequat effectum.»'}
              </p>
              <span className="block text-xs font-mono text-amber-300 mt-1 uppercase tracking-wider not-italic">
                — Bemerkungen über die Kräfte der unbelebten Natur (1842)
              </span>
            </motion.div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#java"
                className="px-5 py-2.5 bg-stone-900 text-stone-50 text-sm font-medium rounded-lg hover:bg-stone-800 transition-all hover:shadow-md flex items-center gap-2"
              >
                <span>{language === 'es' ? 'Ver el Descubrimiento en Java' : 'See Java Discovery'}</span>
                <span>→</span>
              </a>
              <a
                href="#simuladores"
                className="px-5 py-2.5 border border-stone-300 bg-white text-stone-800 text-sm font-medium rounded-lg hover:border-amber-800 hover:text-amber-900 transition-all hover:shadow-sm"
              >
                {language === 'es' ? 'Simulador de Sangre y Calor' : 'Blood & Heat Simulator'}
              </a>
            </div>
          </motion.div>

          {/* Real Historical Portrait of Julius Robert von Mayer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-xl border-2 border-amber-900/20 bg-stone-900 group">
              <img
                src="/src/assets/real_images/mayer_portrait_1868.jpg"
                alt="Retrato histórico al óleo de Julius Robert von Mayer por Friedrich Berrer (1868)"
                className="w-full h-auto aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                loading="eager"
              />
              <div className="p-4 bg-stone-900/95 text-stone-100 border-t border-stone-800">
                <div className="flex justify-between items-baseline">
                  <p className="font-serif font-bold text-white text-base">
                    Dr. Julius Robert von Mayer
                  </p>
                  <span className="text-xs text-amber-400 font-mono font-semibold">1814 – 1878</span>
                </div>
                <p className="text-xs text-stone-300 mt-1 font-serif">
                  {language === 'es'
                    ? 'Retrato histórico original de 1868 por Friedrich Berrer (Stadtarchiv Heilbronn).'
                    : 'Authentic 1868 portrait by Friedrich Berrer (City Archives of Heilbronn).'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Speed Highlights Cards (Bomboclat visuals: concise, punchy!) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 pt-8 border-t border-stone-200"
        >
          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🩸</span>
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-sm">
                {language === 'es' ? 'La Sangre en Java (1840)' : 'The Java Blood Mystery'}
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {language === 'es'
                  ? 'Vio que en el calor tropical la sangre venosa de los marineros era roja brillante como la arterial. Supo que el cuerpo quemaba menos oxígeno.'
                  : 'Noticed tropical sailors had bright red venous blood, proving our bodies burn less oxygen in hot weather.'}
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">⚡</span>
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-sm">
                {language === 'es' ? '1ª Ley de la Termodinámica' : 'First Law of Thermodynamics'}
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {language === 'es'
                  ? 'Fue el primero en calcular el equivalente mecánico del calor (1842), 1 año antes que Joule y 5 antes que Helmholtz.'
                  : 'First to compute the mechanical equivalent of heat in 1842, ahead of both Joule and Helmholtz.'}
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">☀️</span>
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-sm">
                {language === 'es' ? 'Fotosíntesis y el Sol (1845)' : 'Photosynthesis & Solar Power'}
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {language === 'es'
                  ? 'Descubrió que las plantas convierten la luz solar en energía química en sus hojas, alimentando a todo el planeta.'
                  : 'Showed that green plants transform solar rays into chemical energy, sustaining all terrestrial life.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
