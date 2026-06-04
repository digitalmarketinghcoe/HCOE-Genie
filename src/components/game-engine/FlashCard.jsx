"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/components/ui/Card";

const DRAG_THRESHOLD = 80;

export default function FlashCard({ option, onSelect, index }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const cardOpacity = useTransform(x, [-250, -80, 0, 80, 250], [0, 1, 1, 1, 0]);
  const lockOpacity = useTransform(x, [20, DRAG_THRESHOLD], [0, 1]);
  const skipOpacity = useTransform(x, [-DRAG_THRESHOLD, -20], [1, 0]);
  const lockScale = useTransform(x, [20, DRAG_THRESHOLD], [0.85, 1]);
  const cardScale = useTransform(x, [-100, 0, 100], [0.97, 1, 0.97]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > DRAG_THRESHOLD) {
      onSelect(option);
    }
  }

  return (
    <div className="relative w-full select-none">
      {/* Lock-in badge */}
      <motion.div
        className="absolute left-3 top-3 z-10 pointer-events-none"
        style={{ opacity: lockOpacity, scale: lockScale }}
      >
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-[#00F2FE] bg-[#00F2FE]/10 text-[#00F2FE] font-extrabold text-xs -rotate-12">
          LOCK IN ✓
        </div>
      </motion.div>

      {/* Skip badge */}
      <motion.div
        className="absolute right-3 top-3 z-10 pointer-events-none"
        style={{ opacity: skipOpacity }}
      >
        <div className="flex items-center gap-1 px-3 py-1 rounded-full border-2 border-white/20 text-white/30 font-extrabold text-xs rotate-12">
          SKIP ✗
        </div>
      </motion.div>

      <motion.div
        drag="x"
        dragConstraints={{ left: -320, right: 320 }}
        dragElastic={0.12}
        style={{ x, rotate, opacity: cardOpacity, scale: cardScale }}
        onDragEnd={handleDragEnd}
        whileDrag={{ cursor: "grabbing" }}
        onClick={() => onSelect(option)}
        initial={{ opacity: 0, y: 16, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: index * 0.07,
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "relative cursor-pointer rounded-2xl p-5",
          "border border-white/8 bg-white/[0.03]",
          "hover:border-white/20 hover:bg-white/[0.06]",
          "active:scale-[0.99] transition-colors duration-150 group"
        )}
      >
        <div className="flex items-start gap-4">
          {/* Accent indicator */}
          <div className="mt-1.5 size-2 shrink-0 rounded-full bg-white/15 group-hover:bg-[#00F2FE] transition-all duration-200 group-hover:shadow-[0_0_8px_rgba(0,242,254,0.7)]" />

          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-[0.95rem] leading-relaxed text-white/80 group-hover:text-white transition-colors">
              {option.text}
            </p>
            {option.tag && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.07 + 0.2 }}
                className="inline-flex items-center gap-1 mt-2 text-[0.68rem] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/5 text-white/35"
              >
                {option.tag}
              </motion.span>
            )}
          </div>
        </div>

        {/* Hover glow border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ boxShadow: "inset 0 0 0 1.5px rgba(0,242,254,0.15)" }}
        />
      </motion.div>
    </div>
  );
}
