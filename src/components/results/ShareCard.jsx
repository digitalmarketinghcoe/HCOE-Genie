"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Users } from "lucide-react";

function buildShareText(program, pct, archetype) {
  return [
    `✨ My HCOE Career Predictor Result:`,
    ``,
    `🎯 ${program?.name ?? ""} — ${pct}% compatible`,
    `🧬 ${archetype?.name ?? ""}`,
    ``,
    `"${program?.tagline ?? ""}"`,
    ``,
    `Find yours 👇 hcoe.edu.np`,
    `#HCOECareerPredictor #HCOE`,
  ].join("\n");
}

function buildChallengeText(program) {
  return [
    `🧞 I just got ${program?.shortTag ?? "my result"} on the HCOE Career Predictor.`,
    ``,
    `Bet you can't guess yours — take the challenge:`,
    `hcoe.edu.np #HCOECareerPredictor`,
  ].join("\n");
}

export default function ShareCard({ program, compatibilityPct, archetype }) {
  const [copied, setCopied]          = useState(false);
  const [challengeCopied, setChallCopied] = useState(false);

  async function copy(text, setFn) {
    try {
      await navigator.clipboard.writeText(text);
      setFn(true);
      setTimeout(() => setFn(false), 2000);
    } catch {}
  }

  async function handleShare() {
    const text = buildShareText(program, compatibilityPct, archetype);
    if (navigator.share) {
      try { await navigator.share({ title: "HCOE Career Predictor", text }); } catch {}
    } else {
      await copy(text, setCopied);
    }
  }

  if (!program) return null;

  return (
    <div className="flex flex-col gap-3">
      {/* Visual card preview */}
      <div
        className="relative rounded-2xl p-5 overflow-hidden border"
        style={{
          background: `linear-gradient(135deg, ${program.gradientFrom} 0%, ${program.gradientTo}70 100%)`,
          borderColor: `${program.color}40`,
        }}
      >
        <div className="absolute -bottom-8 -right-8 size-32 rounded-full blur-2xl opacity-20 pointer-events-none" style={{ background: program.color }} />
        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-white/40 uppercase">HCOE Career Predictor</span>
            <span className="text-white/30 text-lg">🧞</span>
          </div>
          <div>
            <div className="text-3xl mb-1">{program.emoji}</div>
            <div className="text-[0.65rem] font-extrabold tracking-[0.2em] uppercase mb-0.5" style={{ color: program.color }}>
              {program.shortTag} · {compatibilityPct}% Compatible
            </div>
            <h3 className="text-lg font-extrabold text-white">{program.name}</h3>
            <p className="text-xs text-white/55 mt-1">{program.tagline}</p>
          </div>
          {archetype && (
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <span className="text-xs">🧬</span>
              <span className="text-xs text-white/50 font-medium">{archetype.name}</span>
            </div>
          )}
          <div className="text-[0.6rem] text-white/25">hcoe.edu.np · #HCOECareerPredictor</div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-2">
        <motion.button
          onClick={handleShare}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-[#0d1117] transition-all"
          style={{ background: program.color }}
        >
          {copied ? <>✓ Copied!</> : <><Share2 size={15} /> Share Result</>}
        </motion.button>
        <motion.button
          onClick={() => copy(buildChallengeText(program), setChallCopied)}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all"
        >
          {challengeCopied ? <>✓ Copied!</> : <><Users size={15} /> Challenge Friends</>}
        </motion.button>
      </div>
      <p className="text-center text-[0.65rem] text-white/20">
        &ldquo;Challenge Friends&rdquo; copies a personalised dare to send your crew
      </p>
    </div>
  );
}
