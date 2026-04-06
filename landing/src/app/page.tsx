"use client";

import { useCallback } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <main>
      <HeroSection onCtaClick={scrollToContact} />
      <PainPointsSection />
      <SolutionSection onCtaClick={scrollToContact} />
      <ProcessSection />
      <FinalCTASection />

      {/* Footer */}
      <footer
        className="py-8 px-6 text-center text-sm"
        style={{ background: "#020710", borderTop: "1px solid rgba(0,229,255,0.05)" }}
      >
        <p className="text-[#4A5568]">
          © 2024 Lab Automation. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
