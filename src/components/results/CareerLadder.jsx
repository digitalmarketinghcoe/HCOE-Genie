"use client";

import { motion } from "framer-motion";
import LadderStep from "./LadderStep";

export default function CareerLadder({ program }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="w-full rounded-2xl border p-6"
      style={{
        background: `linear-gradient(135deg, ${program.gradientFrom}40 0%, ${program.gradientTo}10 100%)`,
        borderColor: `${program.color}25`,
      }}
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">{program.emoji}</span>
        <div>
          <h3 className="font-bold text-white text-lg leading-tight">
            Viral Career Ladder
          </h3>
          <p className="text-xs text-white/40">{program.degree}</p>
        </div>
      </div>

      <div className="flex flex-col">
        {program.careerLadder.map((step, i) => (
          <LadderStep
            key={step.phase}
            step={step}
            index={i}
            color={program.color}
          />
        ))}
      </div>
    </motion.div>
  );
}
