"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Share2, Copy, Download, Users } from "lucide-react";

function buildShareText(program, pct, archetype) {
  return [
    `✨ My HCOE Career Genie Result:`,
    ``,
    `🎯 ${program?.name ?? "Unknown"} (${pct}% compatibility)`,
    `🧬 ${archetype?.name ?? "Career Archetype"}`,
    ``,
    `"${program?.tagline ?? ""}"`,
    ``,
    `Find yours 👇`,
    `hcoe.edu.np | #HCOECareerGenie #HCOE`,
  ].join("\n");
}

function buildChallengeText(program) {
  return [
    `🧞 I just got ${program?.shortTag ?? "my result"} on HCOE Career Genie.`,
    ``,
    `Bet you can't guess yours. Take the challenge 👇`,
    `hcoe.edu.np/genie | #HCOECareerGenie`,
  ].join("\n");
}

export default function ShareCard({ program, compatibilityPct, archetype, restart }) {
  const [copied, setCopied] = useState(false);
  const [challengeCopied, setChallengeCopied] = useState(false);

  async function handleShare() {
    const text = buildShareText(program, compatibilityPct, archetype);
    if (navigator.share) {
      try {
        await navigator.share({ title: "HCOE Career Genie", text });
      } catch {}
    } else {
      await copyToClipboard(text, setCopied);
    }
  }

  async function handleChallenge() {
    await copyToClipboard(buildChallengeText(program), setChallengeCopied);
  }

  async function copyToClipboard(text, setFn) {
    try {
      await navigator.clipboard.writeText(text);
      setFn(true);
      setTimeout(() => setFn(false), 2000);
    } catch {}
  }

  if (!program) return null;

  return (
    <div className="flex flex-col gap-3">
      {/* Visual share card preview */}
      <div
        className="relative rounded-2xl p-5 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${program.gradientFrom} 0%, ${program.gradientTo}70 100%)`,
          border: `1px solid ${program.color}40`,
        }}
      >
        {/* BG glow */}
        <div
          className="absolute -bottom-8 -right-8 size-32 rounded-full blur-2xl opacity-20 pointer-events-none"
          style={{ background: program.color }}
        />

        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-white/40 uppercase">
              HCOE Career Genie
            </span>
            <span className="text-white/30 text-lg">🧞</span>
          </div>

          <div>
            <div className="text-3xl mb-1">{program.emoji}</div>
            <div
              className="text-[0.65rem] font-extrabold tracking-[0.2em] uppercase mb-0.5"
              style={{ color: program.color }}
            >
              {program.shortTag} · {compatibilityPct}% Compatible
            </div>
            <h3 className="text-lg font-extrabold text-white leading-tight">
              {program.name}
            </h3>
            <p className="text-xs text-white/55 mt-1">{program.tagline}</p>
          </div>

          {archetype && (
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <span className="text-xs">🧬</span>
              <span className="text-xs text-white/50 font-medium">{archetype.name}</span>
            </div>
          )}

          <div className="text-[0.6rem] text-white/25">hcoe.edu.np · #HCOECareerGenie</div>
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
          {copied ? (
            <>✓ Copied!</>
          ) : (
            <>
              <Share2 size={15} />
              Share Result
            </>
          )}
        </motion.button>

        <motion.button
          onClick={handleChallenge}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all"
        >
          {challengeCopied ? (
            <>✓ Copied!</>
          ) : (
            <>
              <Users size={15} />
              Challenge a Friend
            </>
          )}
        </motion.button>
      </div>

      <p className="text-center text-[0.65rem] text-white/20">
        Tap "Challenge a Friend" to copy a personalized dare for your crew
      </p>
    </div>
  );
}
