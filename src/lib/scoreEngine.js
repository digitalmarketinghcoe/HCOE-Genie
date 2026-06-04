"use client";

import { QUESTIONS, MAX_SCORES } from "@/data/questions";

export const PROGRAM_NODES = ["BCT", "CSIT", "BCA", "BEI", "BCE", "BARCH"];

export const DNA_DIMENSIONS = [
  "codeLogic",
  "hardwareSignal",
  "creativeVision",
  "buildShip",
  "realWorld",
  "systemsThink",
  "spatialMind",
  "peopleProduct",
];

const STORAGE_KEY = "hcoe_career_quiz_v3";

export function createEmptyGraph() {
  return Object.fromEntries(PROGRAM_NODES.map((n) => [n, 0]));
}

export function applyWeights(graph, weights) {
  const next = { ...graph };
  for (const [node, delta] of Object.entries(weights)) {
    if (next[node] !== undefined) next[node] = (next[node] || 0) + delta;
  }
  return next;
}

// True compatibility % = accumulated / max-possible × 100
export function getCompatibilityScores(graph) {
  const scores = {};
  for (const node of PROGRAM_NODES) {
    const raw = graph[node] || 0;
    const max = MAX_SCORES[node] || 1;
    scores[node] = Math.min(100, Math.round((raw / max) * 100));
  }
  return scores;
}

export function getRankedResults(graph) {
  const compat = getCompatibilityScores(graph);
  return [...PROGRAM_NODES]
    .sort((a, b) => compat[b] - compat[a])
    .map((node) => ({ node, score: graph[node], pct: compat[node] }));
}

export function getTopResult(graph) {
  return getRankedResults(graph)[0]?.node ?? "CSIT";
}

// Derive DNA percentages from program compatibility scores (no per-question tracking needed)
export function getDNAFromScores(compatScores) {
  const c = compatScores;
  return {
    codeLogic:      Math.round(c.BCT * 0.55 + c.CSIT * 0.45),
    hardwareSignal: Math.round(c.BEI * 0.65 + c.BCT * 0.35),
    creativeVision: Math.round(c.BARCH * 0.60 + c.BCA * 0.40),
    buildShip:      Math.round(c.BCA * 0.60 + c.CSIT * 0.40),
    realWorld:      Math.round(c.BCE * 0.55 + c.BARCH * 0.45),
    systemsThink:   Math.round(c.BCT * 0.40 + c.BEI * 0.35 + c.CSIT * 0.25),
    spatialMind:    Math.round(c.BCE * 0.50 + c.BARCH * 0.50),
    peopleProduct:  Math.round(c.BCA * 0.60 + c.BARCH * 0.40),
  };
}

export function getArchetypeFromDNA(dna) {
  const dominant = DNA_DIMENSIONS.reduce((top, d) =>
    dna[d] > dna[top] ? d : top
  );
  const archetypes = {
    codeLogic:      { name: "The Algorithm Brain",      desc: "You see patterns and structure where others see chaos." },
    hardwareSignal: { name: "The Signal Wizard",         desc: "You understand the physical world at a signal level." },
    creativeVision: { name: "The Aesthetic Visionary",   desc: "You design experiences that make people feel something." },
    buildShip:      { name: "The Relentless Builder",    desc: "You'd rather ship something imperfect than wait forever." },
    realWorld:      { name: "The Impact Engineer",       desc: "If it doesn't change lives, it doesn't interest you." },
    systemsThink:   { name: "The Systems Architect",     desc: "You see the whole picture before the first move." },
    spatialMind:    { name: "The Spatial Thinker",       desc: "Three dimensions are your native language." },
    peopleProduct:  { name: "The Product Whisperer",     desc: "You feel what users need before they can say it." },
  };
  return archetypes[dominant] || archetypes.systemsThink;
}

// Radar data for SVG chart
export function getRadarData(graph) {
  const compat = getCompatibilityScores(graph);
  const COLORS = {
    BCT: "#00F2FE", CSIT: "#9B5DE5", BCA: "#F15BB5",
    BEI: "#FEE440", BCE: "#06D6A0", BARCH: "#FF6B6B",
  };
  return PROGRAM_NODES.map((node) => ({
    node, value: compat[node], color: COLORS[node],
  }));
}

export const DNA_META = {
  codeLogic:      { label: "Code Logic",          color: "#00F2FE", emoji: "💻" },
  hardwareSignal: { label: "Hardware & Signals",  color: "#FEE440", emoji: "📡" },
  creativeVision: { label: "Creative Vision",     color: "#FF6B6B", emoji: "🎨" },
  buildShip:      { label: "Build & Ship",        color: "#F15BB5", emoji: "🚀" },
  realWorld:      { label: "Real-World Impact",   color: "#06D6A0", emoji: "🌍" },
  systemsThink:   { label: "Systems Thinking",    color: "#9B5DE5", emoji: "🧠" },
  spatialMind:    { label: "Spatial Intelligence",color: "#FF9F1C", emoji: "📐" },
  peopleProduct:  { label: "People & Product",    color: "#E040FB", emoji: "💡" },
};

export function saveToStorage(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, _v: 3 }));
  } catch {}
}

export function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed._v === 3 ? parsed : null;
  } catch { return null; }
}

export function clearStorage() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}
