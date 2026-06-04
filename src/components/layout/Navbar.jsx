"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuiz } from "@/context/QuizContext";

const PROGRAMS_NAV = [
  { label: "Computer Engineering",          short: "BCT",      href: "/programs/bct",    emoji: "⚡", color: "#00F2FE" },
  { label: "Computer Science & IT",          short: "BSC.CSIT", href: "/programs/csit",   emoji: "🚀", color: "#9B5DE5" },
  { label: "Computer Applications",         short: "BCA",      href: "/programs/bca",    emoji: "📱", color: "#F15BB5" },
  { label: "Electronics & Communication",   short: "BEI",      href: "/programs/bei",    emoji: "📡", color: "#FEE440" },
  { label: "Civil Engineering",             short: "BCE",      href: "/programs/bce",    emoji: "🏗️", color: "#06D6A0" },
  { label: "Architecture",                  short: "B.ARCH",   href: "/programs/b-arch", emoji: "🏛️", color: "#FF6B6B" },
];

export default function Navbar() {
  const pathname  = usePathname();
  const router = useRouter();
  const { startGame } = useQuiz();
  const [dropOpen, setDropOpen]   = useState(false);
  const [mobileOpen, setMobile]   = useState(false);

  const handleFindProgram = (e) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/");
    }
    startGame();
    if (mobileOpen) setMobile(false);
  };

  const isHome     = pathname === "/";
  const isPrograms = pathname?.startsWith("/programs");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/6 bg-[#0d1117]/90 backdrop-blur-2xl">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative size-12 overflow-hidden rounded-full ring-1 ring-white/10 group-hover:ring-white/25 transition-all">
            <Image
              src="/assets/Himalaya_Logo.png"
              alt="HCOE Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex items-center">
            <div className="leading-tight">
              <div className="text-[1.2rem] font-black text-white tracking-tight leading-none">
                Himalaya College
              </div>
              <div className="text-[1rem] text-white tracking-wide font-medium">
                of Engineering
              </div>
            </div>
            <div className="hidden sm:block border-l border-white ml-3.5 pl-3.5 text-[0.7rem] text-white leading-tight max-w-[160px]">
              Accredited by University Grants Commission (UGC), Nepal, 2026
            </div>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
              isHome
                ? "bg-white/8 text-white"
                : "text-white/55 hover:text-white hover:bg-white/5"
            }`}
          >
            Career Quiz
          </Link>

          {/* Programs dropdown */}
          <div className="relative" onMouseLeave={() => setDropOpen(false)}>
            <button
              onMouseEnter={() => setDropOpen(true)}
              onClick={() => setDropOpen((v) => !v)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                isPrograms
                  ? "bg-white/8 text-white"
                  : "text-white/55 hover:text-white hover:bg-white/5"
              }`}
            >
              Programs
              <motion.span
                animate={{ rotate: dropOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={14} />
              </motion.span>
            </button>

            <AnimatePresence>
              {dropOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-72 rounded-2xl border border-white/10 bg-[#161b22]/95 backdrop-blur-xl overflow-hidden shadow-2xl"
                >
                  {PROGRAMS_NAV.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setDropOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.05] transition-colors group"
                    >
                      <span className="text-lg shrink-0">{p.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors truncate">
                          {p.label}
                        </div>
                      </div>
                      <span
                        className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full shrink-0"
                        style={{ color: p.color, background: `${p.color}18` }}
                      >
                        {p.short}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Right: CTA + mobile hamburger ── */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleFindProgram}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-[#0d1117] transition-all hover:opacity-90 active:scale-95"
            style={{ background: "linear-gradient(135deg, #00F2FE, #9B5DE5)" }}
          >
            <GraduationCap size={15} />
            Find My Program
          </button>

          <button
            className="md:hidden p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/8 transition-all"
            onClick={() => setMobile((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/6 overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMobile(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-white/70 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                Career Quiz
              </Link>
              <div className="text-[0.65rem] font-bold tracking-widest text-white/25 uppercase px-4 py-2">
                Programs
              </div>
              {PROGRAMS_NAV.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setMobile(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-white/[0.05] transition-all"
                >
                  <span>{p.emoji}</span>
                  <span className="text-sm text-white/70 font-medium">{p.label}</span>
                  <span
                    className="ml-auto text-[0.65rem] font-bold px-2 py-0.5 rounded-full"
                    style={{ color: p.color, background: `${p.color}18` }}
                  >
                    {p.short}
                  </span>
                </Link>
              ))}
              <button
                onClick={handleFindProgram}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-[#0d1117]"
                style={{ background: "linear-gradient(135deg, #00F2FE, #9B5DE5)" }}
              >
                <GraduationCap size={15} />
                Find My Program
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
