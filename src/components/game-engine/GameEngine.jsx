"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useGraphify } from "@/context/GraphifyContext";
import FlashCard from "./FlashCard";
import ProgressBar from "./ProgressBar";

const CELEBRATION_MESSAGES = [
  "Interesting choice. The Genie is watching. 👀",
  "That's telling. Real different. 🔥",
  "Bold move. Your DNA is revealing itself. ✨",
  "The graph is updating. 📊",
  "Noted. This is getting specific. 🎯",
  "That trait is locked in. 🧬",
  "The Genie didn't see that coming. 😤",
  "Pattern recognized. Almost there. ⚡",
  "The final picture is forming. 🔮",
  "Last one. This changes everything. 👑",
];

export default function GameEngine() {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    progress,
    submitAnswer,
    rankedResults,
  } = useGraphify();

  const [celebrate, setCelebrate] = useState(null);

  function handleSelect(option) {
    const msg = CELEBRATION_MESSAGES[currentQuestionIndex] ?? "Locked in. ✓";
    setCelebrate(msg);
    setTimeout(() => {
      setCelebrate(null);
      submitAnswer(option, currentQuestion?.id);
    }, 650);
  }

  if (!currentQuestion) return null;

  const topSoFar = rankedResults[0];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 flex flex-col gap-5">
      {/* Progress + live preview */}
      <div className="flex flex-col gap-3">
        <ProgressBar
          progress={progress}
          current={currentQuestionIndex + 1}
          total={totalQuestions}
        />

        {/* Live compatibility peek — shown after first answer */}
        <AnimatePresence>
          {currentQuestionIndex > 0 && topSoFar && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/6 overflow-hidden"
            >
              <span className="text-[0.65rem] text-white/30 font-mono uppercase tracking-wider">
                Leading →
              </span>
              <span className="text-[0.75rem] font-extrabold" style={{ color: {
                BCT: "#00F2FE", CSIT: "#9B5DE5", BCA: "#F15BB5",
                BEI: "#FEE440", BCE: "#06D6A0", BARCH: "#FF6B6B",
              }[topSoFar.node] }}>
                {topSoFar.node}
              </span>
              <span className="text-[0.65rem] text-white/25">
                ({topSoFar.pct ?? 0}% compat)
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        {celebrate ? (
          <motion.div
            key="celebrate"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center justify-center py-16 gap-3"
          >
            <motion.div
              className="text-5xl"
              animate={{ scale: [1, 1.3, 1], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              ✨
            </motion.div>
            <p className="text-base font-bold text-white/80 text-center px-6">{celebrate}</p>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -30, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Question meta */}
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentQuestion.emoji}</span>
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-white/30 uppercase">
                  {currentQuestion.category}
                </span>
                <div className="text-[0.7rem] font-mono text-white/20">
                  Q{currentQuestionIndex + 1} of {totalQuestions}
                </div>
              </div>
            </div>

            {/* Question text */}
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
              {currentQuestion.question}
            </h2>

            {/* Swipe hint — only on first question */}
            {currentQuestionIndex === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xs text-white/25 text-center"
              >
                Tap to pick · Drag right to lock in
              </motion.p>
            )}

            {/* Options */}
            <div className="flex flex-col gap-2.5">
              {currentQuestion.options.map((opt, i) => (
                <FlashCard
                  key={opt.id}
                  option={opt}
                  onSelect={handleSelect}
                  index={i}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
