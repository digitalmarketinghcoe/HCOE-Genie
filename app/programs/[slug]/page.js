import { notFound } from "next/navigation";
import { PROGRAMS, SLUG_TO_ID } from "@/data/programs";
import ProgramPage from "@/components/programs/ProgramPage";

export function generateStaticParams() {
  return [
    { slug: "bct"    },
    { slug: "csit"   },
    { slug: "bca"    },
    { slug: "bei"    },
    { slug: "bce"    },
    { slug: "b-arch" },
  ];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const id      = SLUG_TO_ID[slug];
  const program = id ? PROGRAMS[id] : null;

  if (!program) return { title: "Program Not Found — HCOE" };

  return {
    title:       `${program.name} (${program.shortTag}) — Himalaya College of Engineering`,
    description: `${program.tagline} Explore the full academic roadmap, career outcomes, and campus life for ${program.degree} at HCOE Lalitpur.`,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const id       = SLUG_TO_ID[slug];
  const program  = id ? PROGRAMS[id] : null;

  if (!program) notFound();

  return <ProgramPage program={program} />;
}
