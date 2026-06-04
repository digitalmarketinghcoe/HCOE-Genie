"use client";

import { AnimatePresence, motion } from "framer-motion";
import { QuizProvider, useQuiz, PHASES } from "@/context/QuizContext";
import LandingScreen from "./LandingScreen";
import GameEngine from "./game-engine/GameEngine";
import ResultScreen from "./results/ResultScreen";
import StarField from "./StarField";

const PROGRAM_COLORS = {
  BCT:   "#00F2FE",
  CSIT:  "#9B5DE5",
  BCA:   "#F15BB5",
  BEI:   "#FEE440",
  BCE:   "#06D6A0",
  BARCH: "#FF6B6B",
};

function QuizShell() {
  const {
    phase, topResult,
    currentQuestionIndex, totalQuestions,
    progress, restart,
  } = useQuiz();

  const accentColor = topResult ? PROGRAM_COLORS[topResult] : "#00F2FE";

  return (
    <div className="relative min-h-dvh bg-cosmic overflow-x-hidden">
      <StarField />

      {/* ── In-quiz header (quiz-specific progress indicator) ── */}
      {phase !== PHASES.LANDING && (
        <div className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#0d1117]/80 backdrop-blur-xl">
          <div className="max-w-2xl mx-auto px-4 h-12 flex items-center justify-between">
            <button
              onClick={restart}
              className="text-xs text-white/35 hover:text-white transition-colors font-medium"
            >
              ← Start over
            </button>

            <div className="flex items-center gap-2">
              {phase === PHASES.PLAYING && (
                <span className="text-[0.7rem] font-mono text-white/40">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </span>
              )}
              {phase === PHASES.RESULT && topResult && (
                <div
                  className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-bold"
                  style={{ color: accentColor, background: `${accentColor}15` }}
                >
                  {topResult} ✓
                </div>
              )}
            </div>
          </div>

          {phase === PHASES.PLAYING && (
            <motion.div
              className="h-0.5 w-full shimmer-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          )}
          {phase === PHASES.RESULT && (
            <div className="h-0.5 w-full" style={{ background: accentColor }} />
          )}
        </div>
      )}

      {/* ── Page content ── */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {phase === PHASES.LANDING && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <LandingScreen />
            </motion.div>
          )}

          {phase === PHASES.PLAYING && (
            <motion.div
              key="playing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GameEngine />
            </motion.div>
          )}

          {phase === PHASES.RESULT && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <ResultScreen />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function GenieApp() {
  return (
    <QuizProvider>
      <QuizShell />
    </QuizProvider>
  );
}
