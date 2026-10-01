/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';

interface SimulatorsProps {
  language: Language;
}

export const Simulators: React.FC<SimulatorsProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'blood' | 'heat'>('blood');

  // Simulation 1: Blood & Physiology in Java
  const [temperature, setTemperature] = useState<number>(36); // °C (Java tropical baseline)
  const [activityLevel, setActivityLevel] = useState<'rest' | 'moderate' | 'heavy'>('rest');

  // Compute physiological variables
  const metabolicMultiplier = activityLevel === 'rest' ? 1.0 : activityLevel === 'moderate' ? 2.2 : 4.5;
  const tempDelta = Math.max(0, 37 - temperature);
  const basalO2Consumption = (15 + tempDelta * 1.8) * metabolicMultiplier;
  const extractionPercent = Math.min(85, Math.max(12, Math.round(12 + (tempDelta * 1.3) + (metabolicMultiplier - 1) * 12)));
  const venousSaturation = Math.max(15, 98 - extractionPercent);

  // Venous color calculation: Interpolate from dark venous #4a0413 to arterial red #e11d48
  const saturationFactor = (venousSaturation - 15) / 83; // 0 to 1
  const rVal = Math.round(74 + saturationFactor * (225 - 74));
  const gVal = Math.round(4 + saturationFactor * (29 - 4));
  const bVal = Math.round(19 + saturationFactor * (72 - 19));
  const venousColor = `rgb(${rVal}, ${gVal}, ${bVal})`;

  // Simulation 2: Mechanical Equivalent of Heat
  const [massKg, setMassKg] = useState<number>(10); // kg
  const [heightM, setHeightM] = useState<number>(36.5); // meters
  const [waterVolumeLiters, setWaterVolumeLiters] = useState<number>(1); // Liters of water in calorimeter

  const gravity = 9.80665;
  const workJoules = massKg * gravity * heightM; // J
  const workKgMeters = massKg * heightM; // kg·m

  const caloriesMayer = workKgMeters / 0.365; // in cal
  const caloriesJoule = workJoules / 4.15;
  const caloriesNist = workJoules / 4.184;

  const deltaTNist = (caloriesNist / 1000) / waterVolumeLiters;

  return (
    <section id="simuladores" className="py-16 md:py-24 border-b border-stone-200 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Curatorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200"
        >
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-3 font-sans">
              <span>{language === 'es' ? 'Laboratorio Científico Virtual' : 'Virtual Scientific Laboratory'}</span>
              <span aria-hidden="true">·</span>
              <span>{language === 'es' ? 'Experimentos Interactivos' : 'Interactive Experiments'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight text-balance">
              {language === 'es'
                ? 'El Banco Experimental de Julius Robert von Mayer'
                : 'The Experimental Workbench of Julius Robert von Mayer'}
            </h2>
            <p className="text-stone-700 text-base sm:text-lg font-serif mt-2 max-w-2xl">
              {language === 'es'
                ? 'Interactúa con los dos grandes descubrimientos de Mayer: la fisiología del consumo de oxígeno en Batavia y el equivalente mecánico del calor.'
                : 'Interact with Mayer’s two great insights: the physiology of oxygen combustion in Batavia and the mechanical equivalent of heat.'}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('blood')}
              className={`px-4 py-2 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeTab === 'blood'
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {language === 'es' ? '1. Fisiología y Sangre en Java' : '1. Java Blood Physiology'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('heat')}
              className={`px-4 py-2 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                activeTab === 'heat'
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {language === 'es' ? '2. Equivalente Mecánico (1842)' : '2. Mechanical Equivalent (1842)'}
            </button>
          </div>
        </motion.div>

        {/* TAB 1: Blood & Respiration Simulator */}
        {activeTab === 'blood' && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8"
          >
            {/* Visual Canvas Stage (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF8F5] rounded-xl border border-stone-300 p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-sans font-semibold">
                    {language === 'es' ? 'Simulador de Hemodinámica Térmica' : 'Thermal Hemodynamics Simulator'}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-200 text-stone-800">
                    {temperature}°C · {activityLevel.toUpperCase()}
                  </span>
                </div>

                {/* Vessel visualization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {/* Arterial Blood Display */}
                  <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
                    <span className="text-xs uppercase font-sans tracking-wider text-stone-500 block mb-1">
                      {language === 'es' ? 'Sangre Arterial (Salida del Corazón)' : 'Arterial Blood (Heart Outlet)'}
                    </span>
                    <div className="h-14 rounded-md bg-[#e11d48] flex items-center justify-center text-white text-xs font-mono font-bold shadow-inner">
                      O₂ Sat: 98%
                    </div>
                    <p className="text-xs text-stone-600 mt-2 font-serif">
                      {language === 'es'
                        ? 'Rojo escarlata universal: altamente saturada de oxígeno en los pulmones.'
                        : 'Universal scarlet: fully saturated with oxygen in the lungs.'}
                    </p>
                  </div>

                  {/* Venous Blood Display (Dynamic Color) */}
                  <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
                    <span className="text-xs uppercase font-sans tracking-wider text-stone-500 block mb-1">
                      {language === 'es' ? 'Sangre Venosa (Retorno del Tejido)' : 'Venous Blood (Tissue Return)'}
                    </span>
                    <div
                      className="h-14 rounded-md flex items-center justify-center text-white text-xs font-mono font-bold shadow-inner transition-colors duration-300"
                      style={{ backgroundColor: venousColor }}
                    >
                      O₂ Sat: {venousSaturation}%
                    </div>
                    <p className="text-xs text-stone-600 mt-2 font-serif">
                      {temperature >= 32
                        ? (language === 'es'
                            ? '¡Aspecto casi arterial! Tal como Mayer observó en Batavia en 1840.'
                            : 'Nearly arterial in tone! Exactly what Mayer saw in Batavia in 1840.')
                        : (language === 'es'
                            ? 'Color oscuro vinoso: intensa extracción tisular de oxígeno para calor.'
                            : 'Dark burgundy: deep tissue extraction to preserve warmth.')}
                    </p>
                  </div>
                </div>

                {/* Live Gauges */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-stone-200">
                  <div className="bg-white p-3 rounded border border-stone-200">
                    <span className="text-[11px] text-stone-500 block">
                      {language === 'es' ? 'Demanda Calorífica' : 'Thermal Need'}
                    </span>
                    <span className="text-lg font-bold font-serif text-stone-900 tabular-nums">
                      {tempDelta > 0 ? `${tempDelta * 12} W` : '0 W (Ext.)'}
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded border border-stone-200">
                    <span className="text-[11px] text-stone-500 block">
                      {language === 'es' ? 'O₂ Extraído Tejido' : 'O₂ Extracted'}
                    </span>
                    <span className="text-lg font-bold font-serif text-stone-900 tabular-nums">
                      {extractionPercent}%
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded border border-stone-200">
                    <span className="text-[11px] text-stone-500 block">
                      {language === 'es' ? 'Tasa Metabólica' : 'Metabolic Rate'}
                    </span>
                    <span className="text-lg font-bold font-serif text-stone-900 tabular-nums">
                      {Math.round(basalO2Consumption * 3.5)} kcal/d
                    </span>
                  </div>
                </div>
              </div>

              {/* Mayer historical quote contextualized */}
              <div className="p-4 rounded bg-amber-50/70 border border-amber-200/80 text-xs font-serif text-stone-800">
                <p className="italic">
                  {language === 'es'
                    ? '«En los trópicos, la producción de calor es mínima; de ahí la coloración viva de la sangre venosa. El hombre no es sino un horno viviente que adapta su consumo al frío exterior.»'
                    : '«In the tropics, heat production is minimal; hence the vibrant coloration of venous blood. Man is but a living furnace adjusting fuel to external cold.»'}
                </p>
                <span className="block mt-1 font-sans text-[10px] text-stone-500 not-italic uppercase tracking-wider">
                  — J. R. Mayer, Cuaderno de navegación, Fragata Java (1840)
                </span>
              </div>
            </div>

            {/* Controls Stage (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-stone-200 p-6 space-y-6">
              <h3 className="text-lg font-serif font-bold text-stone-900 pb-2 border-b border-stone-200">
                {language === 'es' ? 'Variables Ambientales y Fisiológicas' : 'Environmental & Physiological Variables'}
              </h3>

              {/* Temperature Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="temp-slider" className="font-semibold text-stone-700">
                    {language === 'es' ? 'Temperatura Ambiente Exterior' : 'Ambient Air Temperature'}
                  </label>
                  <span className="font-mono font-bold text-amber-900 tabular-nums">{temperature}°C</span>
                </div>
                <input
                  id="temp-slider"
                  type="range"
                  min="0"
                  max="42"
                  step="1"
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full accent-stone-900 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-500 font-serif">
                  <span>0°C (Invierno Heilbronn)</span>
                  <span>20°C</span>
                  <span>38°C (Batavia, Java)</span>
                </div>
              </div>

              {/* Physical Exertion Buttons */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-stone-700 block">
                  {language === 'es' ? 'Nivel de Esfuerzo Físico del Marinero' : 'Sailor’s Physical Exertion Level'}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setActivityLevel('rest')}
                    className={`py-2 px-2 text-xs rounded border text-center transition-colors ${
                      activityLevel === 'rest'
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {language === 'es' ? 'Reposo' : 'Resting'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivityLevel('moderate')}
                    className={`py-2 px-2 text-xs rounded border text-center transition-colors ${
                      activityLevel === 'moderate'
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {language === 'es' ? 'Guardia' : 'Watch Duty'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivityLevel('heavy')}
                    className={`py-2 px-2 text-xs rounded border text-center transition-colors ${
                      activityLevel === 'heavy'
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {language === 'es' ? 'Izar Velamen' : 'Rigging Work'}
                  </button>
                </div>
              </div>

              {/* Presets */}
              <div className="pt-4 border-t border-stone-200 space-y-2">
                <span className="text-xs font-semibold text-stone-600 block">
                  {language === 'es' ? 'Casos Históricos Directos:' : 'Historical Cases:'}
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setTemperature(38);
                      setActivityLevel('rest');
                    }}
                    className="text-xs px-3 py-1.5 rounded bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors"
                  >
                    {language === 'es' ? '🌴 Puerto de Batavia (1840)' : '🌴 Batavia Port (1840)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTemperature(4);
                      setActivityLevel('moderate');
                    }}
                    className="text-xs px-3 py-1.5 rounded bg-stone-100 text-stone-800 border border-stone-300 hover:bg-stone-200 transition-colors"
                  >
                    {language === 'es' ? '❄️ Invierno en Alemania' : '❄️ German Winter'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: Mechanical Equivalent of Heat Simulator */}
        {activeTab === 'heat' && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8"
          >
            {/* Visual Canvas Stage (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF8F5] rounded-xl border border-stone-300 p-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-sans font-semibold">
                    {language === 'es'
                      ? 'Calorimetría Mecánica: Trabajo (W) ➔ Calor (Q)'
                      : 'Mechanical Calorimetry: Work (W) ➔ Heat (Q)'}
                  </span>
                  <span className="text-xs font-mono text-stone-700">
                    W = {Math.round(workJoules)} Joules ({Math.round(workKgMeters)} kg·m)
                  </span>
                </div>

                {/* Real Historical Engraving of the Apparatus */}
                <div className="my-4 rounded-lg overflow-hidden border border-stone-300 bg-white p-3 flex items-center gap-4">
                  <img
                    src="/src/assets/real_images/joule_apparatus.png"
                    alt="Grabado histórico del aparato de equivalencia mecánica del calor (1869)"
                    className="w-32 h-auto object-contain flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="text-xs text-stone-600 font-serif">
                    <span className="font-sans font-semibold text-stone-900 block mb-0.5">
                      {language === 'es' ? 'Grabado histórico del aparato (1869)' : 'Historical apparatus engraving (1869)'}
                    </span>
                    <p>
                      {language === 'es'
                        ? 'La pesa descendente hace girar las paletas sumergidas en el calorímetro con agua, transformando energía potencial gravitatoria en calor.'
                        : 'The falling weight rotates submerged paddle wheels inside the water calorimeter, converting gravitational potential energy into heat.'}
                    </p>
                  </div>
                </div>

                {/* Historical Comparison Bars */}
                <div className="space-y-4">
                  {/* Mayer 1842 */}
                  <div className="bg-white p-4 rounded-lg border border-amber-200 shadow-sm">
                    <div className="flex justify-between items-baseline mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-stone-900 text-sm">
                          Julius Robert von Mayer (1842)
                        </span>
                        <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          1 kcal = 365 kg·m (3.58 J/cal)
                        </span>
                      </div>
                      <span className="font-mono text-sm font-bold text-amber-900 tabular-nums">
                        {caloriesMayer.toFixed(1)} cal
                      </span>
                    </div>
                    <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-amber-700 h-full rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (caloriesMayer / caloriesNist) * 85)}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-stone-600 mt-2 font-serif">
                      {language === 'es'
                        ? 'Deducido teóricamente a partir de la expansión de gases (Cp - Cv). Desviación de solo ~14% respecto al valor moderno, sin equipo experimental moderno.'
                        : 'Deduced purely theoretically from gas expansion (Cp - Cv). Deviation of only ~14% from modern standard, without modern lab apparatus.'}
                    </p>
                  </div>

                  {/* Joule 1849 */}
                  <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
                    <div className="flex justify-between items-baseline mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-stone-900 text-sm">
                          James Prescott Joule (1849)
                        </span>
                        <span className="text-[11px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                          4.15 J/cal
                        </span>
                      </div>
                      <span className="font-mono text-sm font-bold text-stone-800 tabular-nums">
                        {caloriesJoule.toFixed(1)} cal
                      </span>
                    </div>
                    <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-stone-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(100, (caloriesJoule / caloriesNist) * 99)}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-stone-500 mt-2 font-serif">
                      {language === 'es'
                        ? 'Medido mediante ruedas de paletas que agitaban agua impulsadas por pesas descendentes.'
                        : 'Measured via paddle wheels agitating water driven by descending counterweights.'}
                    </p>
                  </div>

                  {/* Modern Standard NIST */}
                  <div className="bg-white p-4 rounded-lg border border-emerald-200 shadow-sm">
                    <div className="flex justify-between items-baseline mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-stone-900 text-sm">
                          {language === 'es' ? 'Estándar Moderno (NIST / SI)' : 'Modern Standard (NIST / SI)'}
                        </span>
                        <span className="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          1 cal = 4.184 J
                        </span>
                      </div>
                      <span className="font-mono text-sm font-bold text-emerald-900 tabular-nums">
                        {caloriesNist.toFixed(1)} cal
                      </span>
                    </div>
                    <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                        style={{ width: '100%' }}
                      />
                    </div>
                    <p className="text-[11px] text-stone-600 mt-2 font-serif">
                      {language === 'es'
                        ? 'Constante fundamental definida internacionalmente para la termoquímica.'
                        : 'Internationally accepted fundamental thermochemical constant.'}
                    </p>
                  </div>
                </div>

                {/* Thermal outcome */}
                <div className="mt-6 pt-4 border-t border-stone-200 flex justify-between items-center text-xs">
                  <span className="text-stone-600">
                    {language === 'es'
                      ? `Elevación de temperatura en ${waterVolumeLiters}L de agua:`
                      : `Temperature elevation in ${waterVolumeLiters}L of water:`}
                  </span>
                  <span className="font-mono font-bold text-stone-900 text-sm tabular-nums">
                    +{(deltaTNist).toFixed(4)} °C
                  </span>
                </div>
              </div>

              {/* Scientific Note */}
              <div className="p-4 rounded bg-stone-100 border border-stone-300 text-xs font-serif text-stone-700">
                <span className="font-sans font-semibold text-stone-900 block mb-1">
                  {language === 'es' ? '¿Por qué el valor de Mayer fue 3.58 en vez de 4.18?' : 'Why was Mayer’s value 3.58 instead of 4.18?'}
                </span>
                <p>
                  {language === 'es'
                    ? 'Mayer no cometió ningún error de razonamiento. Utilizó la mejor medición experimental disponible en 1842 para el calor específico del aire a presión constante (realizada por Delaroche y Bérard en 1813), la cual contenía un error experimental de laboratorio del 14% que no fue corregido hasta los experimentos de Regnault en 1853.'
                    : 'Mayer made no logical error. He relied on the finest available 1842 laboratory data for the specific heat of air (by Delaroche & Bérard, 1813), which carried an inherent 14% measurement bias only corrected by Regnault in 1853.'}
                </p>
              </div>
            </div>

            {/* Controls Stage (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-stone-200 p-6 space-y-6">
              <h3 className="text-lg font-serif font-bold text-stone-900 pb-2 border-b border-stone-200">
                {language === 'es' ? 'Parámetros del Calorímetro de Caída' : 'Falling Weight Calorimeter Parameters'}
              </h3>

              {/* Mass Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="mass-slider" className="font-semibold text-stone-700">
                    {language === 'es' ? 'Masa de la Pesa Suspendida (m)' : 'Suspended Mass (m)'}
                  </label>
                  <span className="font-mono font-bold text-amber-900 tabular-nums">{massKg} kg</span>
                </div>
                <input
                  id="mass-slider"
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={massKg}
                  onChange={(e) => setMassKg(Number(e.target.value))}
                  className="w-full accent-stone-900 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-500 font-serif">
                  <span>1 kg</span>
                  <span>50 kg</span>
                  <span>100 kg</span>
                </div>
              </div>

              {/* Height Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="height-slider" className="font-semibold text-stone-700">
                    {language === 'es' ? 'Altura de Caída (h)' : 'Falling Drop Height (h)'}
                  </label>
                  <span className="font-mono font-bold text-amber-900 tabular-nums">{heightM} m</span>
                </div>
                <input
                  id="height-slider"
                  type="range"
                  min="1"
                  max="365"
                  step="0.5"
                  value={heightM}
                  onChange={(e) => setHeightM(Number(e.target.value))}
                  className="w-full accent-stone-900 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-500 font-serif">
                  <span>1 metro</span>
                  <span>100 m</span>
                  <span>365 m (Cálculo Mayer)</span>
                </div>
              </div>

              {/* Water Volume */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label htmlFor="water-slider" className="font-semibold text-stone-700">
                    {language === 'es' ? 'Masa de Agua en el Recipiente' : 'Water Mass in Calorimeter'}
                  </label>
                  <span className="font-mono font-bold text-amber-900 tabular-nums">{waterVolumeLiters} kg (Litros)</span>
                </div>
                <input
                  id="water-slider"
                  type="range"
                  min="0.5"
                  max="10"
                  step="0.5"
                  value={waterVolumeLiters}
                  onChange={(e) => setWaterVolumeLiters(Number(e.target.value))}
                  className="w-full accent-stone-900 cursor-pointer"
                />
              </div>

              {/* Quick Setup Button */}
              <div className="pt-4 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => {
                    setMassKg(1);
                    setHeightM(365);
                    setWaterVolumeLiters(1);
                  }}
                  className="w-full py-2.5 px-4 rounded bg-stone-900 text-stone-50 text-xs font-medium hover:bg-stone-800 transition-colors shadow-sm"
                >
                  {language === 'es'
                    ? 'Restaurar Experimento Original de Mayer de 1842 (1 kg × 365 m)'
                    : 'Restore Mayer’s Original 1842 Benchmark (1 kg × 365 m)'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
