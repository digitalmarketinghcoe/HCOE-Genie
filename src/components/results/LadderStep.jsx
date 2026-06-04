"use client";

import { motion } from "framer-motion";

export default function LadderStep({ step, index, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 + index * 0.15, duration: 0.4, ease: "easeOut" }}
      className="relative flex gap-4"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div
          className="size-10 rounded-xl flex items-center justify-center text-xl font-bold shrink-0 border"
          style={{
            background: `${color}15`,
            borderColor: `${color}40`,
            boxShadow: `0 0 12px ${color}20`,
          }}
        >
          {step.icon}
        </div>
        {index < 2 && (
          <div
            className="w-0.5 flex-1 min-h-[2rem] mt-1"
            style={{ background: `linear-gradient(to bottom, ${color}40, transparent)` }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-6 flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-[0.65rem] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
            style={{ color, background: `${color}15` }}
          >
            {step.label}
          </span>
        </div>
        <h4 className="text-base font-bold text-white mb-2">{step.phase}</h4>
        <ul className="flex flex-col gap-1.5">
          {step.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/65">
              <span style={{ color }} className="mt-0.5 shrink-0 text-xs">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
