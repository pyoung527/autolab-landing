"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GlowButton } from "@/components/ui/GlowButton";
import { FakeDashboard } from "@/components/ui/FakeDashboard";

interface Particle {
  left: number;
  top: number;
  opacity: number;
  duration: number;
  delay: number;
}

// Deterministic pseudo-random based on index to avoid SSR/client mismatch
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const PARTICLES: Particle[] = Array.from({ length: 20 }, (_, i) => ({
  left: seededRandom(i * 3 + 1) * 100,
  top: seededRandom(i * 3 + 2) * 100,
  opacity: seededRandom(i * 3 + 3) * 0.5 + 0.1,
  duration: 3 + seededRandom(i * 3 + 4) * 4,
  delay: seededRandom(i * 3 + 5) * 3,
}));

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(10,31,68,0.9) 0%, #050B1A 70%)",
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00E5FF]"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Neon grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[#00E5FF] text-sm font-semibold tracking-widest uppercase mb-4">
                Research Automation Solution
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                아직도 실험실에서
                <br />
                밤을 지새우고 계신가요?
                <br />
                <span
                  className="text-neon"
                  style={{ fontStyle: "italic" }}
                >
                  딸깍
                </span>
                ,{" "}
                <span className="text-[#A0AEC0] text-3xl md:text-4xl lg:text-5xl">
                  끝납니다.
                </span>
              </h1>
              <p className="text-[#A0AEC0] text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                당신의 실험을 자동화하는 데 집중합니다.
                <br />
                반복 작업은 우리가, 발견은 당신이.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <GlowButton size="large" onClick={onCtaClick}>
                지금 바로 상담 신청 →
              </GlowButton>
              <button
                onClick={() => {
                  document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-5 text-base font-semibold text-[#00E5FF] border border-[#00E5FF]/30 rounded-full hover:border-[#00E5FF]/70 hover:bg-[#00E5FF]/5 transition-all duration-300 cursor-pointer"
              >
                솔루션 보기
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {["#4F46E5", "#0070FF", "#00E5FF", "#059669"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#050B1A]"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <p className="text-sm text-[#A0AEC0]">
                <span className="text-white font-semibold">50+</span> 연구팀이 이미 자동화 중
              </p>
            </motion.div>
          </div>

          {/* Right: Dashboard visual */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow backdrop */}
            <div
              className="absolute inset-0 rounded-2xl blur-3xl opacity-20"
              style={{ background: "radial-gradient(circle, #00E5FF, transparent 70%)" }}
            />
            <FakeDashboard />
            {/* Floating alert badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-2 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-white">자동 수집 중</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-2 flex items-center gap-2"
            >
              <span className="text-lg">⚡</span>
              <div>
                <p className="text-xs text-[#A0AEC0]">절감 시간</p>
                <p className="text-sm font-bold text-[#00E5FF]">38.5h / week</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-xs text-[#A0AEC0] tracking-widest uppercase">Scroll</p>
        <div className="w-px h-8 bg-gradient-to-b from-[#00E5FF]/50 to-transparent" />
      </motion.div>
    </section>
  );
}
