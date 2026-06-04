export const PROGRAM_SLUGS = {
  BCT:   "bct",
  CSIT:  "csit",
  BCA:   "bca",
  BEI:   "bei",
  BCE:   "bce",
  BARCH: "b-arch",
};

export const SLUG_TO_ID = Object.fromEntries(
  Object.entries(PROGRAM_SLUGS).map(([id, slug]) => [slug, id])
);

export const PROGRAMS = {
  BCT: {
    id: "BCT",
    slug: "bct",
    name: "Computer Engineering",
    degree: "B.E. in Computer Engineering",
    shortTag: "BCT",
    tagline: "Build the machines that build everything else.",
    description:
      "You're the architect at the intersection of silicon and software. BCT engineers don't just write code — they understand what's happening at the hardware level. When systems fail and nobody else knows why, they call you.",
    color: "#00F2FE",
    gradientFrom: "#0B3C5D",
    gradientTo: "#00F2FE",
    emoji: "⚡",
    archetype: "The System Architect",
    archetypeDesc: "You think in layers — physical, logical, and abstract — simultaneously.",
    dnaProfile: [
      { trait: "Code Logic", value: 95 },
      { trait: "Systems Thinking", value: 90 },
      { trait: "Hardware Affinity", value: 80 },
      { trait: "Innovation Drive", value: 85 },
      { trait: "Build & Ship", value: 65 },
      { trait: "Real-World Impact", value: 70 },
    ],
    traits: ["Algorithm Obsessed", "Hardware-Software Bridge", "AI/ML Architect", "Low-Level Thinker"],
    campusLife: {
      clubs: ["HCOE Robotics Club", "AI/ML Research Group", "IOE Programming Contest Team", "Open Source Contributors"],
      labs: ["Embedded Systems Lab", "Digital Signal Processing Lab", "VLSI Design Studio", "High-Performance Computing Cluster"],
      projects: [
        "Custom RISC-V processor implementation",
        "Real-time OS for robotics applications",
        "Neural network inference on FPGA",
      ],
    },
    alternateTimeline: {
      program: "BEI",
      reason: "Your hardware instinct is strong. If signals had more pull than code, BEI would have claimed you.",
    },
    careerOutcomes: [
      { role: "AI/ML Engineer", company: "Google DeepMind / FAANG" },
      { role: "Systems Architect", company: "Intel / AMD / Qualcomm" },
      { role: "CTO / Principal Engineer", company: "Deep-tech Startups" },
      { role: "Embedded Systems Lead", company: "Aerospace / Automotive" },
    ],
    careerLadder: [
      {
        phase: "Noob Freshman",
        label: "Phase 1",
        icon: "🎓",
        items: [
          "HCOE Robotics Club — circuit debugging and embedded C",
          "DSP Lab — signal processing and Fourier transforms",
          "IOE Programming contests — data structures and algorithms grind",
          "First GitHub repo: a compiler or interpreter in C",
        ],
      },
      {
        phase: "Cooking Era",
        label: "Phase 2",
        icon: "🔥",
        items: [
          "Senior design: custom FPGA-based processor from scratch",
          "HCOE Hackathon: AI inference on edge devices under 10ms",
          "Open-source kernel contribution merged upstream",
          "Research internship at ICIMOD or NTC innovation lab",
        ],
      },
      {
        phase: "Industry Deity",
        label: "Phase 3",
        icon: "👑",
        items: [
          "AI/ML Engineer building models at FAANG scale",
          "Systems Architect designing chip architectures at Intel or TSMC",
          "CTO / Principal Engineer at a deep-tech unicorn",
          "Hardware startup founder building the next neuromorphic chip",
        ],
      },
    ],
  },

  CSIT: {
    id: "CSIT",
    slug: "csit",
    name: "Computer Science & IT",
    degree: "B.Sc. in Computer Science & Information Technology",
    shortTag: "BSC.CSIT",
    tagline: "Write code. Deploy at scale. Own the internet.",
    description:
      "Cloud-native, algorithm-loving, full-stack destroyer. CSIT grads ship products, architect distributed systems, and understand computer science deeply enough to know exactly which rules are worth breaking.",
    color: "#9B5DE5",
    gradientFrom: "#1a0a2e",
    gradientTo: "#9B5DE5",
    emoji: "🚀",
    archetype: "The Cloud Native",
    archetypeDesc: "You think in services, data flows, and deployment pipelines. You ship, then improve.",
    dnaProfile: [
      { trait: "Code Logic", value: 90 },
      { trait: "Systems Thinking", value: 88 },
      { trait: "Build & Ship", value: 85 },
      { trait: "Data Intelligence", value: 90 },
      { trait: "Innovation Drive", value: 82 },
      { trait: "People & Product", value: 70 },
    ],
    traits: ["Full-Stack Wizard", "Data Science Brain", "Cloud Architect", "Open Source Leader"],
    campusLife: {
      clubs: ["HCOE Dev Club", "Data Science Circle", "Google Developer Students Club", "Competitive Programming Team"],
      labs: ["Cloud Computing Lab", "Big Data Analytics Centre", "Cybersecurity Research Lab", "Web Technology Studio"],
      projects: [
        "Machine learning pipeline for Nepali NLP",
        "Distributed database for financial inclusion",
        "Real-time collaborative code editor",
      ],
    },
    alternateTimeline: {
      program: "BCT",
      reason: "If you'd leaned more into the hardware-software boundary instead of pure software, BCT was calling.",
    },
    careerOutcomes: [
      { role: "Software Engineer", company: "Google / Microsoft / Meta" },
      { role: "Data Scientist / ML Engineer", company: "Fintech / HealthTech" },
      { role: "Cloud Solutions Architect", company: "AWS / Azure / GCP" },
      { role: "CTO / Startup Founder", company: "Self-funded" },
    ],
    careerLadder: [
      {
        phase: "Noob Freshman",
        label: "Phase 1",
        icon: "🎓",
        items: [
          "First pull request merged to an open-source project",
          "LeetCode grind — 200 problems before Year 2",
          "Build and deploy a real web app on cloud — actual live URL",
          "HCOE Dev Club — weekly code reviews and pair programming",
        ],
      },
      {
        phase: "Cooking Era",
        label: "Phase 2",
        icon: "🔥",
        items: [
          "Build a SaaS with paying customers before graduation",
          "HCOE Datathon — ML pipeline, feature engineering, top-3 finish",
          "Backend internship — scalable microservices in production",
          "Publish research on ML optimization or distributed consensus",
        ],
      },
      {
        phase: "Industry Deity",
        label: "Phase 3",
        icon: "👑",
        items: [
          "Staff Engineer at a top-tier tech company",
          "Principal Data Scientist building models at national scale",
          "Cloud Solutions Architect certifying and architecting for Fortune 500",
          "CTO of your own funded tech company",
        ],
      },
    ],
  },

  BCA: {
    id: "BCA",
    slug: "bca",
    name: "Computer Applications",
    degree: "Bachelor of Computer Applications",
    shortTag: "BCA",
    tagline: "Execution is the only flex that matters.",
    description:
      "You're the builder everyone actually ships with. BCA grads translate idea → product faster than anyone. Not over-engineering — deploying. Product-obsessed, user-first, execution-mode always on.",
    color: "#F15BB5",
    gradientFrom: "#2d0a1f",
    gradientTo: "#F15BB5",
    emoji: "📱",
    archetype: "The Product Builder",
    archetypeDesc: "You think in user journeys, conversion funnels, and shipping dates. Done > perfect.",
    dnaProfile: [
      { trait: "Build & Ship", value: 95 },
      { trait: "People & Product", value: 92 },
      { trait: "Creative Vision", value: 80 },
      { trait: "Entrepreneurship", value: 88 },
      { trait: "Code Logic", value: 65 },
      { trait: "Real-World Impact", value: 75 },
    ],
    traits: ["Product-First Builder", "App Developer", "UI/UX Executor", "Indie Hacker DNA"],
    campusLife: {
      clubs: ["HCOE Product Studio", "Mobile Dev Circle", "UI/UX Design Lab", "Startup Incubator Cell"],
      labs: ["App Development Studio", "UI/UX Prototyping Lab", "E-Commerce Lab", "Digital Marketing Centre"],
      projects: [
        "Ride-sharing app for Kathmandu Valley",
        "AgriTech platform connecting 1,200+ farmers",
        "Mental health chatbot with 5,000 MAU",
      ],
    },
    alternateTimeline: {
      program: "CSIT",
      reason: "If systems architecture had more pull than shipping products, CSIT would have been your path.",
    },
    careerOutcomes: [
      { role: "Mobile App Developer", company: "Fintech / HealthTech Product Companies" },
      { role: "Full-Stack Developer", company: "SaaS Startups" },
      { role: "Product Manager", company: "Tech Unicorns" },
      { role: "Indie Hacker / App Founder", company: "Self-funded" },
    ],
    careerLadder: [
      {
        phase: "Noob Freshman",
        label: "Phase 1",
        icon: "🎓",
        items: [
          "Build your first mobile app — React Native or Flutter",
          "HCOE UI/UX Club — Figma to code execution sprints",
          "Freelance your first project on Fiverr by Year 1 end",
          "App Store deploy — even if it only has 10 downloads",
        ],
      },
      {
        phase: "Cooking Era",
        label: "Phase 2",
        icon: "🔥",
        items: [
          "Launch an app with 1K+ downloads before graduation",
          "HCOE Product Hackathon — pitch, prototype, ship in 48 hours",
          "Frontend internship at a growth-stage startup",
          "Build a portfolio that makes seniors ask you for advice",
        ],
      },
      {
        phase: "Industry Deity",
        label: "Phase 3",
        icon: "👑",
        items: [
          "Senior Mobile Developer at a top product company",
          "Product Manager running a large-scale product",
          "Founder of a Y Combinator-backed startup",
          "Angel investor advising the next generation of builders",
        ],
      },
    ],
  },

  BEI: {
    id: "BEI",
    slug: "bei",
    name: "Electronics, Communication & Information Engineering",
    degree: "B.E. in Electronics, Communication & Information Engineering",
    shortTag: "BEI",
    tagline: "If it has a signal, you own it.",
    description:
      "The wizard at the intersection of hardware, networks, and the physical world. BEI engineers build the invisible infrastructure everything runs on — from 5G towers to IoT sensors to autonomous robots.",
    color: "#FEE440",
    gradientFrom: "#1a1200",
    gradientTo: "#FEE440",
    emoji: "📡",
    archetype: "The Signal Wizard",
    archetypeDesc: "You see frequencies where others see air, circuits where others see components.",
    dnaProfile: [
      { trait: "Hardware Affinity", value: 95 },
      { trait: "Systems Thinking", value: 88 },
      { trait: "Real-World Impact", value: 85 },
      { trait: "Innovation Drive", value: 82 },
      { trait: "Code Logic", value: 65 },
      { trait: "Build & Ship", value: 70 },
    ],
    traits: ["IoT Wizard", "Network Master", "Telecom Innovator", "Hardware Hacker"],
    campusLife: {
      clubs: ["HCOE Robotics Club", "IoT Innovation Lab", "Amateur Radio Club (VU2HCE)", "Embedded Systems Group"],
      labs: ["RF & Microwave Lab", "VLSI & PCB Design Lab", "Fiber Optic Communication Lab", "Automation & Control Lab"],
      projects: [
        "Landslide early-warning IoT system for Sindhupalchok",
        "Smart irrigation controller for hill farming",
        "Custom 5G NR baseband processor prototype",
      ],
    },
    alternateTimeline: {
      program: "BCT",
      reason: "If software had pulled harder than signals, you'd have been designing processors instead of programming them.",
    },
    careerOutcomes: [
      { role: "Network Engineer", company: "Cisco / Huawei / Nokia / Ericsson" },
      { role: "IoT Solutions Architect", company: "Smart City Projects / UNDP" },
      { role: "Robotics Engineer", company: "Aerospace / Defense / Automotive" },
      { role: "Hardware Startup Founder", company: "Deep-tech" },
    ],
    careerLadder: [
      {
        phase: "Noob Freshman",
        label: "Phase 1",
        icon: "🎓",
        items: [
          "HCOE Robotics Club — build your first autonomous bot",
          "Oscilloscope, multimeter, soldering — master the bench",
          "Arduino + Raspberry Pi IoT starter projects",
          "Amateur Radio license — VU2 prefix for Nepal",
        ],
      },
      {
        phase: "Cooking Era",
        label: "Phase 2",
        icon: "🔥",
        items: [
          "Design a custom 4-layer PCB and get it manufactured",
          "HCOE Robocon team — national/international robotics competition",
          "IoT thesis: smart city sensor mesh deployed on-campus",
          "Internship at Nepal Telecom or NTC IoT division",
        ],
      },
      {
        phase: "Industry Deity",
        label: "Phase 3",
        icon: "👑",
        items: [
          "Network Architect designing 6G infrastructure for Southeast Asia",
          "IoT Solutions Lead building smart city grids",
          "Robotics Engineer at a space agency or autonomous vehicle firm",
          "Hardware startup founder — next-gen sensor tech for Himalayan monitoring",
        ],
      },
    ],
  },

  BCE: {
    id: "BCE",
    slug: "bce",
    name: "Civil Engineering",
    degree: "B.E. in Civil Engineering",
    shortTag: "BCE",
    tagline: "You don't build apps. You build civilization.",
    description:
      "You think in structures, loads, and decades. BCE engineers are the reason buildings stand, roads connect, and bridges don't collapse. You're playing the long game — the physical world is your canvas.",
    color: "#06D6A0",
    gradientFrom: "#001a13",
    gradientTo: "#06D6A0",
    emoji: "🏗️",
    archetype: "The Civilization Builder",
    archetypeDesc: "You design for permanence. Every calculation you make will be tested by gravity for decades.",
    dnaProfile: [
      { trait: "Real-World Impact", value: 95 },
      { trait: "Spatial Intelligence", value: 90 },
      { trait: "Systems Thinking", value: 85 },
      { trait: "Problem Solving", value: 88 },
      { trait: "Innovation Drive", value: 70 },
      { trait: "Build & Ship", value: 75 },
    ],
    traits: ["Megastructure Designer", "Infrastructure Strategist", "Structural Mastermind", "Field Commander"],
    campusLife: {
      clubs: ["HCOE Civil Engineering Society", "Nepal Engineering Association Student Chapter", "Disaster Risk Reduction Group", "Surveying Club"],
      labs: ["Structural Engineering Lab", "Geotechnical Lab", "Hydraulics & Fluid Mechanics Lab", "Materials Testing Lab", "AutoCAD & BIM Studio"],
      projects: [
        "Seismic-resistant low-cost housing for rural Nepal",
        "Suspension bridge design for Karnali Province",
        "Smart drainage system for Kathmandu Valley",
      ],
    },
    alternateTimeline: {
      program: "BARCH",
      reason: "If aesthetics had pulled as hard as structural physics, you'd be designing spaces, not calculating their loads.",
    },
    careerOutcomes: [
      { role: "Project Manager", company: "Infrastructure Firms / ICIMOD / World Bank" },
      { role: "Structural Engineer", company: "High-rise & Earthquake-resistant Buildings" },
      { role: "Infrastructure Lead", company: "UNDP, ADB, Asian Infrastructure Fund" },
      { role: "Civil Contractor / Founder", company: "Self-run firm" },
    ],
    careerLadder: [
      {
        phase: "Noob Freshman",
        label: "Phase 1",
        icon: "🎓",
        items: [
          "AutoCAD mastery — 2D and 3D structural drafting",
          "Field survey trips — site visits, soil testing, measurement",
          "HCOE Civil Fest — mini bridge and load competition",
          "Nepal Building Code deep-dive — IS standards memorized",
        ],
      },
      {
        phase: "Cooking Era",
        label: "Phase 2",
        icon: "🔥",
        items: [
          "Capstone: seismic-resistant 5-story structure with full analysis",
          "Site internship — real road or building project, not just drawings",
          "Research: earthquake-resistant construction in Himalayan terrain",
          "STAAD.Pro + ETABS — structural analysis certification",
        ],
      },
      {
        phase: "Industry Deity",
        label: "Phase 3",
        icon: "👑",
        items: [
          "Project Director on a multi-billion rupee infrastructure project",
          "Structural Engineer designing Nepal's first seismic-rated skyscrapers",
          "Infrastructure Lead at ADB, World Bank, or UNDP projects",
          "Civil contractor running your own firm with government contracts",
        ],
      },
    ],
  },

  BARCH: {
    id: "BARCH",
    slug: "b-arch",
    name: "Architecture",
    degree: "B.Arch in Architecture",
    shortTag: "B.ARCH",
    tagline: "You don't just design spaces. You design how people feel.",
    description:
      "Aesthetic visionary with a physics degree. B.Arch students combine design thinking, structural logic, cultural insight, and spatial intelligence to create spaces that outlast everyone. Your creations become landmarks.",
    color: "#FF6B6B",
    gradientFrom: "#1a0000",
    gradientTo: "#FF6B6B",
    emoji: "🏛️",
    archetype: "The Space Poet",
    archetypeDesc: "You design emotions, not just buildings. Form follows feeling follows function.",
    dnaProfile: [
      { trait: "Creative Vision", value: 95 },
      { trait: "Spatial Intelligence", value: 93 },
      { trait: "Real-World Impact", value: 85 },
      { trait: "Design Thinking", value: 92 },
      { trait: "People & Product", value: 78 },
      { trait: "Systems Thinking", value: 72 },
    ],
    traits: ["Aesthetic Visionary", "Urban Planner", "Blueprint Artist", "Cultural Translator"],
    campusLife: {
      clubs: ["HCOE Architecture Studio", "Urban Design Collective", "Heritage Conservation Group", "Parametric Design Lab"],
      labs: ["Design Studio (All 5 years)", "Model Workshop & Fabrication Lab", "Revit & Rhino BIM Studio", "Environmental Design Lab", "Photography & Visual Communication Lab"],
      projects: [
        "Cultural centre for Patan Durbar Square periphery",
        "Affordable housing with passive cooling for Terai region",
        "Adaptive reuse of Rana-era heritage structure in Kathmandu",
      ],
    },
    alternateTimeline: {
      program: "BCE",
      reason: "If structural physics had called louder than spatial aesthetics, you'd have been calculating loads instead of light.",
    },
    careerOutcomes: [
      { role: "Principal Architect", company: "Top Global Architecture Studios" },
      { role: "Urban Planner", company: "Smart City Commissions / UN-Habitat" },
      { role: "Heritage Conservation Specialist", company: "UNESCO / DOA Nepal" },
      { role: "Architecture Firm Founder", company: "Own studio" },
    ],
    careerLadder: [
      {
        phase: "Noob Freshman",
        label: "Phase 1",
        icon: "🎓",
        items: [
          "Studio lab — hand drafting, model-making, spatial theory",
          "Design principles: form, light, shadow, circulation, and flow",
          "Critique sessions — present publicly, fail fast, revise harder",
          "History of architecture from Licchavi temples to parametricism",
        ],
      },
      {
        phase: "Cooking Era",
        label: "Phase 2",
        icon: "🔥",
        items: [
          "Thesis design: a cultural centre for Kathmandu Valley",
          "Revit + Rhino + Grasshopper — parametric design workflow",
          "Architecture firm internship — real client, real budget, real deadline",
          "Enter National Architecture Awards or Asia Pacific Design competition",
        ],
      },
      {
        phase: "Industry Deity",
        label: "Phase 3",
        icon: "👑",
        items: [
          "Principal Architect at a globally recognized studio",
          "Urban Planner reshaping Asian cities for the next 50 years",
          "Heritage conservation architect preserving Nepal's architectural identity",
          "Found your own studio — the building you design becomes a national landmark",
        ],
      },
    ],
  },
};

// HCOE Campus Highlights — shown on landing page
export const CAMPUS_HIGHLIGHTS = [
  {
    category: "Labs & Facilities",
    emoji: "🔬",
    items: [
      { name: "Robotics & Automation Lab", desc: "Robocon-grade equipment, collaborative build space", prog: "BCT/BEI" },
      { name: "Design Studio", desc: "5-year hands-on studio culture for Architecture", prog: "B.ARCH" },
      { name: "Cloud Computing Centre", desc: "AWS-partnered infrastructure for real deployments", prog: "CSIT" },
      { name: "Structural Testing Lab", desc: "Full-scale load testing and seismic simulation", prog: "BCE" },
    ],
  },
  {
    category: "Student Clubs",
    emoji: "🎯",
    items: [
      { name: "HCOE Robotics Club", desc: "National Robocon competitors since 2018", prog: "BEI/BCT" },
      { name: "Dev & Design Studio", desc: "Weekly product sprints, shipped 12 apps in 2024", prog: "BCA/CSIT" },
      { name: "Architecture Collective", desc: "Urban sketching, design critiques, guest architects", prog: "B.ARCH" },
      { name: "Civil Innovation Society", desc: "Infrastructure hackathons with real NGO partners", prog: "BCE" },
    ],
  },
  {
    category: "Industry Connections",
    emoji: "🤝",
    items: [
      { name: "Lumbini ICT Park MOU", desc: "Direct pipeline for software internships in Rupandehi", prog: "CSIT/BCA" },
      { name: "Nepal Telecom R&D", desc: "Collaborative IoT and 5G pilot projects", prog: "BEI" },
      { name: "Ministry of Urban Dev", desc: "Student capstone projects used in real planning", prog: "BCE/B.ARCH" },
      { name: "ICIMOD Partnership", desc: "Mountain ecosystem tech projects with AI components", prog: "BCT/BEI" },
    ],
  },
];
