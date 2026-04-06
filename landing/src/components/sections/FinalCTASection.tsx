"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { ContactForm } from "@/components/ContactForm";

export function FinalCTASection() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #050B1A 0%, #001a2e 60%, #003344 100%)",
      }}
    >
      {/* Animated glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,112,255,0.15) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeInUp className="text-center mb-12">
          <p className="text-[#00E5FF] text-sm font-semibold tracking-widest uppercase mb-3">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            내일 아침은
            <br />
            <span className="text-neon">집에서</span> 맞이하세요
          </h2>
          <p className="text-[#A0AEC0] text-xl">더 이상 실험실에 남지 않아도 됩니다</p>
        </FadeInUp>

        {/* Benefits summary */}
        <FadeInUp delay={0.1} className="mb-12">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { icon: "🚀", text: "1주 내 도입" },
              { icon: "🆓", text: "무료 진단" },
              { icon: "💬", text: "24h 응답" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl"
                style={{
                  background: "rgba(0,229,255,0.05)",
                  border: "1px solid rgba(0,229,255,0.1)",
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-sm font-semibold text-white">{item.text}</p>
              </div>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <ContactForm />
        </FadeInUp>
      </div>
    </section>
  );
}
