"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, Building2, Users, BookOpen, TrendingUp, ChevronRight } from "lucide-react";
import RoadmapTimeline from "./RoadmapTimeline";

// ── Reusable section wrapper ──────────────────────────────
function Section({ title, icon, children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center gap-2">
        <span className="text-white/40">{icon}</span>
        <h2 className="text-sm font-bold tracking-widest text-white/40 uppercase">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

// ── Trait pill ────────────────────────────────────────────
function TraitPill({ label, color }) {
  return (
    <span
      className="text-xs font-semibold px-3 py-1 rounded-full border"
      style={{ color, background: `${color}12`, borderColor: `${color}30` }}
    >
      {label}
    </span>
  );
}

// ── Career outcome row ────────────────────────────────────
function OutcomeRow({ outcome, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index }}
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-4 rounded-xl bg-white/[0.03] border border-white/6 hover:border-white/12 transition-colors"
    >
      <div>
        <div className="text-sm font-semibold text-white">{outcome.role}</div>
        <div className="text-xs text-white/40 mt-0.5">{outcome.company}</div>
      </div>
    </motion.div>
  );
}

// ── Campus item card ──────────────────────────────────────
function CampusCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index }}
      className="p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
    >
      <div className="text-sm font-semibold text-white mb-1">{item}</div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────
export default function ProgramPage({ program }) {
  if (!program) return null;

  return (
    <div className="min-h-dvh bg-cosmic">
      <div className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-12">

        {/* Back navigation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Career Quiz
          </Link>
        </motion.div>

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden p-7 border"
          style={{
            background: `linear-gradient(135deg, ${program.gradientFrom} 0%, ${program.gradientTo}70 100%)`,
            borderColor: `${program.color}40`,
            boxShadow: `0 0 60px ${program.color}15`,
          }}
        >
          {/* Glow orb */}
          <div
            className="absolute -top-16 -right-16 size-48 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: program.color }}
          />

          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="text-5xl">{program.emoji}</div>
              <div
                className="text-xs font-extrabold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                style={{ color: program.color, background: `${program.color}20` }}
              >
                {program.shortTag}
              </div>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                {program.name}
              </h1>
              <p className="text-base text-white/55 mt-1 font-medium italic">
                {program.degree}
              </p>
            </div>

            <p className="text-lg font-semibold text-white/80">
              &ldquo;{program.tagline}&rdquo;
            </p>

            <p className="text-sm text-white/65 leading-relaxed">
              {program.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {program.traits?.map((t) => (
                <TraitPill key={t} label={t} color={program.color} />
              ))}
            </div>

            <div className="pt-2 border-t border-white/10">
              <div className="text-xs text-white/40 mb-1 font-medium">Your Career Archetype</div>
              <div className="flex items-start gap-2">
                <span>🧬</span>
                <div>
                  <div className="text-sm font-bold text-white">{program.archetype}</div>
                  <div className="text-xs text-white/45 mt-0.5">{program.archetypeDesc}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Roadmap ── */}
        <Section title="Academic & Career Roadmap" icon={<TrendingUp size={16} />} delay={0.1}>
          <div
            className="rounded-2xl p-6 border"
            style={{
              background: `linear-gradient(135deg, ${program.gradientFrom}30 0%, transparent 80%)`,
              borderColor: `${program.color}20`,
            }}
          >
            <RoadmapTimeline program={program} />
          </div>
        </Section>

        {/* ── Campus Life ── */}
        {program.campusLife && (
          <Section title="Life at HCOE" icon={<Building2 size={16} />} delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Clubs */}
              <div>
                <h3 className="text-xs font-bold text-white/35 uppercase tracking-widest mb-3">
                  Student Clubs
                </h3>
                <div className="flex flex-col gap-2">
                  {program.campusLife.clubs?.map((c, i) => (
                    <CampusCard key={c} item={c} index={i} />
                  ))}
                </div>
              </div>
              {/* Labs */}
              <div>
                <h3 className="text-xs font-bold text-white/35 uppercase tracking-widest mb-3">
                  Labs & Facilities
                </h3>
                <div className="flex flex-col gap-2">
                  {program.campusLife.labs?.map((l, i) => (
                    <CampusCard key={l} item={l} index={i} />
                  ))}
                </div>
              </div>
            </div>
            {/* Sample projects */}
            {program.campusLife.projects?.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xs font-bold text-white/35 uppercase tracking-widest mb-3">
                  Sample Student Projects
                </h3>
                <div className="flex flex-col gap-2">
                  {program.campusLife.projects.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/6"
                    >
                      <span
                        className="size-1.5 rounded-full shrink-0"
                        style={{ background: program.color }}
                      />
                      <span className="text-sm text-white/65">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Section>
        )}

        {/* ── Career Outcomes ── */}
        {program.careerOutcomes?.length > 0 && (
          <Section title="Industry Career Paths" icon={<Briefcase size={16} />} delay={0.3}>
            <div className="flex flex-col gap-2">
              {program.careerOutcomes.map((o, i) => (
                <OutcomeRow key={o.role} outcome={o} index={i} />
              ))}
            </div>
          </Section>
        )}

        {/* ── Alternate Timeline ── */}
        {program.alternateTimeline && (
          <Section title="Alternate Path" icon={<Users size={16} />} delay={0.35}>
            <div className="flex items-start gap-3 p-4 rounded-xl border border-white/8 bg-white/[0.02]">
              <span className="text-lg shrink-0">🔀</span>
              <p className="text-sm text-white/55 leading-relaxed">
                {program.alternateTimeline.reason}
              </p>
            </div>
          </Section>
        )}

        {/* ── Quiz CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl p-6 border border-white/8 bg-white/[0.02] flex flex-col sm:flex-row items-center gap-4 justify-between"
        >
          <div>
            <div className="text-sm font-bold text-white mb-1">
              Not sure this is the right fit?
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Take the personality quiz and discover which HCOE program actually matches your strengths.
            </p>
          </div>
          <Link
            href="/"
            className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-[#0d1117] whitespace-nowrap"
            style={{ background: `linear-gradient(135deg, #00F2FE, #9B5DE5)` }}
          >
            Take the Quiz
            <ChevronRight size={15} />
          </Link>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-xs text-white/90 text-center pb-6">
          ⚠️ Career outcomes are indicative. Actual results depend on individual effort,
          market conditions, and continual skill development.
        </p>

      </div>
    </div>
  );
}
