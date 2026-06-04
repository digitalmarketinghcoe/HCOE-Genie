"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ progress, current, total }) {
  const dots = Array.from({ length: total }, (_, i) => i < current);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {dots.map((filled, i) => (
            <motion.div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: filled ? "18px" : "6px",
                height: "6px",
                background: filled
                  ? "linear-gradient(90deg, #00F2FE, #9B5DE5)"
                  : "rgba(255,255,255,0.1)",
              }}
              animate={{
                width: filled ? "18px" : "6px",
                opacity: i === current - 1 ? [0.5, 1, 0.5] : filled ? 1 : 0.3,
              }}
              transition={{
                duration: filled && i === current - 1 ? 1 : 0.3,
                repeat: i === current - 1 ? Infinity : 0,
              }}
            />
          ))}
        </div>
        <span className="text-[0.7rem] font-mono text-white/35">
          {current}/{total}
        </span>
      </div>
    </div>
  );
}
