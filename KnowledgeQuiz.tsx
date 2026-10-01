/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types';
import { QUIZ_QUESTIONS } from '../data/mayerData';

interface KnowledgeQuizProps {
  language: Language;
}

export const KnowledgeQuiz: React.FC<KnowledgeQuizProps> = ({ language }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIdx];

  const handleSelectOption = (idx: number) => {
    if (submitted) return;
    setSelectedOption(idx);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
    if (selectedOption === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
      setSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section id="evaluacion" className="py-16 md:py-24 border-b border-stone-200 bg-[#F5F2EA]/40">
      <div className="max-w-4xl mx-auto px-6">
        {/* Curatorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-3 font-sans">
            <span>{language === 'es' ? 'Evaluación Histórico-Científica' : 'Historical & Scientific Assessment'}</span>
            <span aria-hidden="true">·</span>
            <span>{language === 'es' ? 'Test de Comprensión' : 'Comprehension Test'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight text-balance">
            {language === 'es'
              ? '¿Cuánto conoces sobre Julius Robert von Mayer?'
              : 'How well do you know Julius Robert von Mayer?'}
          </h2>

          <p className="text-stone-700 text-base sm:text-lg font-serif mt-2 leading-relaxed">
            {language === 'es'
              ? 'Ponga a prueba su conocimiento sobre sus descubrimientos, la epifanía en Java y la génesis de la Primera Ley de la Termodinámica.'
              : 'Test your understanding of his discoveries, the Java epiphany, and the birth of the First Law of Thermodynamics.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 bg-white rounded-xl border border-stone-300 p-6 sm:p-8 shadow-sm"
        >
          {!quizFinished ? (
            <div className="space-y-6">
              {/* Progress & Question Header */}
              <div className="flex items-center justify-between text-xs text-stone-500 pb-3 border-b border-stone-200 font-mono">
                <span>
                  {language === 'es' ? 'Pregunta' : 'Question'} {currentQuestionIdx + 1} / {QUIZ_QUESTIONS.length}
                </span>
                <span>
                  {language === 'es' ? 'Puntaje actual:' : 'Current score:'} {score} pts
                </span>
              </div>

              {/* Question Text */}
              <AnimatePresence mode="wait">
                <motion.h3
                  key={currentQ.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-snug"
                >
                  {currentQ.question[language]}
                </motion.h3>
              </AnimatePresence>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options[language].map((optionText, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = currentQ.correctIndex === idx;

                  let optionStyle = 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800';

                  if (submitted) {
                    if (isCorrect) {
                      optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium';
                    } else if (isSelected && !isCorrect) {
                      optionStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                    } else {
                      optionStyle = 'border-stone-200 bg-stone-50/50 text-stone-400';
                    }
                  } else if (isSelected) {
                    optionStyle = 'border-stone-900 bg-stone-900 text-white shadow-sm';
                  }

                  return (
                    <button
                      key={optionText}
                      type="button"
                      disabled={submitted}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-lg border text-sm sm:text-base font-serif transition-colors flex items-center justify-between ${optionStyle}`}
                    >
                      <span>{optionText}</span>
                      {submitted && isCorrect && (
                        <span className="text-xs font-mono text-emerald-700 font-bold ml-2">✓ Correcto</span>
                      )}
                      {submitted && isSelected && !isCorrect && (
                        <span className="text-xs font-mono text-rose-700 font-bold ml-2">✕ Incorrecto</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Banner when answered */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-amber-50/80 border border-amber-200 text-xs sm:text-sm font-serif text-stone-800 space-y-1"
                >
                  <span className="font-sans font-bold text-amber-950 uppercase tracking-wider text-[11px] block">
                    {language === 'es' ? 'Fundamento Histórico:' : 'Historical Foundation:'}
                  </span>
                  <p>{currentQ.explanation[language]}</p>
                </motion.div>
              )}

              {/* Bottom Actions */}
              <div className="flex justify-end pt-3">
                {!submitted ? (
                  <button
                    type="button"
                    disabled={selectedOption === null}
                    onClick={handleConfirmAnswer}
                    className="px-5 py-2.5 rounded bg-stone-900 text-white text-xs font-medium hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    {language === 'es' ? 'Comprobar Respuesta' : 'Verify Answer'}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="px-5 py-2.5 rounded bg-amber-900 text-amber-50 text-xs font-medium hover:bg-amber-950 transition-colors"
                  >
                    {currentQuestionIdx < QUIZ_QUESTIONS.length - 1
                      ? (language === 'es' ? 'Siguiente Pregunta →' : 'Next Question →')
                      : (language === 'es' ? 'Ver Resultado Final' : 'View Final Score')}
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Final Score View */
            <div className="text-center py-8 space-y-4">
              <span className="text-xs font-sans uppercase tracking-widest text-stone-500 block">
                {language === 'es' ? 'Resultado de la Evaluación' : 'Assessment Result'}
              </span>
              <div className="text-5xl sm:text-6xl font-serif font-bold text-stone-900 tabular-nums">
                {score} / {QUIZ_QUESTIONS.length}
              </div>
              <p className="text-stone-700 font-serif text-base max-w-md mx-auto">
                {score === 5
                  ? (language === 'es'
                      ? '¡Brillante! Tienes un conocimiento excepcional de la vida y obra de Julius Robert von Mayer.'
                      : 'Brilliant! You hold exceptional mastery of Julius Robert von Mayer’s life and scientific work.')
                  : (language === 'es'
                      ? '¡Buen intento! Mayer necesitó años para que el mundo comprendiera su genialidad; te invitamos a repasar sus tratados.'
                      : 'Good effort! It took years for the world to grasp Mayer’s brilliance; explore his treatises to learn even more.')}
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded bg-stone-900 text-stone-50 text-xs font-medium hover:bg-stone-800 transition-colors"
                >
                  {language === 'es' ? 'Reiniciar Evaluación' : 'Retake Assessment'}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
