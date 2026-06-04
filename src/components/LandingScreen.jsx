"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Sparkles, ChevronRight, Zap, Brain, TrendingUp, Users, FlaskConical, Building2 } from "lucide-react";
import { useGraphify } from "@/context/GraphifyContext";
import { CAMPUS_HIGHLIGHTS } from "@/data/programs";

const PROGRAM_PILLS = [
  { label: "BCT", color: "#00F2FE", emoji: "⚡" },
  { label: "BSC.CSIT", color: "#9B5DE5", emoji: "🚀" },
  { label: "BCA", color: "#F15BB5", emoji: "📱" },
  { label: "BEI", color: "#FEE440", emoji: "📡" },
  { label: "BCE", color: "#06D6A0", emoji: "🏗️" },
  { label: "B.ARCH", color: "#FF6B6B", emoji: "🏛️" },
];

const FEATURES = [
  {
    icon: <Brain size={20} />,
    color: "#9B5DE5",
    title: "Akinator-Style Engine",
    desc: "10 questions designed by career specialists. No bias, no funneling.",
  },
  {
    icon: <Zap size={20} />,
    color: "#00F2FE",
    title: "Graphify Score Matrix",
    desc: "Real-time compatibility percentages across all 6 programs as you answer.",
  },
  {
    icon: <TrendingUp size={20} />,
    color: "#06D6A0",
    title: "Viral Career Ladder",
    desc: "Your full roadmap: Year 1 clubs → Mid-degree projects → Industry legacy.",
  },
];

function StatCard({ value, label, emoji }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xl font-extrabold text-white">{value}</span>
      <span className="text-[0.65rem] text-white/40 tracking-wider uppercase">{label}</span>
    </div>
  );
}

function CampusTab({ highlight }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {highlight.items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="group p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all cursor-default"
        >
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h4 className="text-sm font-semibold text-white leading-snug">{item.name}</h4>
            <span className="shrink-0 text-[0.6rem] font-bold px-1.5 py-0.5 rounded-full bg-white/5 text-white/30">
              {item.prog}
            </span>
          </div>
          <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function LandingScreen() {
  const { startGame } = useGraphify();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 pb-16 flex flex-col items-center gap-10">
      {/* Hero */}
      <div className="text-center flex flex-col items-center gap-5 pt-10">
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="text-[5rem] float-anim lamp-glow select-none leading-none">🧞‍♂️</div>
          <motion.div
            className="absolute -top-2 -right-2 text-2xl"
            animate={{ rotate: [0, 15, -10, 15, 0], scale: [1, 1.2, 1] }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            ✨
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan/30 bg-cyan/5 text-[#00F2FE] text-[0.7rem] font-bold tracking-[0.15em] uppercase"
        >
          <Sparkles size={10} />
          Himalaya College of Engineering × Graphify
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-[2.8rem] sm:text-[3.5rem] font-extrabold text-white leading-[1.05] tracking-tight">
            HCOE{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00F2FE 0%, #9B5DE5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Career
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #F15BB5 0%, #FEE440 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Genie
            </span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/55 max-w-md mx-auto leading-relaxed">
            10 questions. Real compatibility scores. Your exact HCOE program match —{" "}
            <span className="text-white/80 font-semibold">and the career roadmap to prove it.</span>
          </p>
        </motion.div>

        {/* Program pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {PROGRAM_PILLS.map((p, i) => (
            <motion.span
              key={p.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 + i * 0.04 }}
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border"
              style={{
                color: p.color,
                background: `${p.color}10`,
                borderColor: `${p.color}30`,
              }}
            >
              <span>{p.emoji}</span>
              {p.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-8 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/8"
        >
          <StatCard value="10" label="Questions" />
          <div className="w-px h-6 bg-white/10" />
          <StatCard value="6" label="Programs" />
          <div className="w-px h-6 bg-white/10" />
          <StatCard value="~3 min" label="Duration" />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.button
            onClick={startGame}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="relative flex items-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-base text-[#0d1117] overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #00F2FE 0%, #9B5DE5 100%)",
              boxShadow: "0 0 30px rgba(0,242,254,0.3), 0 0 60px rgba(155,93,229,0.2)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <span className="text-xl">✨</span>
              Summon My Destiny
              <ChevronRight size={18} />
            </span>
            <motion.div
              className="absolute inset-0 bg-white/25"
              initial={{ x: "-100%", skewX: "-15deg" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            />
          </motion.button>
          <p className="text-xs text-white/25">Free · No signup · Saves progress automatically</p>
        </motion.div>
      </div>

      {/* Feature strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3"
      >
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 + i * 0.07 }}
            className="rounded-2xl p-4 bg-white/[0.03] border border-white/8 flex flex-col gap-2.5 hover:border-white/15 transition-colors"
          >
            <span style={{ color: f.color }}>{f.icon}</span>
            <h3 className="text-sm font-bold text-white">{f.title}</h3>
            <p className="text-xs text-white/45 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Campus Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="w-full"
      >
        <div className="flex items-center gap-2 mb-4">
          <Building2 size={16} className="text-white/40" />
          <h2 className="text-sm font-bold tracking-widest text-white/40 uppercase">
            Life at HCOE
          </h2>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 mb-4 p-1 rounded-xl bg-white/[0.03] border border-white/8">
          {CAMPUS_HIGHLIGHTS.map((h, i) => (
            <button
              key={h.category}
              onClick={() => setActiveTab(i)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all"
              style={
                activeTab === i
                  ? { background: "rgba(255,255,255,0.08)", color: "white" }
                  : { color: "rgba(255,255,255,0.35)" }
              }
            >
              <span>{h.emoji}</span>
              <span className="hidden sm:inline">{h.category}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <CampusTab highlight={CAMPUS_HIGHLIGHTS[activeTab]} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Social proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="w-full rounded-2xl border border-white/8 bg-white/[0.02] p-5 flex flex-col gap-3"
      >
        <div className="flex items-center gap-2">
          <Users size={15} className="text-white/30" />
          <span className="text-xs font-bold tracking-widest text-white/30 uppercase">Student Voices</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { quote: "I was choosing between BCT and BEI for months. Genie got it right in 3 minutes.", name: "Rajan S.", prog: "BEI '27", color: "#FEE440" },
            { quote: "Thought I was a CSIT person. Turns out my builder instinct screamed BCA. Genie didn't lie.", name: "Priya M.", prog: "BCA '26", color: "#F15BB5" },
          ].map((t) => (
            <div key={t.name} className="flex flex-col gap-2 p-3 rounded-xl bg-white/[0.03]">
              <p className="text-xs text-white/60 leading-relaxed italic">"{t.quote}"</p>
              <div className="flex items-center gap-2">
                <div
                  className="size-5 rounded-full flex items-center justify-center text-[0.6rem] font-bold"
                  style={{ background: `${t.color}25`, color: t.color }}
                >
                  {t.name[0]}
                </div>
                <span className="text-xs font-semibold text-white/50">{t.name}</span>
                <span className="text-[0.65rem] text-white/25">{t.prog}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-xs text-white/20 text-center"
      >
        🏔️ Himalaya College of Engineering · Lalitpur, Nepal · Affiliated to IOE, Tribhuvan University
      </motion.p>
    </div>
  );
}
