/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { ScrollNavigation } from './components/ScrollNavigation';
import { Hero } from './components/Hero';
import { JavaDiscovery } from './components/JavaDiscovery';
import { ScientificPillars } from './components/ScientificPillars';
import { Simulators } from './components/Simulators';
import { BiographyTimeline } from './components/BiographyTimeline';
import { KnowledgeQuiz } from './components/KnowledgeQuiz';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('es');
  const [readingMode, setReadingMode] = useState<boolean>(false);

  return (
    <div
      className={`min-h-screen text-stone-900 transition-colors duration-300 relative ${
        readingMode ? 'bg-[#F7F4EE] max-w-5xl mx-auto border-x border-stone-200 shadow-sm' : 'bg-[#FBF9F5]'
      }`}
    >
      {/* Scroll Progress & Chapter Rail */}
      <ScrollNavigation language={language} />

      {/* 3-Zone Top Bar with Student Identification */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        readingMode={readingMode}
        onToggleReadingMode={() => setReadingMode(!readingMode)}
      />

      <main>
        {/* Archival Marquee Hero */}
        <Hero language={language} />

        {/* 1840 Java Expedition & Phlebotomy Epiphany */}
        <JavaDiscovery language={language} />

        {/* The 5 Scientific Pillars */}
        <ScientificPillars language={language} />

        {/* Interactive Virtual Laboratories */}
        <Simulators language={language} />

        {/* Streamlined Life Milestones */}
        <BiographyTimeline language={language} />

        {/* Knowledge & Comprehension Quiz */}
        <KnowledgeQuiz language={language} />
      </main>

      {/* Institutional Footer */}
      <Footer language={language} />
    </div>
  );
}
