/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface PriorityControversyProps {
  language: Language;
}

export const PriorityControversy: React.FC<PriorityControversyProps> = ({ language }) => {
  const [selectedProtagonist, setSelectedProtagonist] = useState<string>('mayer');

  const protagonists = [
    {
      id: 'mayer',
      name: 'Julius Robert von Mayer',
      year: '1841 – 1842',
      role: {
        es: 'El Descubridor Primigenio',
        en: 'The Primordial Discoverer',
      },
      approach: {
        es: 'Deducción filosófica, fisiología metabólica y termodinámica de gases ($C_p - C_v$).',
        en: 'Philosophical deduction, metabolic physiology, and gas thermodynamics ($C_p - C_v$).',
      },
      claim: {
        es: 'Publicó en mayo de 1842 la ley de conservación y el valor $1\\text{ cal} \\approx 365\\text{ kg}\\cdot\\text{m}$. Fue marginado por no pertenecer al estamento universitario de físicos.',
        en: 'Published in May 1842 the law of conservation and $1\\text{ cal} \\approx 365\\text{ kg}\\cdot\\text{m}$. He was dismissed as an outsider lacking academic physics credentials.',
      },
      verdict: {
        es: 'Prioridad cronológica indiscutible de la Primera Ley y primer cálculo numérico del equivalente mecánico.',
        en: 'Undisputed chronological priority of the First Law and earliest numerical calculation of the mechanical equivalent.',
      },
    },
    {
      id: 'joule',
      name: 'James Prescott Joule',
      year: '1843 – 1849',
      role: {
        es: 'El Experimentador de Precisión',
        en: 'The Precision Experimentalist',
      },
      approach: {
        es: 'Calorimetría de rueda de paletas agitada por pesas, calentamiento electromagnético y fricción de fluidos.',
        en: 'Paddle-wheel calorimetry stirred by descending weights, electromagnetic heating, and fluid friction.',
      },
      claim: {
        es: 'Presentó sus experimentos en 1843 ante la British Association. Sostuvo durante años que Mayer solo había hecho "especulaciones" sin datos propios de laboratorio.',
        en: 'Presented laboratory trials to the British Association in 1843. Long argued Mayer had merely engaged in "speculations" devoid of laboratory measurements.',
      },
      verdict: {
        es: 'Determinación experimental de laboratorio insuperable, pero posterior en fecha a la publicación de Mayer de 1842.',
        en: 'Peerless laboratory experimental precision, though chronologically following Mayer’s 1842 publication.',
      },
    },
    {
      id: 'helmholtz',
      name: 'Hermann von Helmholtz',
      year: '1847',
      role: {
        es: 'El Matemático Riguroso',
        en: 'The Mathematical Rigorist',
      },
      approach: {
        es: 'Mecánica teórica analítica newtoniana y formulación diferencial de la energía potencial y cinética.',
        en: 'Analytical Newtonian mechanics and differential formulation of potential and kinetic energy conservation.',
      },
      claim: {
        es: 'Publicó "Über die Erhaltung der Kraft" (1847). Desconocía el trabajo de Mayer al inicio; una vez leído, admitió con generosidad su primacía conceptual.',
        en: 'Authored "Über die Erhaltung der Kraft" (1847). Initially unacquainted with Mayer’s paper; upon reading it, he generously conceded Mayer’s priority.',
      },
      verdict: {
        es: 'Sistematización matemática canónica de la conservación de la energía en el formalismo clásico moderno.',
        en: 'Canonical mathematical systematization of conservation of energy within modern classical mechanics.',
      },
    },
    {
      id: 'tyndall',
      name: 'John Tyndall',
      year: '1862',
      role: {
        es: 'El Paladín de la Justicia',
        en: 'The Champion of Historical Truth',
      },
      approach: {
        es: 'Defensa pública internacional ante la Royal Institution de Londres y traducción de los tratados de Mayer.',
        en: 'Public international advocacy before London’s Royal Institution and translation of Mayer’s writings.',
      },
      claim: {
        es: 'Tyndall rompió el monopolio chauvinista británico de Joule, enfrentándose a William Thomson (Lord Kelvin) y Peter Guthrie Tait para devolverle el mérito a Mayer.',
        en: 'Tyndall broke British chauvinism favoring Joule, squaring off against William Thomson (Lord Kelvin) and P. G. Tait to restore Mayer’s honor.',
      },
      verdict: {
        es: 'Artífice de la restitución histórica de Mayer y de la concesión de la Medalla Copley en 1871.',
        en: 'The architect behind Mayer’s historical restoration and the award of the Copley Medal in 1871.',
      },
    },
  ];

  const currentProtagonist =
    protagonists.find((p) => p.id === selectedProtagonist) || protagonists[0];

  return (
    <section id="controversia" className="py-16 md:py-24 border-b border-stone-200 bg-[#FBF9F5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Curatorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-3 font-sans">
            <span>{language === 'es' ? 'Historia y Epistemología' : 'History & Epistemology'}</span>
            <span aria-hidden="true">·</span>
            <span>{language === 'es' ? 'La Gran Controversia Científica' : 'The Great Scientific Dispute'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            {language === 'es'
              ? 'La Gran Disputa de Prioridad: Mayer, Joule y Helmholtz'
              : 'The Priority Controversy: Mayer, Joule & Helmholtz'}
          </h2>

          <p className="text-stone-700 text-base sm:text-lg font-serif mt-2 max-w-3xl leading-relaxed">
            {language === 'es'
              ? '¿Quién descubrió realmente la conservación de la energía? Conozca cómo el elitismo académico intentó sepultar la gloria del médico de Heilbronn.'
              : 'Who truly discovered the conservation of energy? Explore how academic gatekeeping attempted to erase the glory of Heilbronn’s physician.'}
          </p>
        </motion.div>

        {/* Protagonists Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10"
        >
          {protagonists.map((pro) => {
            const isSelected = pro.id === selectedProtagonist;
            return (
              <button
                key={pro.id}
                type="button"
                onClick={() => setSelectedProtagonist(pro.id)}
                className={`p-4 rounded-lg border text-left transition-all ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <span
                  className={`text-xs font-mono block ${
                    isSelected ? 'text-amber-400' : 'text-stone-400'
                  }`}
                >
                  {pro.year}
                </span>
                <h3
                  className={`font-serif font-bold text-base mt-1 ${
                    isSelected ? 'text-white' : 'text-stone-900'
                  }`}
                >
                  {pro.name.split(' ')[0]} {pro.name.split(' ').slice(-1)[0]}
                </h3>
                <span
                  className={`text-xs block mt-1 ${
                    isSelected ? 'text-stone-300' : 'text-stone-500'
                  }`}
                >
                  {pro.role[language]}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Selected Profile Detail */}
        <motion.div
          key={currentProtagonist.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-8 bg-white rounded-xl border border-stone-300 p-8 shadow-sm space-y-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-900 font-mono font-bold">
                {currentProtagonist.role[language]}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                {currentProtagonist.name}
              </h3>
            </div>
            <span className="text-sm font-mono text-stone-500">
              {currentProtagonist.year}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <h4 className="text-xs uppercase font-sans tracking-wider text-stone-500 font-semibold">
                {language === 'es' ? 'Método y Enfoque' : 'Method & Approach'}
              </h4>
              <p className="text-stone-800 font-serif text-sm leading-relaxed">
                {currentProtagonist.approach[language]}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs uppercase font-sans tracking-wider text-stone-500 font-semibold">
                {language === 'es' ? 'La Postura Histórica' : 'Historical Stance'}
              </h4>
              <p className="text-stone-800 font-serif text-sm leading-relaxed">
                {currentProtagonist.claim[language]}
              </p>
            </div>

            <div className="space-y-1">
              <h4 className="text-xs uppercase font-sans tracking-wider text-amber-900 font-semibold">
                {language === 'es' ? 'Veredicto Historiográfico' : 'Historiographical Verdict'}
              </h4>
              <p className="text-stone-800 font-serif text-sm leading-relaxed font-medium">
                {currentProtagonist.verdict[language]}
              </p>
            </div>
          </div>

          {/* Historic resolution highlight */}
          <div className="p-4 rounded-lg bg-amber-50/70 border border-amber-200/80 text-xs font-serif text-stone-800 leading-relaxed">
            <p className="font-semibold text-stone-900 mb-1">
              {language === 'es' ? 'El Juicio de John Tyndall (Royal Institution, 1862):' : 'The Verdict of John Tyndall (Royal Institution, 1862):'}
            </p>
            <p className="italic">
              {language === 'es'
                ? '«Mayer dedujo y fijó el equivalente mecánico del calor con una penetración que no ha sido superada. Reclamar todo el mérito para un solo país o para un solo hombre es una injusticia que la posteridad no tolerará.»'
                : '«Mayer deduced and fixed the mechanical equivalent of heat with a penetration that has not been surpassed. To claim the entire glory for a single nation or a single man is an injustice posterity will not tolerate.»'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
