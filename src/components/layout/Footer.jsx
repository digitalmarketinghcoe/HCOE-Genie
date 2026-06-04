import Link from "next/link";
import Image from "next/image";

const PROGRAM_LINKS = [
  { label: "Computer Engineering (BCT)",       href: "/programs/bct"    },
  { label: "Computer Science & IT (BSC.CSIT)", href: "/programs/csit"   },
  { label: "Computer Applications (BCA)",      href: "/programs/bca"    },
  { label: "Electronics & Communication (BEI)",href: "/programs/bei"    },
  { label: "Civil Engineering (BCE)",          href: "/programs/bce"    },
  { label: "Architecture (B.ARCH)",            href: "/programs/b-arch" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/6 bg-[#0d1117] mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative size-10 overflow-hidden rounded-full ring-1 ring-white/10">
                <Image
                  src="/assets/Himalaya_Logo.png"
                  alt="HCOE Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white leading-tight">
                  Himalaya College
                </div>
                <div className="text-xs text-white/40">of Engineering, Lalitpur</div>
              </div>
            </div>
            <p className="text-xs text-white/35 leading-relaxed max-w-[220px]">
              Affiliated to Institute of Engineering (IOE), Tribhuvan University.
              Shaping engineers who build Nepal&apos;s future.
            </p>
            <div className="text-xs text-white/25">
              📍 Chyasal, Lalitpur, Nepal
            </div>
          </div>

          {/* Programs column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold tracking-widest text-white/75 uppercase">
              Programs
            </h4>
            <ul className="flex flex-col gap-2">
              {PROGRAM_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold tracking-widest text-white/75 uppercase">
              Tools
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-xs text-white/50 hover:text-white transition-colors">
                  Career Prediction Quiz
                </Link>
              </li>
              <li>
                <Link href="/" className="text-xs text-white/50 hover:text-white transition-colors">
                  Program Compatibility Report
                </Link>
              </li>
              <li>
                <Link href="/" className="text-xs text-white/50 hover:text-white transition-colors">
                  Career Roadmap Explorer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25 text-center sm:text-left">
            © {new Date().getFullYear()} Himalaya College of Engineering. All rights reserved.
          </p>
          <p className="text-xs text-white/30 font-medium text-center">
            Website created by{" "}
            <span className="text-white/55 font-semibold">Cherry digital solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
