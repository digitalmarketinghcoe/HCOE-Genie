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

const STORAGE_KEY = "hcoe_genie_v2";

export function createEmptyGraph() {
  return Object.fromEntries(PROGRAM_NODES.map((n) => [n, 0]));
}

export function createEmptyDNA() {
  return Object.fromEntries(DNA_DIMENSIONS.map((d) => [d, 0]));
}

export function applyWeights(graph, weights) {
  const next = { ...graph };
  for (const [node, delta] of Object.entries(weights)) {
    if (next[node] !== undefined) next[node] = (next[node] || 0) + delta;
  }
  return next;
}

export function applyDNA(dna, dnaDelta) {
  const next = { ...dna };
  for (const [dim, delta] of Object.entries(dnaDelta || {})) {
    if (next[dim] !== undefined) next[dim] = (next[dim] || 0) + delta;
  }
  return next;
}

// --- Compatibility percentages ---
// Per-question max is the highest weight any single option gives a program.
// True compatibility = accumulated score / max possible score × 100

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
  const ranked = getRankedResults(graph);
  return ranked[0]?.node ?? "CSIT";
}

// --- DNA percentages ---
// Max possible DNA per dimension = sum of highest option value per question per dimension

export function computeMaxDNA() {
  const maxDNA = Object.fromEntries(DNA_DIMENSIONS.map((d) => [d, 0]));
  for (const q of QUESTIONS) {
    const perDim = Object.fromEntries(DNA_DIMENSIONS.map((d) => [d, 0]));
    for (const opt of q.options) {
      for (const [dim, val] of Object.entries(opt.dna || {})) {
        if (val > perDim[dim]) perDim[dim] = val;
      }
    }
    for (const dim of DNA_DIMENSIONS) maxDNA[dim] += perDim[dim];
  }
  return maxDNA;
}

export function getDNAPercentages(dna) {
  const maxDNA = computeMaxDNA();
  const result = {};
  for (const dim of DNA_DIMENSIONS) {
    const raw = dna[dim] || 0;
    const max = maxDNA[dim] || 1;
    result[dim] = Math.min(100, Math.round((raw / max) * 100));
  }
  return result;
}

// DNA dimension display metadata
export const DNA_META = {
  codeLogic:      { label: "Code Logic",         color: "#00F2FE", emoji: "💻" },
  hardwareSignal: { label: "Hardware & Signals",  color: "#FEE440", emoji: "📡" },
  creativeVision: { label: "Creative Vision",     color: "#FF6B6B", emoji: "🎨" },
  buildShip:      { label: "Build & Ship",        color: "#F15BB5", emoji: "🚀" },
  realWorld:      { label: "Real-World Impact",   color: "#06D6A0", emoji: "🌍" },
  systemsThink:   { label: "Systems Thinking",    color: "#9B5DE5", emoji: "🧠" },
  spatialMind:    { label: "Spatial Intelligence",color: "#FF9F1C", emoji: "📐" },
  peopleProduct:  { label: "People & Product",    color: "#E040FB", emoji: "💡" },
};

// --- Radar chart data ---
// Returns [{label, value, color}] for all 6 programs
export function getRadarData(graph) {
  const compat = getCompatibilityScores(graph);
  const COLORS = {
    BCT: "#00F2FE", CSIT: "#9B5DE5", BCA: "#F15BB5",
    BEI: "#FEE440", BCE: "#06D6A0", BARCH: "#FF6B6B",
  };
  return PROGRAM_NODES.map((node) => ({
    node,
    value: compat[node],
    color: COLORS[node],
  }));
}

// --- Personality archetype from DNA ---
export function getArchetypeFromDNA(dna) {
  const pct = getDNAPercentages(dna);
  const dominant = DNA_DIMENSIONS.reduce((top, d) => pct[d] > pct[top] ? d : top);
  const archetypes = {
    codeLogic:      { name: "The Algorithm Brain", desc: "You see patterns where others see chaos." },
    hardwareSignal: { name: "The Signal Wizard", desc: "You hear frequencies others can't." },
    creativeVision: { name: "The Aesthetic Visionary", desc: "You experience spaces as emotions." },
    buildShip:      { name: "The Relentless Builder", desc: "You'd rather ship ugly than not ship." },
    realWorld:      { name: "The Impact Engineer", desc: "Nothing matters if it doesn't move the needle." },
    systemsThink:   { name: "The Systems Architect", desc: "You see the whole board before the first move." },
    spatialMind:    { name: "The Spatial Thinker", desc: "Three dimensions are your native language." },
    peopleProduct:  { name: "The Product Whisperer", desc: "You feel users' pain before they articulate it." },
  };
  return archetypes[dominant] || archetypes.systemsThink;
}

// --- localStorage ---
const STORAGE_VERSION = 2;

export function saveGraphToStorage(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, _v: STORAGE_VERSION }));
  } catch {}
}

export function loadGraphFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed._v !== STORAGE_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function clearGraphStorage() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}
