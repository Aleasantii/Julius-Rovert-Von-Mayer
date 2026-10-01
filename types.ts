/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'es' | 'en';

export interface TimelineEvent {
  year: number | string;
  title: { es: string; en: string };
  category: 'juventud' | 'expedicion' | 'descubrimiento' | 'crisis' | 'reconocimiento';
  summary: { es: string; en: string };
  details: { es: string; en: string };
  location: string;
  quote?: string;
}

export interface Publication {
  year: number;
  title: string;
  originalGerman: string;
  description: { es: string; en: string };
  significance: { es: string; en: string };
  publisher: string;
  keyExcerpt: {
    german: string;
    translation: { es: string; en: string };
  };
}

export interface ScientificPillar {
  id: string;
  number: string;
  title: { es: string; en: string };
  subtitle: { es: string; en: string };
  concept: { es: string; en: string };
  mayerDeduction: { es: string; en: string };
  modernImpact: { es: string; en: string };
  formula?: string;
}

export interface QuizQuestion {
  id: number;
  question: { es: string; en: string };
  options: { es: string[]; en: string[] };
  correctIndex: number;
  explanation: { es: string; en: string };
}
