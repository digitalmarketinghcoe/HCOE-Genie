// Graphify Question Bank — 10 dimensionally-balanced questions.
// Each option carries weights across 6 programs AND 8 DNA dimensions.
//
// DNA dimensions:
//   codeLogic      → BCT / CSIT
//   hardwareSignal → BCT / BEI
//   creativeVision → BARCH / BCA
//   buildShip      → BCA / CSIT
//   realWorld      → BCE / BARCH
//   systemsThink   → BCT / BEI / CSIT
//   spatialMind    → BCE / BARCH
//   peopleProduct  → BCA / BARCH

export const QUESTIONS = [
  {
    id: 1,
    question: "You have 72 hours and unlimited resources. What do you actually build?",
    emoji: "⚡",
    category: "Core Drive",
    options: [
      {
        id: "1a",
        text: "A custom OS kernel that boots in 200ms. Low-level, no frameworks, pure C.",
        tag: "System Architect",
        weights: { BCT: 5, CSIT: 2, BCA: 0, BEI: 2, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 5, hardwareSignal: 3, creativeVision: 0, buildShip: 1, realWorld: 0, systemsThink: 5, spatialMind: 0, peopleProduct: 0 },
      },
      {
        id: "1b",
        text: "A full-stack SaaS app with auth, billing, and a live dashboard. Ship it before Monday.",
        tag: "Indie Hacker",
        weights: { BCT: 1, CSIT: 4, BCA: 4, BEI: 0, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 3, hardwareSignal: 0, creativeVision: 2, buildShip: 5, realWorld: 1, systemsThink: 3, spatialMind: 0, peopleProduct: 3 },
      },
      {
        id: "1c",
        text: "An autonomous robot that maps a room and avoids obstacles. Custom PCB, no Arduino.",
        tag: "Hardware Wizard",
        weights: { BCT: 2, CSIT: 0, BCA: 0, BEI: 5, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 2, hardwareSignal: 5, creativeVision: 1, buildShip: 2, realWorld: 2, systemsThink: 4, spatialMind: 1, peopleProduct: 0 },
      },
      {
        id: "1d",
        text: "A detailed scale model + structural blueprint for a community library in an earthquake zone.",
        tag: "Structure Creator",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 4, BARCH: 5 },
        dna: { codeLogic: 0, hardwareSignal: 0, creativeVision: 4, buildShip: 2, realWorld: 5, systemsThink: 3, spatialMind: 5, peopleProduct: 3 },
      },
    ],
  },
  {
    id: 2,
    question: "The thing that would genuinely keep you up at 2 AM because it's too interesting to stop?",
    emoji: "🌙",
    category: "Deep Obsession",
    options: [
      {
        id: "2a",
        text: "Reverse-engineering how a neural network actually learns — not the math, the mechanism.",
        tag: "Deep Diver",
        weights: { BCT: 5, CSIT: 4, BCA: 0, BEI: 1, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 5, hardwareSignal: 1, creativeVision: 0, buildShip: 1, realWorld: 0, systemsThink: 5, spatialMind: 0, peopleProduct: 0 },
      },
      {
        id: "2b",
        text: "Debugging why a PCB trace is picking up interference and fixing it with a ferrite bead.",
        tag: "Signal Hunter",
        weights: { BCT: 2, CSIT: 0, BCA: 0, BEI: 5, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 1, hardwareSignal: 5, creativeVision: 0, buildShip: 1, realWorld: 2, systemsThink: 4, spatialMind: 0, peopleProduct: 0 },
      },
      {
        id: "2c",
        text: "Iterating on a UI until the spacing, typography, and animation feel absolutely right.",
        tag: "Craft Obsessive",
        weights: { BCT: 0, CSIT: 1, BCA: 4, BEI: 0, BCE: 0, BARCH: 4 },
        dna: { codeLogic: 0, hardwareSignal: 0, creativeVision: 5, buildShip: 3, realWorld: 1, systemsThink: 1, spatialMind: 3, peopleProduct: 4 },
      },
      {
        id: "2d",
        text: "Calculating if a retaining wall on that steep Kathmandu hillside will actually hold in a monsoon.",
        tag: "Reality Engineer",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 5, BARCH: 2 },
        dna: { codeLogic: 1, hardwareSignal: 0, creativeVision: 1, buildShip: 0, realWorld: 5, systemsThink: 4, spatialMind: 4, peopleProduct: 1 },
      },
    ],
  },
  {
    id: 3,
    question: "You get to design a course that every student in Nepal should take. What's it about?",
    emoji: "📚",
    category: "What You'd Teach",
    options: [
      {
        id: "3a",
        text: "How computers actually work — from transistors to the cloud. No black boxes.",
        tag: "First-Principles Teacher",
        weights: { BCT: 5, CSIT: 3, BCA: 0, BEI: 3, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 4, hardwareSignal: 4, creativeVision: 0, buildShip: 1, realWorld: 1, systemsThink: 5, spatialMind: 0, peopleProduct: 1 },
      },
      {
        id: "3b",
        text: "How to build and ship a product that people actually pay for. Idea → execution → money.",
        tag: "Entrepreneur Brain",
        weights: { BCT: 0, CSIT: 2, BCA: 5, BEI: 0, BCE: 1, BARCH: 1 },
        dna: { codeLogic: 1, hardwareSignal: 0, creativeVision: 2, buildShip: 5, realWorld: 3, systemsThink: 2, spatialMind: 0, peopleProduct: 5 },
      },
      {
        id: "3c",
        text: "How signals, waves, and electromagnetic fields silently power everything we use.",
        tag: "Physics Nerd",
        weights: { BCT: 1, CSIT: 0, BCA: 0, BEI: 5, BCE: 1, BARCH: 0 },
        dna: { codeLogic: 1, hardwareSignal: 5, creativeVision: 0, buildShip: 0, realWorld: 3, systemsThink: 4, spatialMind: 1, peopleProduct: 0 },
      },
      {
        id: "3d",
        text: "How to read a landscape and design something that belongs to it — functionally and aesthetically.",
        tag: "Space Reader",
        weights: { BCT: 0, CSIT: 0, BCA: 1, BEI: 0, BCE: 3, BARCH: 5 },
        dna: { codeLogic: 0, hardwareSignal: 0, creativeVision: 5, buildShip: 1, realWorld: 4, systemsThink: 2, spatialMind: 5, peopleProduct: 3 },
      },
    ],
  },
  {
    id: 4,
    question: "The project that would make you actually want to come to campus every single day?",
    emoji: "🏛️",
    category: "Campus Energy",
    options: [
      {
        id: "4a",
        text: "An AI model trained on Nepali language and culture, running on custom edge hardware.",
        tag: "AI Pioneer",
        weights: { BCT: 4, CSIT: 5, BCA: 1, BEI: 2, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 5, hardwareSignal: 2, creativeVision: 1, buildShip: 3, realWorld: 2, systemsThink: 5, spatialMind: 0, peopleProduct: 2 },
      },
      {
        id: "4b",
        text: "A smart water management system for Kathmandu's supply grid using IoT sensors.",
        tag: "Impact Builder",
        weights: { BCT: 1, CSIT: 1, BCA: 0, BEI: 4, BCE: 3, BARCH: 0 },
        dna: { codeLogic: 1, hardwareSignal: 4, creativeVision: 0, buildShip: 2, realWorld: 5, systemsThink: 4, spatialMind: 2, peopleProduct: 2 },
      },
      {
        id: "4c",
        text: "A mobile app that connects rural farmers directly to urban buyers. Beautiful UI, zero friction.",
        tag: "Product Designer",
        weights: { BCT: 0, CSIT: 2, BCA: 5, BEI: 0, BCE: 1, BARCH: 1 },
        dna: { codeLogic: 1, hardwareSignal: 0, creativeVision: 3, buildShip: 5, realWorld: 4, systemsThink: 2, spatialMind: 1, peopleProduct: 5 },
      },
      {
        id: "4d",
        text: "A seismic-resistant affordable housing prototype that could actually be replicated across Nepal.",
        tag: "Structural Visionary",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 4, BARCH: 5 },
        dna: { codeLogic: 0, hardwareSignal: 0, creativeVision: 4, buildShip: 3, realWorld: 5, systemsThink: 4, spatialMind: 5, peopleProduct: 3 },
      },
    ],
  },
  {
    id: 5,
    question: "If you could have one professional superpower, what's the one you'd actually choose?",
    emoji: "🦸",
    category: "Core Superpower",
    options: [
      {
        id: "5a",
        text: "See exactly why any system breaks before it breaks. Zero debugging blind spots.",
        tag: "System Oracle",
        weights: { BCT: 5, CSIT: 3, BCA: 0, BEI: 4, BCE: 2, BARCH: 0 },
        dna: { codeLogic: 4, hardwareSignal: 4, creativeVision: 0, buildShip: 1, realWorld: 2, systemsThink: 5, spatialMind: 1, peopleProduct: 0 },
      },
      {
        id: "5b",
        text: "Ship a working, beautiful, monetized product from zero to 10,000 users in 30 days.",
        tag: "Speed Runner",
        weights: { BCT: 0, CSIT: 3, BCA: 5, BEI: 0, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 2, hardwareSignal: 0, creativeVision: 3, buildShip: 5, realWorld: 2, systemsThink: 2, spatialMind: 0, peopleProduct: 5 },
      },
      {
        id: "5c",
        text: "Walk into any physical space and instantly see what should be built, where, and why it'll stand.",
        tag: "Spatial Genius",
        weights: { BCT: 0, CSIT: 0, BCA: 1, BEI: 0, BCE: 4, BARCH: 5 },
        dna: { codeLogic: 0, hardwareSignal: 0, creativeVision: 5, buildShip: 1, realWorld: 5, systemsThink: 3, spatialMind: 5, peopleProduct: 2 },
      },
      {
        id: "5d",
        text: "Design any wireless network protocol from scratch that runs perfectly the first time.",
        tag: "Protocol Master",
        weights: { BCT: 2, CSIT: 2, BCA: 0, BEI: 5, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 2, hardwareSignal: 5, creativeVision: 0, buildShip: 1, realWorld: 1, systemsThink: 5, spatialMind: 0, peopleProduct: 0 },
      },
    ],
  },
  {
    id: 6,
    question: "Be honest — which failure hits harder?",
    emoji: "💀",
    category: "Pain Point",
    options: [
      {
        id: "6a",
        text: "A beautifully designed app that crashes at 1000 concurrent users because the architecture was wrong.",
        tag: "Scale Thinker",
        weights: { BCT: 4, CSIT: 5, BCA: 2, BEI: 0, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 5, hardwareSignal: 1, creativeVision: 1, buildShip: 3, realWorld: 1, systemsThink: 5, spatialMind: 0, peopleProduct: 2 },
      },
      {
        id: "6b",
        text: "A hardware prototype that works in the lab but dies the moment it hits the field.",
        tag: "Field Tester",
        weights: { BCT: 2, CSIT: 0, BCA: 0, BEI: 5, BCE: 1, BARCH: 0 },
        dna: { codeLogic: 1, hardwareSignal: 5, creativeVision: 0, buildShip: 1, realWorld: 3, systemsThink: 3, spatialMind: 1, peopleProduct: 0 },
      },
      {
        id: "6c",
        text: "A stunning UI/experience that real users find confusing and abandon in 30 seconds.",
        tag: "User Empath",
        weights: { BCT: 0, CSIT: 1, BCA: 5, BEI: 0, BCE: 0, BARCH: 3 },
        dna: { codeLogic: 0, hardwareSignal: 0, creativeVision: 4, buildShip: 4, realWorld: 2, systemsThink: 1, spatialMind: 2, peopleProduct: 5 },
      },
      {
        id: "6d",
        text: "A structurally sound building that becomes an eyesore and kills the neighborhood's character.",
        tag: "Civic Thinker",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 3, BARCH: 5 },
        dna: { codeLogic: 0, hardwareSignal: 0, creativeVision: 5, buildShip: 1, realWorld: 5, systemsThink: 2, spatialMind: 5, peopleProduct: 3 },
      },
    ],
  },
  {
    id: 7,
    question: "You're advising Nepal's government. What's the ONE thing you tell them to build now?",
    emoji: "🏔️",
    category: "Real-World Vision",
    options: [
      {
        id: "7a",
        text: "A national cloud infrastructure so no government data ever has to leave the country.",
        tag: "Digital Sovereign",
        weights: { BCT: 3, CSIT: 5, BCA: 1, BEI: 2, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 4, hardwareSignal: 2, creativeVision: 0, buildShip: 3, realWorld: 4, systemsThink: 5, spatialMind: 0, peopleProduct: 2 },
      },
      {
        id: "7b",
        text: "Nationwide 5G + satellite hybrid network so every village in Nepal has internet.",
        tag: "Connectivity Crusader",
        weights: { BCT: 1, CSIT: 2, BCA: 0, BEI: 5, BCE: 2, BARCH: 0 },
        dna: { codeLogic: 1, hardwareSignal: 5, creativeVision: 0, buildShip: 2, realWorld: 5, systemsThink: 4, spatialMind: 1, peopleProduct: 3 },
      },
      {
        id: "7c",
        text: "Seismic-resilient affordable housing programs in every high-risk district. Lives saved, not profit.",
        tag: "People First",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 5, BARCH: 3 },
        dna: { codeLogic: 0, hardwareSignal: 0, creativeVision: 2, buildShip: 2, realWorld: 5, systemsThink: 4, spatialMind: 5, peopleProduct: 3 },
      },
      {
        id: "7d",
        text: "A digital services platform that lets citizens do everything — ID, taxes, permits — from their phone.",
        tag: "Civic Tech Builder",
        weights: { BCT: 0, CSIT: 2, BCA: 5, BEI: 0, BCE: 1, BARCH: 1 },
        dna: { codeLogic: 2, hardwareSignal: 0, creativeVision: 3, buildShip: 5, realWorld: 4, systemsThink: 3, spatialMind: 0, peopleProduct: 5 },
      },
    ],
  },
  {
    id: 8,
    question: "The thing you instinctively notice that other people just walk past?",
    emoji: "👁️",
    category: "Instinct Scan",
    options: [
      {
        id: "8a",
        text: "Inefficient code. You read codebases like text and spot the O(n²) from across the room.",
        tag: "Code Scanner",
        weights: { BCT: 5, CSIT: 4, BCA: 1, BEI: 1, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 5, hardwareSignal: 1, creativeVision: 0, buildShip: 2, realWorld: 0, systemsThink: 5, spatialMind: 0, peopleProduct: 0 },
      },
      {
        id: "8b",
        text: "Signals, antennas, radio towers. You notice RF infrastructure everywhere and wonder who engineered it.",
        tag: "Signal Spotter",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 5, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 0, hardwareSignal: 5, creativeVision: 0, buildShip: 0, realWorld: 2, systemsThink: 3, spatialMind: 1, peopleProduct: 0 },
      },
      {
        id: "8c",
        text: "Bad UX. Confusing menus, broken flows, dark patterns. You feel it physically and want to fix it.",
        tag: "UX Empath",
        weights: { BCT: 0, CSIT: 1, BCA: 5, BEI: 0, BCE: 0, BARCH: 3 },
        dna: { codeLogic: 0, hardwareSignal: 0, creativeVision: 4, buildShip: 4, realWorld: 2, systemsThink: 1, spatialMind: 2, peopleProduct: 5 },
      },
      {
        id: "8d",
        text: "Structural tension in buildings. You look at a roof, a bridge, a wall and ask 'what's holding that?'",
        tag: "Load Reader",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 4, BARCH: 5 },
        dna: { codeLogic: 0, hardwareSignal: 0, creativeVision: 3, buildShip: 0, realWorld: 5, systemsThink: 4, spatialMind: 5, peopleProduct: 1 },
      },
    ],
  },
  {
    id: 9,
    question: "Ten years from now, your work has made a real dent. What does that actually look like?",
    emoji: "🌍",
    category: "Legacy Mode",
    options: [
      {
        id: "9a",
        text: "An AI system you architected is running critical infrastructure for 50 million people.",
        tag: "Infrastructure Architect",
        weights: { BCT: 4, CSIT: 5, BCA: 0, BEI: 2, BCE: 1, BARCH: 0 },
        dna: { codeLogic: 5, hardwareSignal: 2, creativeVision: 0, buildShip: 3, realWorld: 4, systemsThink: 5, spatialMind: 0, peopleProduct: 2 },
      },
      {
        id: "9b",
        text: "A product you built from a dorm room now has 2 million daily active users across South Asia.",
        tag: "Founder Energy",
        weights: { BCT: 0, CSIT: 2, BCA: 5, BEI: 0, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 2, hardwareSignal: 0, creativeVision: 3, buildShip: 5, realWorld: 3, systemsThink: 2, spatialMind: 0, peopleProduct: 5 },
      },
      {
        id: "9c",
        text: "IoT systems you designed are monitoring earthquake-prone zones across the Himalayas in real-time.",
        tag: "Sensor Pioneer",
        weights: { BCT: 1, CSIT: 0, BCA: 0, BEI: 5, BCE: 3, BARCH: 0 },
        dna: { codeLogic: 1, hardwareSignal: 5, creativeVision: 0, buildShip: 2, realWorld: 5, systemsThink: 4, spatialMind: 2, peopleProduct: 2 },
      },
      {
        id: "9d",
        text: "A neighborhood you designed is Nepal's first net-zero community — livable, local, and lasting.",
        tag: "Legacy Builder",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 3, BARCH: 5 },
        dna: { codeLogic: 0, hardwareSignal: 0, creativeVision: 5, buildShip: 2, realWorld: 5, systemsThink: 3, spatialMind: 5, peopleProduct: 4 },
      },
    ],
  },
  {
    id: 10,
    question: "One sentence to describe your approach to any hard problem:",
    emoji: "🧠",
    category: "Problem Signature",
    options: [
      {
        id: "10a",
        text: "\"Break it into first principles, understand every layer, then rebuild from the bottom up.\"",
        tag: "First-Principles Thinker",
        weights: { BCT: 5, CSIT: 3, BCA: 0, BEI: 4, BCE: 2, BARCH: 0 },
        dna: { codeLogic: 5, hardwareSignal: 4, creativeVision: 0, buildShip: 1, realWorld: 2, systemsThink: 5, spatialMind: 1, peopleProduct: 0 },
      },
      {
        id: "10b",
        text: "\"Find what the user actually needs, prototype fast, and iterate until it just works.\"",
        tag: "Iterative Builder",
        weights: { BCT: 0, CSIT: 2, BCA: 5, BEI: 0, BCE: 0, BARCH: 2 },
        dna: { codeLogic: 1, hardwareSignal: 0, creativeVision: 3, buildShip: 5, realWorld: 3, systemsThink: 2, spatialMind: 1, peopleProduct: 5 },
      },
      {
        id: "10c",
        text: "\"Map the physical constraints first — materials, forces, environment — then design around them.\"",
        tag: "Constraint Navigator",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 2, BCE: 5, BARCH: 4 },
        dna: { codeLogic: 0, hardwareSignal: 2, creativeVision: 3, buildShip: 2, realWorld: 5, systemsThink: 4, spatialMind: 5, peopleProduct: 2 },
      },
      {
        id: "10d",
        text: "\"Trace the signal path. Where does data come from, where does it go, and where is it breaking?\"",
        tag: "Signal Tracer",
        weights: { BCT: 2, CSIT: 3, BCA: 0, BEI: 5, BCE: 0, BARCH: 0 },
        dna: { codeLogic: 3, hardwareSignal: 5, creativeVision: 0, buildShip: 1, realWorld: 2, systemsThink: 5, spatialMind: 0, peopleProduct: 0 },
      },
    ],
  },
];

// Maximum possible score per program (sum of max weight per question)
// Used for computing true compatibility percentages
export function computeMaxScores() {
  const maxScores = { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 0, BARCH: 0 };
  for (const q of QUESTIONS) {
    const perProgram = { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 0, BARCH: 0 };
    for (const opt of q.options) {
      for (const [prog, w] of Object.entries(opt.weights)) {
        if (w > perProgram[prog]) perProgram[prog] = w;
      }
    }
    for (const prog of Object.keys(maxScores)) {
      maxScores[prog] += perProgram[prog];
    }
  }
  return maxScores;
}

export const MAX_SCORES = computeMaxScores();
