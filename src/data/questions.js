// Career prediction quiz — personality & preference based.
// Questions use everyday language. No engineering knowledge required.
// Weights: { BCT, CSIT, BCA, BEI, BCE, BARCH } — values 0–5.

export const QUESTIONS = [
  {
    id: 1,
    question: "When you face a difficult problem you've never seen before, what do you do first?",
    emoji: "🧩",
    category: "How You Think",
    options: [
      {
        id: "1a",
        text: "Break it down into smaller steps and reason through each one carefully.",
        tag: "Analytical",
        weights: { BCT: 5, CSIT: 4, BCA: 1, BEI: 2, BCE: 1, BARCH: 0 },
      },
      {
        id: "1b",
        text: "Sketch or visualize it — I understand things better when I can see and map them.",
        tag: "Visual",
        weights: { BCT: 0, CSIT: 0, BCA: 1, BEI: 0, BCE: 3, BARCH: 5 },
      },
      {
        id: "1c",
        text: "Think about who is affected and what solution would work best for them.",
        tag: "People-Centered",
        weights: { BCT: 0, CSIT: 2, BCA: 5, BEI: 0, BCE: 1, BARCH: 2 },
      },
      {
        id: "1d",
        text: "Start experimenting immediately — try things, make mistakes, and figure it out hands-on.",
        tag: "Hands-On",
        weights: { BCT: 2, CSIT: 1, BCA: 2, BEI: 5, BCE: 3, BARCH: 1 },
      },
    ],
  },
  {
    id: 2,
    question: "Which of these workspaces sounds most like your ideal environment?",
    emoji: "🏢",
    category: "Where You Thrive",
    options: [
      {
        id: "2a",
        text: "A quiet, focused setup — multiple screens, deep concentration, complex problems to solve alone.",
        tag: "Deep Focus",
        weights: { BCT: 5, CSIT: 4, BCA: 0, BEI: 2, BCE: 0, BARCH: 0 },
      },
      {
        id: "2b",
        text: "A creative studio — drawing boards, physical models, natural light, space to think visually.",
        tag: "Creative Studio",
        weights: { BCT: 0, CSIT: 0, BCA: 2, BEI: 0, BCE: 2, BARCH: 5 },
      },
      {
        id: "2c",
        text: "An energetic collaborative space — fast feedback, quick decisions, building something with a team.",
        tag: "Collaborative",
        weights: { BCT: 1, CSIT: 3, BCA: 5, BEI: 0, BCE: 1, BARCH: 1 },
      },
      {
        id: "2d",
        text: "A lab, workshop, or field site — real tools, real equipment, real environments to work in.",
        tag: "Lab & Field",
        weights: { BCT: 1, CSIT: 0, BCA: 0, BEI: 5, BCE: 4, BARCH: 1 },
      },
    ],
  },
  {
    id: 3,
    question: "Walking through Kathmandu, what do your eyes naturally drift toward?",
    emoji: "🏙️",
    category: "What You Notice",
    options: [
      {
        id: "3a",
        text: "The invisible technology running everything — apps, networks, data, and digital systems.",
        tag: "Digital Eye",
        weights: { BCT: 3, CSIT: 5, BCA: 2, BEI: 2, BCE: 0, BARCH: 0 },
      },
      {
        id: "3b",
        text: "The buildings — how each one was designed, what it communicates, how it makes you feel inside.",
        tag: "Architectural Eye",
        weights: { BCT: 0, CSIT: 0, BCA: 1, BEI: 0, BCE: 1, BARCH: 5 },
      },
      {
        id: "3c",
        text: "The infrastructure — roads, bridges, drainage systems, the physical backbone of the city.",
        tag: "Infrastructure Eye",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 2, BCE: 5, BARCH: 2 },
      },
      {
        id: "3d",
        text: "The signals — cell towers, power lines, how communication and electricity reach every corner.",
        tag: "Signals Eye",
        weights: { BCT: 1, CSIT: 1, BCA: 0, BEI: 5, BCE: 2, BARCH: 0 },
      },
    ],
  },
  {
    id: 4,
    question: "Think back to school. Which activity genuinely felt natural and easy for you?",
    emoji: "📚",
    category: "Natural Strengths",
    options: [
      {
        id: "4a",
        text: "Maths, logic puzzles, or structured reasoning — finding the correct answer felt satisfying.",
        tag: "Logical",
        weights: { BCT: 5, CSIT: 4, BCA: 0, BEI: 2, BCE: 1, BARCH: 0 },
      },
      {
        id: "4b",
        text: "Drawing, art, or design — expressing ideas visually came naturally and joyfully.",
        tag: "Creative",
        weights: { BCT: 0, CSIT: 0, BCA: 2, BEI: 0, BCE: 1, BARCH: 5 },
      },
      {
        id: "4c",
        text: "Communication, social studies, or business thinking — understanding people and systems.",
        tag: "Social & Strategic",
        weights: { BCT: 0, CSIT: 2, BCA: 5, BEI: 0, BCE: 1, BARCH: 2 },
      },
      {
        id: "4d",
        text: "Physics, chemistry experiments, or building things — seeing how the physical world works.",
        tag: "Scientific & Physical",
        weights: { BCT: 2, CSIT: 1, BCA: 0, BEI: 5, BCE: 4, BARCH: 1 },
      },
    ],
  },
  {
    id: 5,
    question: "Your friends would most honestly describe you as...",
    emoji: "🪞",
    category: "How Others See You",
    options: [
      {
        id: "5a",
        text: "The logical one — you love systems, structure, and finding the elegant solution to things.",
        tag: "The Logical One",
        weights: { BCT: 5, CSIT: 4, BCA: 0, BEI: 2, BCE: 1, BARCH: 0 },
      },
      {
        id: "5b",
        text: "The creative one — you see beauty and design possibilities in everyday things.",
        tag: "The Creative One",
        weights: { BCT: 0, CSIT: 0, BCA: 3, BEI: 0, BCE: 1, BARCH: 5 },
      },
      {
        id: "5c",
        text: "The entrepreneurial one — always thinking about opportunities, what people need, and how to build it.",
        tag: "The Entrepreneur",
        weights: { BCT: 0, CSIT: 3, BCA: 5, BEI: 0, BCE: 1, BARCH: 1 },
      },
      {
        id: "5d",
        text: "The practical one — you fix things, wire things up, and prefer real results over abstract ideas.",
        tag: "The Practical One",
        weights: { BCT: 1, CSIT: 0, BCA: 0, BEI: 5, BCE: 4, BARCH: 0 },
      },
    ],
  },
  {
    id: 6,
    question: "In 20 years, which achievement would make you the most proud?",
    emoji: "🏆",
    category: "Your Legacy",
    options: [
      {
        id: "6a",
        text: "A software system or AI that millions of people depend on silently every day.",
        tag: "Tech Impact",
        weights: { BCT: 4, CSIT: 5, BCA: 2, BEI: 1, BCE: 0, BARCH: 0 },
      },
      {
        id: "6b",
        text: "A building, bridge, or neighborhood you designed that shapes how a community lives.",
        tag: "Built Impact",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 3, BARCH: 5 },
      },
      {
        id: "6c",
        text: "A product or company you built from zero that genuinely improved people's daily lives.",
        tag: "Product Impact",
        weights: { BCT: 0, CSIT: 3, BCA: 5, BEI: 0, BCE: 0, BARCH: 0 },
      },
      {
        id: "6d",
        text: "A network, device, or system that connected communities that previously had no access.",
        tag: "Connection Impact",
        weights: { BCT: 1, CSIT: 1, BCA: 0, BEI: 5, BCE: 3, BARCH: 0 },
      },
    ],
  },
  {
    id: 7,
    question: "If you could spend 6 months building one thing for Nepal, you'd choose...",
    emoji: "🇳🇵",
    category: "Your Dream Project",
    options: [
      {
        id: "7a",
        text: "An intelligent system or AI that automates something important for Nepali institutions.",
        tag: "AI Builder",
        weights: { BCT: 5, CSIT: 4, BCA: 1, BEI: 1, BCE: 0, BARCH: 0 },
      },
      {
        id: "7b",
        text: "A culturally-sensitive community centre — combining local aesthetics with earthquake safety.",
        tag: "Space Designer",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 3, BARCH: 5 },
      },
      {
        id: "7c",
        text: "A mobile app that solves a real daily problem for students, farmers, or small businesses.",
        tag: "App Creator",
        weights: { BCT: 0, CSIT: 3, BCA: 5, BEI: 0, BCE: 0, BARCH: 0 },
      },
      {
        id: "7d",
        text: "A sensor network that monitors landslides and warns remote mountain communities in real-time.",
        tag: "IoT Pioneer",
        weights: { BCT: 1, CSIT: 1, BCA: 0, BEI: 5, BCE: 3, BARCH: 0 },
      },
    ],
  },
  {
    id: 8,
    question: "In every group project, what role do you naturally end up in?",
    emoji: "👥",
    category: "Team Dynamics",
    options: [
      {
        id: "8a",
        text: "The architect — you design the structure, plan the logic, and ensure everything holds together.",
        tag: "The Architect",
        weights: { BCT: 5, CSIT: 3, BCA: 0, BEI: 2, BCE: 3, BARCH: 3 },
      },
      {
        id: "8b",
        text: "The designer — you shape how it looks, feels, and how people move through the experience.",
        tag: "The Designer",
        weights: { BCT: 0, CSIT: 0, BCA: 4, BEI: 0, BCE: 0, BARCH: 5 },
      },
      {
        id: "8c",
        text: "The product owner — you keep everyone focused on what users actually want and need.",
        tag: "The Product Owner",
        weights: { BCT: 0, CSIT: 2, BCA: 5, BEI: 0, BCE: 0, BARCH: 1 },
      },
      {
        id: "8d",
        text: "The implementer — you handle the technical build, wiring, or physical construction.",
        tag: "The Implementer",
        weights: { BCT: 2, CSIT: 1, BCA: 0, BEI: 5, BCE: 4, BARCH: 0 },
      },
    ],
  },
  {
    id: 9,
    question: "On a free weekend, which activity genuinely sounds most appealing?",
    emoji: "☀️",
    category: "How You Recharge",
    options: [
      {
        id: "9a",
        text: "Building something with code, reading how technology works, or solving a coding challenge.",
        tag: "Digital Creator",
        weights: { BCT: 4, CSIT: 5, BCA: 3, BEI: 1, BCE: 0, BARCH: 0 },
      },
      {
        id: "9b",
        text: "Visiting interesting buildings, sketching architecture, or exploring urban spaces.",
        tag: "Space Explorer",
        weights: { BCT: 0, CSIT: 0, BCA: 1, BEI: 0, BCE: 2, BARCH: 5 },
      },
      {
        id: "9c",
        text: "Brainstorming a business idea, talking to potential users, or building a side project.",
        tag: "Maker & Thinker",
        weights: { BCT: 0, CSIT: 3, BCA: 5, BEI: 0, BCE: 0, BARCH: 1 },
      },
      {
        id: "9d",
        text: "Taking apart electronics, experimenting with circuits, or visiting an engineering site.",
        tag: "Hardware Hacker",
        weights: { BCT: 3, CSIT: 0, BCA: 0, BEI: 5, BCE: 3, BARCH: 0 },
      },
    ],
  },
  {
    id: 10,
    question: "Deep down, which statement resonates most strongly with you?",
    emoji: "💡",
    category: "Your Core Drive",
    options: [
      {
        id: "10a",
        text: "\"I want to understand how things work at the deepest level and build systems others rely on.\"",
        tag: "Systems Thinker",
        weights: { BCT: 5, CSIT: 4, BCA: 0, BEI: 3, BCE: 1, BARCH: 0 },
      },
      {
        id: "10b",
        text: "\"I want to create spaces and structures that outlast me — things people experience for generations.\"",
        tag: "Legacy Builder",
        weights: { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 4, BARCH: 5 },
      },
      {
        id: "10c",
        text: "\"I want to ship something real that changes how people live, work, or connect with each other.\"",
        tag: "Impact Maker",
        weights: { BCT: 0, CSIT: 3, BCA: 5, BEI: 0, BCE: 1, BARCH: 1 },
      },
      {
        id: "10d",
        text: "\"I want to understand how the physical and digital world communicates — and make it better.\"",
        tag: "World Connector",
        weights: { BCT: 2, CSIT: 2, BCA: 0, BEI: 5, BCE: 2, BARCH: 0 },
      },
    ],
  },
];

// Pre-computed max possible score per program
// = sum of highest single-option weight per question
export function computeMaxScores() {
  const maxScores = { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 0, BARCH: 0 };
  for (const q of QUESTIONS) {
    const best = { BCT: 0, CSIT: 0, BCA: 0, BEI: 0, BCE: 0, BARCH: 0 };
    for (const opt of q.options) {
      for (const [prog, w] of Object.entries(opt.weights)) {
        if (w > best[prog]) best[prog] = w;
      }
    }
    for (const prog of Object.keys(maxScores)) maxScores[prog] += best[prog];
  }
  return maxScores;
}

export const MAX_SCORES = computeMaxScores();
