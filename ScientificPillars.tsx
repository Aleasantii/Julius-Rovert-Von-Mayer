/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { SCIENTIFIC_PILLARS } from '../data/mayerData';

interface ScientificPillarsProps {
  language: Language;
}

export const ScientificPillars: React.FC<ScientificPillarsProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      num: '01',
      icon: '⚡',
      badge: '1842',
      title: { es: 'La 1ª Ley de la Termodinámica', en: '1st Law of Thermodynamics' },
      short: {
        es: 'La energía total del universo es constante. No se crea de la nada ni se destruye jamás: sólo cambia de forma (cinética, térmica, química, eléctrica).',
        en: 'The total energy of the universe is constant. It can never be created from nothing or destroyed: it only shifts between forms.',
      },
      formula: 'ΔU = Q - W',
      impact: { es: 'Rige desde los motores de cohete hasta tu smartphone.', en: 'Powers everything from rocket engines to smartphones.' },
    },
    {
      num: '02',
      icon: '🔥',
      badge: '1842',
      title: { es: 'Equivalente Mecánico del Calor', en: 'Mechanical Equivalent of Heat' },
      short: {
        es: 'El calor no es un fluido mágico ("calórico"), sino energía en movimiento. Mayer calculó que dejar caer 1 kg desde 365 m genera 1 kilocaloría de calor.',
        en: 'Heat is microscopic mechanical energy. Mayer computed dropping 1 kg through 365 m produces 1 kilocalorie of heat.',
      },
      formula: '1 kcal ≈ 365 kg·m (3.58 J/cal)',
      impact: { es: 'Permitió inventar la termodinámica moderna y los motores eficientes.', en: 'Enabled modern thermodynamics and thermal power plants.' },
    },
    {
      num: '03',
      icon: '🌿',
      badge: '1845',
      title: { es: 'Fotosíntesis y Energía Solar', en: 'Photosynthesis & Solar Power' },
      short: {
        es: 'Fue el primero en descubrir que las plantas verdes capturan fotones del Sol y los almacenan como energía química en la glucosa y la madera.',
        en: 'First to explain green flora captures sunlight photons, storing them as chemical bonds in sugars.',
      },
      formula: 'CO₂ + H₂O + Luz ➔ Glucosa + O₂',
      impact: { es: 'Explica por qué todo ser vivo en la Tierra vive gracias al Sol.', en: 'Explains why all life on Earth is solar-powered.' },
    },
    {
      num: '04',
      icon: '❤️',
      badge: '1845',
      title: { es: 'El Cuerpo es un Motor Químico', en: 'The Body as a Chemical Engine' },
      short: {
        es: 'Destruyó la creencia de que los seres vivos tenían un "espíritu mágico". Demostró que el corazón y los músculos queman comida como una máquina de vapor quema carbón.',
        en: 'Demolished medieval vitalism: muscles and heart burn nutrients with oxygen exactly like engines burn coal.',
      },
      formula: 'Calorías comida = Calor + Movimiento',
      impact: { es: 'Nacimiento de la nutrición moderna, el deporte y la medicina metabólica.', en: 'Birth of modern nutritional science and sports physiology.' },
    },
    {
      num: '05',
      icon: '☀️',
      badge: '1848',
      title: { es: '¿De dónde saca energía el Sol?', en: 'The Source of Solar Heat' },
      short: {
        es: 'Calculó que si el Sol fuera de carbón puro, se apagaría en 5.000 años. Propuso que meteoros e impactos gravitatorios alimentaban su brillo incesante.',
        en: 'Proved a coal-burning Sun would burn out in 5,000 years, proposing gravitational accretion as the engine.',
      },
      formula: 'E = ½ m v²  (v > 600 km/s)',
      impact: { es: 'Pionero de la astrofísica estelar moderna antes de la fusión nuclear.', en: 'Pioneered stellar astrophysics prior to nuclear fusion.' },
    },
  ];

  return (
    <section id="pilares" className="py-12 md:py-16 border-b border-stone-200 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-amber-900 font-semibold bg-amber-200/60 px-2.5 py-1 rounded">
            5 Revoluciones Científicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3">
            {language === 'es' ? 'Los 5 Pilares de Julius Robert von Mayer' : 'Mayer’s 5 Pillars of Physics'}
          </h2>
          <p className="text-stone-700 text-sm sm:text-base font-serif mt-2">
            {language === 'es'
              ? 'Las ideas revolucionarias que cambiaron la física, la biología y la astronomía para siempre.'
              : 'The revolutionary breakthroughs that transformed physics, biology, and astrophysics forever.'}
          </p>
        </motion.div>

        {/* 5 Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pil, idx) => (
            <motion.div
              key={pil.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg bg-white ${
                idx === 0
                  ? 'border-amber-700/60 md:col-span-2 lg:col-span-1 shadow-sm ring-1 ring-amber-700/20'
                  : 'border-stone-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl p-2 bg-amber-50 rounded-xl">{pil.icon}</span>
                <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  {pil.badge}
                </span>
              </div>

              <span className="text-[11px] font-mono font-bold text-stone-400 block">
                PILAR {pil.num}
              </span>
              <h3 className="font-serif font-bold text-stone-900 text-lg mt-0.5 mb-2">
                {pil.title[language]}
              </h3>

              <p className="text-xs text-stone-600 font-serif leading-relaxed">
                {pil.short[language]}
              </p>

              {/* Formula Badge */}
              <div className="mt-3 p-2 bg-stone-50 rounded-lg border border-stone-200 font-mono text-[11px] text-amber-950 font-semibold truncate">
                <code>{pil.formula}</code>
              </div>

              {/* Impact */}
              <div className="mt-3 pt-2 border-t border-stone-100 text-[11px] font-sans text-stone-500 flex items-center gap-1.5">
                <span>💡</span>
                <span>{pil.impact[language]}</span>
              </div>
            </motion.div>
          ))}

          {/* Historical Monument & Publisher Card (Images showcase) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 rounded-2xl border border-stone-200 bg-stone-900 text-stone-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-amber-400 font-bold">
                  Justus von Liebig (1842)
                </span>
                <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded">
                  Annalen
                </span>
              </div>
              <div className="flex items-center gap-3 my-2">
                <img
                  src="/src/assets/real_images/justus_liebig.jpg"
                  alt="Justus von Liebig retrato histórico"
                  className="w-14 h-14 rounded-xl object-cover border border-stone-700"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">
                    El sabio que creyó en Mayer
                  </h4>
                  <p className="text-[11px] text-stone-300 font-serif">
                    Justus von Liebig publicó en mayo de 1842 el tratado fundacional de Mayer cuando todos lo rechazaban.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-800 text-[11px] text-amber-300 font-mono">
              ★ 1ª vez en la historia humana que se formuló la 1ª Ley.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
