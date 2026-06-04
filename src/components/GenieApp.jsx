"use client";

import { AnimatePresence, motion } from "framer-motion";
import { GraphifyProvider, useGraphify, PHASES } from "@/context/GraphifyContext";
import LandingScreen from "./LandingScreen";
import GameEngine from "./game-engine/GameEngine";
import ResultScreen from "./results/ResultScreen";
import StarField from "./StarField";

const PROGRAM_COLORS = {
  BCT: "#00F2FE", CSIT: "#9B5DE5", BCA: "#F15BB5",
  BEI: "#FEE440", BCE: "#06D6A0", BARCH: "#FF6B6B",
};

function AppRouter() {
  const { phase, topResult, currentQuestionIndex, totalQuestions, progress, restart } = useGraphify();

  const accentColor = topResult ? PROGRAM_COLORS[topResult] : "#00F2FE";

  return (
    <div className="relative min-h-dvh bg-cosmic overflow-x-hidden">
      <StarField />

      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0d1117]/85 backdrop-blur-2xl">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={phase !== PHASES.LANDING ? restart : undefined}
            className="flex items-center gap-2 group"
          >
            <span className="text-xl group-hover:scale-110 transition-transform duration-200">🧞</span>
            <div className="leading-none">
              <div className="text-xs font-extrabold tracking-tight text-white">
                HCOE{" "}
                <span className="text-gradient-cyan">Genie</span>
              </div>
              <div className="text-[0.55rem] text-white/25 tracking-wider">
                Powered by Graphify
              </div>
            </div>
          </button>

          {/* Right status */}
          <div className="flex items-center gap-3">
            {phase === PHASES.PLAYING && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/8 bg-white/[0.03]"
              >
                <span
                  className="size-1.5 rounded-full animate-pulse"
                  style={{ background: accentColor }}
                />
                <span className="text-[0.65rem] font-mono text-white/40">
                  {currentQuestionIndex + 1}/{totalQuestions}
                </span>
              </motion.div>
            )}
            {phase === PHASES.RESULT && topResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
                style={{ borderColor: `${accentColor}40`, background: `${accentColor}10` }}
              >
                <span className="text-[0.65rem] font-bold" style={{ color: accentColor }}>
                  {topResult} ✓
                </span>
              </motion.div>
            )}
            <div className="flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-cyan animate-pulse" />
              <span className="text-[0.6rem] font-mono text-white/25">v2.0</span>
            </div>
          </div>
        </div>

        {/* Progress strip under header */}
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
      </header>

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
    <GraphifyProvider>
      <AppRouter />
    </GraphifyProvider>
  );
}
