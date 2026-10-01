/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface BiographyTimelineProps {
  language: Language;
}

export const BiographyTimeline: React.FC<BiographyTimelineProps> = ({ language }) => {
  const milestones = [
    {
      year: '1814 – 1838',
      tag: 'Juventud Rebelde',
      title: { es: 'De boticario en Heilbronn a médico en Tubinga', en: 'Apothecary roots to medical doctorate' },
      desc: {
        es: 'Hijo de farmacéutico. Fue encarcelado brevemente por unirse a una fraternidad estudiantil prohibida. Se doctoró en medicina con una tesis sobre la santonina.',
        en: 'Son of an apothecary. Briefly jailed for joining a banned fraternity. Earned his medical degree with research on santonin.',
      },
      icon: '🎓',
    },
    {
      year: '1840',
      tag: 'La Gran Travesía',
      title: { es: 'El viaje a Java en el velero y la sangre roja', en: 'Voyage to Java & the scarlet blood' },
      desc: {
        es: 'A sus 25 años fue médico de a bordo hacia las Indias Orientales. Al sangrar marineros, descubrió la relación entre el calor corporal, el oxígeno y el cosmos.',
        en: 'At age 25, sailed to East Indies. Bleeding feverish sailors, he discovered the link between body warmth, oxygen, and energy.',
      },
      icon: '⛵',
    },
    {
      year: '1842 – 1845',
      tag: 'La Revolución',
      title: { es: 'El cálculo del equivalente de calor y fotosíntesis', en: 'Heat equivalent calculation & photosynthesis' },
      desc: {
        es: 'Publica en los Anales de Liebig: 1 caloría = 365 kg·m. Explica que las plantas captan energía solar. La física oficial lo ignora por ser "solo un médico".',
        en: 'Published in Liebig’s Annalen: 1 calorie = 365 kg·m. Proved plants trap solar light. Ignored by mainstream physicists as a mere physician.',
      },
      icon: '⚡',
    },
    {
      year: '1850 – 1854',
      tag: 'Crisis y Tragedia',
      title: { es: 'La muerte de sus hijos, el salto y el asilo', en: 'Tragedy, the window leap & asylum' },
      desc: {
        es: 'Murieron tres de sus hijos. Joule se atribuyó todo el mérito en Inglaterra. Desesperado, saltó de un 3º piso. Sobrevivió y pasó años en sanatorios psiquiátricos.',
        en: 'Three children died young. Joule claimed sole priority in Britain. In despair, Mayer leaped from a window, surviving with severe injuries and asylum years.',
      },
      icon: '❤️‍🩹',
    },
    {
      year: '1862 – 1878',
      tag: 'Gloria y Nobleza',
      title: { es: 'Defensa de Tyndall, Medalla Copley y título nobiliario', en: 'Tyndall’s defense, Copley Medal & nobility' },
      desc: {
        es: 'El físico británico John Tyndall demostró al mundo que Mayer fue el primero. En 1871 la Royal Society le otorgó la Medalla Copley y el Rey lo elevó a noble ("von Mayer").',
        en: 'British physicist John Tyndall proved Mayer’s priority. In 1871, the Royal Society awarded him the Copley Medal, and the King knighted him "von Mayer".',
      },
      icon: '👑',
    },
  ];

  return (
    <section id="biografia" className="py-12 md:py-16 border-b border-stone-200 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold bg-amber-200/60 px-2.5 py-1 rounded">
            Biografía Express
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3">
            {language === 'es' ? 'La Asombrosa Vida de Mayer' : 'Mayer’s Remarkable Life'}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base font-serif mt-2">
            {language === 'es'
              ? 'De rebelde universitario a médico naval, manicomio y la gloria inmortal.'
              : 'From rebellious student to naval physician, asylum survival, and immortal glory.'}
          </p>
        </motion.div>

        {/* Visual Dual Feature: Woodcut & Heilbronn Monument */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {/* Woodcut 1878 */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center gap-4"
          >
            <img
              src="/src/assets/real_images/mayer_woodcut_1878.jpg"
              alt="Xilografía histórica de Julius Robert von Mayer (1878)"
              className="w-20 h-24 object-cover rounded-xl border border-stone-300 flex-shrink-0"
              loading="lazy"
            />
            <div>
              <span className="text-[10px] font-mono text-amber-900 font-bold uppercase">
                Grabado de 1878
              </span>
              <h3 className="font-serif font-bold text-stone-900 text-sm">
                Julius Robert von Mayer en su madurez
              </h3>
              <p className="text-xs text-stone-600 font-serif mt-1">
                Grabado publicado en su fallecimiento en 1878, respetado como uno de los más grandes intelectos de Europa.
              </p>
            </div>
          </motion.div>

          {/* Monument Heilbronn */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center gap-4"
          >
            <img
              src="/src/assets/real_images/mayer_monument_heilbronn.jpg"
              alt="Monumento de bronce a Robert Mayer en Heilbronn"
              className="w-20 h-24 object-cover rounded-xl border border-stone-300 flex-shrink-0"
              loading="lazy"
            />
            <div>
              <span className="text-[10px] font-mono text-amber-900 font-bold uppercase">
                Monumento en Heilbronn
              </span>
              <h3 className="font-serif font-bold text-stone-900 text-sm">
                Estatua en la Plaza del Mercado (1892)
              </h3>
              <p className="text-xs text-stone-600 font-serif mt-1">
                Erigida en bronce por Wilhelm von Rümann en la plaza central de Heilbronn en su honor.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 5 Milestone Cards */}
        <div className="space-y-3">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-4 sm:p-5 rounded-2xl border border-stone-200 bg-white hover:border-amber-800/40 transition-all hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl p-2 bg-stone-100 rounded-xl flex-shrink-0">
                  {m.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded">
                      {m.year}
                    </span>
                    <span className="text-xs font-sans text-stone-500 font-medium">
                      {m.tag}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-base mt-0.5">
                    {m.title[language]}
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 font-serif max-w-md sm:text-right">
                {m.desc[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
