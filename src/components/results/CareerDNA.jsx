"use client";

import { motion } from "framer-motion";
import { DNA_META } from "@/lib/scoreEngine";

function DNABar({ dimension, value, index }) {
  const meta = DNA_META[dimension];
  if (!meta) return null;
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + index * 0.06, duration: 0.35 }}
      className="flex items-center gap-3"
    >
      <span className="text-base w-5 text-center">{meta.emoji}</span>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[0.72rem] font-semibold text-white/60">{meta.label}</span>
          <span className="text-[0.72rem] font-bold font-mono" style={{ color: meta.color }}>{value}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: meta.color, boxShadow: `0 0 6px ${meta.color}60` }}
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ delay: 0.4 + index * 0.06, duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function CareerDNA({ dnaPercentages, archetype }) {
  if (!dnaPercentages) return null;
  const sorted = Object.entries(dnaPercentages).sort(([, a], [, b]) => b - a);
  return (
    <div className="flex flex-col gap-4">
      {archetype && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10"
        >
          <span className="text-2xl shrink-0">🧬</span>
          <div>
            <div className="text-[0.65rem] font-bold tracking-widest text-white/35 uppercase mb-0.5">Career DNA Archetype</div>
            <h4 className="text-base font-extrabold text-white">{archetype.name}</h4>
            <p className="text-xs text-white/50 mt-0.5">{archetype.desc}</p>
          </div>
        </motion.div>
      )}
      <div className="flex flex-col gap-3">
        {sorted.map(([dim, value], i) => (
          <DNABar key={dim} dimension={dim} value={value} index={i} />
        ))}
      </div>
    </div>
  );
}
