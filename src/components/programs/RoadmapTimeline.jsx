"use client";

import { motion } from "framer-motion";

function TimelineStep({ step, index, color, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.4, ease: "easeOut" }}
      className="relative flex gap-5"
    >
      {/* Spine */}
      <div className="flex flex-col items-center shrink-0">
        {/* Node circle */}
        <div
          className="relative z-10 size-11 rounded-2xl flex items-center justify-center text-xl font-bold border shrink-0"
          style={{
            background: `${color}18`,
            borderColor: `${color}45`,
            boxShadow: `0 0 16px ${color}20`,
          }}
        >
          {step.icon}
        </div>
        {/* Connector line */}
        {!isLast && (
          <div
            className="w-0.5 flex-1 mt-1 min-h-[1.5rem]"
            style={{
              background: `linear-gradient(to bottom, ${color}50, ${color}10)`,
            }}
          />
        )}
      </div>

      {/* Content card */}
      <div className={`pb-8 flex-1 min-w-0 ${isLast ? "pb-0" : ""}`}>
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-[0.65rem] font-extrabold tracking-[0.15em] uppercase px-2.5 py-0.5 rounded-full"
            style={{ color, background: `${color}18` }}
          >
            {step.label}
          </span>
        </div>
        <h4 className="text-base font-bold text-white mb-2">{step.phase}</h4>

        <div className="flex flex-col gap-1.5">
          {step.items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-sm text-white/60 leading-relaxed"
            >
              <span
                className="shrink-0 mt-1 text-[0.6rem] font-bold"
                style={{ color }}
              >
                ▸
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function RoadmapTimeline({ program }) {
  if (!program?.careerLadder) return null;

  return (
    <div className="flex flex-col">
      {program.careerLadder.map((step, i) => (
        <TimelineStep
          key={step.phase}
          step={step}
          index={i}
          color={program.color}
          isLast={i === program.careerLadder.length - 1}
        />
      ))}
    </div>
  );
}
