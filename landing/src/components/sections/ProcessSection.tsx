"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeInUp } from "@/components/ui/FadeInUp";

const steps = [
  {
    step: 1,
    title: "현장 진단",
    description: "장비 및 프로세스 분석",
    detail: "실험실 환경과 사용 중인 장비를 분석하고 자동화 가능 범위를 파악합니다.",
    icon: "🔍",
    duration: "1~2일",
  },
  {
    step: 2,
    title: "설계",
    description: "자동화 구조 설계",
    detail: "연구팀의 워크플로우에 맞는 맞춤형 자동화 아키텍처를 설계합니다.",
    icon: "📐",
    duration: "3~5일",
  },
  {
    step: 3,
    title: "구축",
    description: "원클릭 시스템 개발",
    detail: "설계된 자동화 시스템을 구축하고 실험실 환경에 최적화하여 배포합니다.",
    icon: "⚙️",
    duration: "1~2주",
  },
  {
    step: 4,
    title: "사후 관리",
    description: "지속적 업데이트",
    detail: "지속적인 모니터링과 업데이트로 시스템을 항상 최적 상태로 유지합니다.",
    icon: "🔄",
    duration: "상시",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden"
      style={{ background: "#050B1A" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,229,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <p className="text-[#00E5FF] text-sm font-semibold tracking-widest uppercase mb-3">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            도입 과정은 간단합니다
          </h2>
          <p className="text-[#A0AEC0] text-lg">4단계로 실험실을 완전 자동화합니다</p>
        </FadeInUp>

        {/* Stepper */}
        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-[#0A1F44] z-0">
            <motion.div
              className="h-full bg-[#00E5FF]/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              style={{ originX: "left" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Step indicator */}
                <div className="flex flex-col items-center lg:items-start mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.2, type: "spring" }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-3"
                    style={{
                      background: "linear-gradient(135deg, #0A1F44, #003344)",
                      border: "2px solid #00E5FF",
                      boxShadow: "0 0 20px rgba(0,229,255,0.3)",
                    }}
                  >
                    <span className="text-[#00E5FF]">{step.icon}</span>
                  </motion.div>
                  <div
                    className="px-2 py-0.5 rounded text-[10px] font-semibold"
                    style={{ background: "rgba(0,229,255,0.1)", color: "#00E5FF" }}
                  >
                    {step.duration}
                  </div>
                </div>

                <div className="glass-card rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(0,229,255,0.15)", color: "#00E5FF" }}
                    >
                      STEP {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-[#A0AEC0] text-sm mb-3">{step.description}</p>
                  <p className="text-[#6B7280] text-xs leading-relaxed">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy quote */}
        <FadeInUp delay={0.2} className="mt-16">
          <div
            className="rounded-2xl p-8 text-center max-w-3xl mx-auto relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(10,31,68,0.6), rgba(0,51,68,0.6))",
              border: "1px solid rgba(0,229,255,0.15)",
            }}
          >
            {/* Quote decoration */}
            <div
              className="absolute top-4 left-6 text-6xl font-serif leading-none opacity-20 text-[#00E5FF]"
            >
              "
            </div>
            <p className="text-xl md:text-2xl font-medium text-white relative z-10">
              지루한 과정은 우리가 맡고,
              <br />
              <span className="text-[#00E5FF]">당신은 발견에 집중하세요</span>
            </p>
            <div className="mt-4 w-12 h-px bg-[#00E5FF]/50 mx-auto" />
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
