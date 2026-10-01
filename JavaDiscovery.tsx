/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface JavaDiscoveryProps {
  language: Language;
}

export const JavaDiscovery: React.FC<JavaDiscoveryProps> = ({ language }) => {
  const [selectedClue, setSelectedClue] = useState<number>(0);

  const clues = [
    {
      emoji: '🩸',
      title: { es: '1. El Misterio Clínico', en: '1. The Clinical Clue' },
      short: {
        es: 'En Batavia (Yakarta, 1840), Mayer sangró a marineros con fiebre. Esperaba sangre oscura (venosa), pero brotó un rojo carmesí brillante tan vivo que creyó haber perforado una arteria.',
        en: 'In Batavia (1840), Mayer bled feverish sailors. Instead of dark venous blood, it flowed brilliant scarlet, so vibrant he feared he had nicked an artery.',
      },
      takeaway: {
        es: '¿Por qué la sangre no había soltado su oxígeno en los tejidos?',
        en: 'Why hadn’t tissues extracted the blood’s oxygen?',
      },
    },
    {
      emoji: '🔥',
      title: { es: '2. El Cuerpo como Horno', en: '2. Body as a Furnace' },
      short: {
        es: 'El cuerpo humano mantiene siempre 37°C quemando comida con oxígeno. En el calor sofocante de Java (38°C), el cuerpo apenas pierde calor, por lo que necesita quemar muchísimo menos oxígeno.',
        en: 'The human body maintains 37°C by burning food with oxygen. In scorching Java heat (38°C), heat loss is minimal, so far less oxygen combustion is needed.',
      },
      takeaway: {
        es: 'Menos calor necesario disipar = la sangre regresa al corazón llena de oxígeno intacto.',
        en: 'Lower heat needed = blood returns to the heart retaining its rich oxygen.',
      },
    },
    {
      emoji: '⚡',
      title: { es: '3. La Epifanía Universal', en: '3. The Universal Law' },
      short: {
        es: 'Si el calor del cuerpo y la fuerza de los músculos proceden de la misma comida quemada, el calor y el trabajo mecánico son una misma cosa. Y si no se crea ni destruye en un marinero, ¡tampoco en todo el universo!',
        en: 'If animal warmth and muscle work come from identical food combustion, heat and work are one entity. Energy cannot vanish or appear out of nowhere!',
      },
      takeaway: {
        es: '«La energía del cosmos es constante e indestructible: sólo cambia de forma.»',
        en: '«The energy of the cosmos is constant and indestructible: it only changes form.»',
      },
    },
  ];

  return (
    <section id="java" className="py-12 md:py-16 border-b border-stone-200 bg-[#F4EFE6]/60">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold bg-amber-200/60 px-2.5 py-1 rounded">
            Batavia, 1840 · Fragata Java
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3">
            {language === 'es' ? 'La Gran Epifanía de la Sangre' : 'The Blood Epiphany'}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base font-serif mt-2">
            {language === 'es'
              ? 'Cómo un médico naval descubrió una ley cósmica a bordo de un velero en los trópicos.'
              : 'How a ship surgeon deduced a cosmic law of physics aboard a sailing frigate.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Real Historical Frigate Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-2xl overflow-hidden border border-stone-300 bg-white shadow-md"
          >
            <div className="relative aspect-video overflow-hidden bg-stone-900">
              <img
                src="/src/assets/real_images/frigate_java.jpg"
                alt="Fragata histórica navegando hacia las Indias Orientales en el siglo XIX"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded">
                Indias Orientales · 1840
              </div>
            </div>
            <div className="p-4 bg-white space-y-2">
              <h3 className="font-serif font-bold text-stone-900 text-base">
                {language === 'es' ? 'Fragata holandesa «Java»' : 'Dutch frigate "Java"'}
              </h3>
              <p className="text-xs text-stone-600 font-serif leading-relaxed">
                {language === 'es'
                  ? 'A sus 25 años, Mayer zarpó como médico de 28 marineros. Durante meses en alta mar, conectó la biología humana con la termodinámica universal.'
                  : 'At age 25, Mayer served as physician to 28 sailors. At sea, he connected human metabolism with cosmic thermodynamics.'}
              </p>
              {/* Visual color comparison mini badge */}
              <div className="flex items-center gap-3 pt-2 border-t border-stone-100">
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#881337] inline-block shadow-inner" />
                  <span className="text-stone-600">Europa (Oscura)</span>
                </div>
                <span className="text-stone-300">➔</span>
                <div className="flex items-center gap-1.5 text-xs font-mono">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#e11d48] inline-block shadow-inner" />
                  <span className="text-rose-700 font-bold">Java (Brillante)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3 Step Interactive Cards */}
          <div className="lg:col-span-7 space-y-3">
            {clues.map((clue, idx) => {
              const isSelected = selectedClue === idx;
              return (
                <motion.div
                  key={clue.emoji}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedClue(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-amber-800 shadow-md ring-1 ring-amber-800/30'
                      : 'bg-white/80 border-stone-200 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl p-2 bg-amber-50 rounded-lg flex-shrink-0">
                      {clue.emoji}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                          {clue.title[language]}
                        </h4>
                        <span className="text-[11px] font-mono font-medium text-amber-800">
                          {isSelected ? '✓ Activo' : 'Clic para ver'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-stone-700 font-serif leading-relaxed">
                        {clue.short[language]}
                      </p>
                      <div className="pt-1.5 text-xs font-mono font-semibold text-amber-900">
                        ⚡ {clue.takeaway[language]}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
