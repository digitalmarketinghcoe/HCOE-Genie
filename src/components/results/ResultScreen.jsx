"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { RotateCcw, ChevronDown, Trophy, Zap, GitBranch, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useQuiz } from "@/context/QuizContext";
import { PROGRAMS } from "@/data/programs";
import CareerLadder from "./CareerLadder";
import RadarChart from "./RadarChart";
import CareerDNA from "./CareerDNA";
import ShareCard from "./ShareCard";

const SUMMON_FRAMES = ["🌟", "💫", "✨", "🔮", "🌀", "⚡", "🧞"];

const NODE_COLORS = {
  BCT: "#00F2FE", CSIT: "#9B5DE5", BCA: "#F15BB5",
  BEI: "#FEE440", BCE: "#06D6A0", BARCH: "#FF6B6B",
};

// ── Collapsible section ───────────────────────────────────
function Section({ title, icon, children, defaultOpen = false, accent = "rgba(255,255,255,0.15)" }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/[0.03] transition-colors group"
      >
        <div className="flex items-center gap-2.5">
          <span style={{ color: accent }}>{icon}</span>
          <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">
            {title}
          </span>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white/30"
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Compatibility bar ─────────────────────────────────────
function CompatBar({ node, pct, color, rank }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.05 * rank, duration: 0.3 }}
      className="flex items-center gap-3"
    >
      <span className="w-4 text-[0.65rem] font-mono text-white/30 text-right">{rank}</span>
      <span className="w-14 text-[0.72rem] font-mono text-white/55">{node}</span>
      <div className="flex-1 h-2 rounded-full bg-white/8 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color, boxShadow: `0 0 6px ${color}50` }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ delay: 0.1 + rank * 0.05, duration: 0.6, ease: "easeOut" }}
        />
      </div>
      <span className="w-10 text-xs font-extrabold font-mono text-right" style={{ color }}>
        {pct}%
      </span>
    </motion.div>
  );
}

// ── Career outcomes table ─────────────────────────────────
function CareerOutcomes({ outcomes }) {
  return (
    <div className="flex flex-col gap-2">
      {outcomes.map((o, i) => (
        <motion.div
          key={o.role}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 rounded-xl bg-white/[0.03] border border-white/6"
        >
          <div>
            <div className="text-sm font-semibold text-white">{o.role}</div>
            <div className="text-xs text-white/40">{o.company}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ── Main result screen ────────────────────────────────────
export default function ResultScreen() {
  const {
    topResult, secondResult, rankedResults,
    compatibilityScores, dnaPercentages, archetype,
    radarData, restart,
  } = useQuiz();

  const [genieFrame, setGenieFrame] = useState(0);
  const [summoning, setSummoning]   = useState(true);
  const [revealed, setRevealed]     = useState(false);

  const program       = PROGRAMS[topResult];
  const secondProgram = PROGRAMS[secondResult];
  const topPct        = compatibilityScores[topResult] ?? 0;

  useEffect(() => {
    let count = 0;
    const iv = setInterval(() => {
      count++;
      setGenieFrame((f) => (f + 1) % SUMMON_FRAMES.length);
      if (count >= 10) {
        clearInterval(iv);
        setSummoning(false);
        setTimeout(() => setRevealed(true), 180);
      }
    }, 150);
    return () => clearInterval(iv);
  }, []);

  if (!program) return null;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 flex flex-col gap-5">

      {/* Summoning animation */}
      <div className="flex flex-col items-center gap-3 min-h-[100px] justify-center">
        <motion.div
          className="text-6xl select-none lamp-glow"
          animate={
            summoning
              ? { scale: [1, 1.2, 1], rotate: [-8, 8, -8] }
              : { scale: 1.15, rotate: 0 }
          }
          transition={
            summoning
              ? { duration: 0.28, repeat: Infinity }
              : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }
        >
          {SUMMON_FRAMES[genieFrame]}
        </motion.div>
        <AnimatePresence>
          {summoning && (
            <motion.p exit={{ opacity: 0 }} className="text-xs text-white/35 font-mono tracking-widest animate-pulse">
              Analysing your personality profile…
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Reveal */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {/* ── Hero result card ── */}
            <div
              className="relative rounded-3xl p-6 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${program.gradientFrom} 0%, ${program.gradientTo}80 100%)`,
                border: `1.5px solid ${program.color}50`,
                boxShadow: `0 0 50px ${program.color}20`,
              }}
            >
              <div className="absolute -top-16 -right-16 size-48 rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: program.color }} />
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute size-1 rounded-full pointer-events-none"
                  style={{ background: program.color, top: `${10 + i * 18}%`, right: `${6 + i * 9}%` }}
                  animate={{ y: [0, -12, 0], opacity: [0, 1, 0] }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 1.8, repeat: Infinity }}
                />
              ))}

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Trophy size={13} className="text-white/50" />
                  <span className="text-xs font-bold tracking-widest text-white/50 uppercase">Your Primary Match</span>
                  <div className="ml-auto px-2.5 py-0.5 rounded-full text-xs font-extrabold" style={{ background: `${program.color}25`, color: program.color }}>
                    {topPct}% Match
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-5xl">{program.emoji}</div>
                  <div>
                    <div className="text-[0.65rem] font-extrabold tracking-[0.2em] uppercase mb-1" style={{ color: program.color }}>
                      {program.shortTag}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">{program.name}</h2>
                    <p className="text-sm text-white/55 mt-1 font-medium italic">&ldquo;{program.tagline}&rdquo;</p>
                  </div>
                </div>

                {archetype && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/20 backdrop-blur-sm">
                    <span>🧬</span>
                    <div>
                      <div className="text-[0.6rem] text-white/40 font-bold uppercase tracking-wider">Career DNA Archetype</div>
                      <div className="text-sm font-bold text-white">{archetype.name}</div>
                    </div>
                  </div>
                )}

                <p className="text-sm leading-relaxed text-white/70">{program.description}</p>

                <div className="flex flex-wrap gap-2">
                  {program.traits?.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full font-semibold border"
                      style={{ color: program.color, background: `${program.color}12`, borderColor: `${program.color}30` }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* ── View full program page CTA ── */}
                <Link
                  href={`/programs/${program.slug}`}
                  className="flex items-center justify-center gap-2 mt-1 py-3 rounded-xl font-bold text-sm text-[#0d1117] transition-all hover:opacity-90 active:scale-95"
                  style={{ background: program.color }}
                >
                  View Full {program.shortTag} Roadmap
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* ── Alternate timeline ── */}
            {secondProgram && program.alternateTimeline && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.02]"
              >
                <GitBranch size={15} className="text-white/30 mt-0.5 shrink-0" />
                <div className="text-xs leading-relaxed text-white/50 flex-1">
                  <span className="font-bold text-white/70">Alternate Path: </span>
                  {program.alternateTimeline.reason}{" "}
                  <Link
                    href={`/programs/${secondProgram.slug}`}
                    className="font-bold hover:underline"
                    style={{ color: NODE_COLORS[secondProgram.id] }}
                  >
                    Explore {secondProgram.shortTag} →
                  </Link>
                </div>
              </motion.div>
            )}

            {/* ── Compatibility radar ── */}
            <Section title="Full Compatibility Breakdown" icon={<Zap size={16} />} accent="#00F2FE" defaultOpen>
              <div className="flex flex-col gap-5">
                <RadarChart radarData={radarData} />
                <div className="flex flex-col gap-2.5">
                  {rankedResults.map((r, i) => (
                    <CompatBar key={r.node} node={r.node} pct={r.pct} color={NODE_COLORS[r.node]} rank={i + 1} />
                  ))}
                </div>
              </div>
            </Section>

            {/* ── Career DNA ── */}
            <Section title="Your Career DNA Profile" icon={<span>🧬</span>} accent="#9B5DE5">
              <CareerDNA dnaPercentages={dnaPercentages} archetype={archetype} />
            </Section>

            {/* ── Career Ladder ── */}
            <Section title={`${program.emoji} Career Roadmap`} icon={<span>🏆</span>} accent={program.color}>
              <CareerLadder program={program} />
            </Section>

            {/* ── Outcomes ── */}
            {program.careerOutcomes?.length > 0 && (
              <Section title="Industry Career Paths" icon={<Trophy size={16} />} accent="#06D6A0">
                <CareerOutcomes outcomes={program.careerOutcomes} />
              </Section>
            )}

            {/* ── Share ── */}
            <Section title="Share & Challenge Friends" icon={<span>📤</span>} accent="#F15BB5" defaultOpen>
              <ShareCard program={program} compatibilityPct={topPct} archetype={archetype} restart={restart} />
            </Section>

            {/* ── Explore all programs ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2"
            >
              {Object.values(PROGRAMS).map((p) => (
                <Link
                  key={p.id}
                  href={`/programs/${p.slug}`}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/8 hover:border-white/20 hover:bg-white/[0.04] transition-all text-xs font-semibold text-white/50 hover:text-white"
                >
                  <span>{p.emoji}</span>
                  <span>{p.shortTag}</span>
                </Link>
              ))}
            </motion.div>

            {/* ── Disclaimer ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="rounded-xl border border-yellow/20 bg-yellow/5 p-4"
            >
              <p className="text-xs leading-relaxed text-white/55">
                <span className="font-bold" style={{ color: "#FEE440" }}>⚠️ Note:</span>{" "}
                This prediction is based on your answers to personality questions. Your actual performance,
                interests, and the IOE entrance exam score will determine your final program. Use this as a
                starting point for exploration, not a definitive decision.
              </p>
            </motion.div>

            {/* Retry */}
            <motion.button
              onClick={restart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl border border-white/12 text-white/50 hover:text-white hover:border-white/25 text-sm font-semibold transition-all"
            >
              <RotateCcw size={15} />
              Retake Quiz
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
