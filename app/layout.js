import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { QuizProvider } from "@/context/QuizContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "HCOE Career Predictor — Himalaya College of Engineering",
  description:
    "Discover which undergraduate program at Himalaya College of Engineering matches your personality and strengths. 10 questions, real compatibility scores.",
  icons: {
    icon: "/assets/Himalaya_Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0d1117] text-white">
        <QuizProvider>
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </QuizProvider>
      </body>
    </html>
  );
}
