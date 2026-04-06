"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, FadeInUp } from "@/components/ui/FadeInUp";

const painPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "반복 작업",
    description: "데이터 하나마다 수동 클릭 반복",
    stat: "하루 평균 4시간 낭비",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "야근",
    description: "로그 기록 때문에 퇴근 지연",
    stat: "주 평균 12시간 초과 근무",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "휴먼 에러",
    description: "졸음으로 인한 측정 실수",
    stat: "실험 오류율 8.3%",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "데이터 정리",
    description: "엑셀 수작업 과다",
    stat: "보고서 작성에 3일 소요",
  },
];

export function PainPointsSection() {
  return (
    <section id="pain-points" className="section-padding relative" style={{ background: "#050B1A" }}>
      {/* Subtle gradient top */}
      <div
        className="absolute top-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(10,31,68,0.3), transparent)" }}
      />

      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-16">
          <p className="text-[#00E5FF] text-sm font-semibold tracking-widest uppercase mb-3">
            Pain Points
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            연구자가 집중해야 할 것은
            <br />
            <span className="text-[#A0AEC0]">&apos;노가다&apos;가 아닙니다</span>
          </h2>
        </FadeInUp>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.15}
        >
          {painPoints.map((point) => (
            <StaggerItem key={point.title}>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="glass-card rounded-2xl p-6 h-full flex flex-col group cursor-default"
              >
                {/* Icon */}
                <div
                  className="mb-5 text-[#00E5FF] w-14 h-14 flex items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(0,229,255,0.08)",
                    boxShadow: "0 0 20px rgba(0,229,255,0.1)",
                    border: "1px solid rgba(0,229,255,0.2)",
                  }}
                >
                  {point.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                <p className="text-[#A0AEC0] text-sm leading-relaxed mb-4 flex-1">
                  {point.description}
                </p>

                {/* Stat badge */}
                <div
                  className="text-xs font-semibold px-3 py-1.5 rounded-full inline-block self-start"
                  style={{
                    background: "rgba(239,68,68,0.1)",
                    color: "#F87171",
                    border: "1px solid rgba(239,68,68,0.2)",
                  }}
                >
                  {point.stat}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Before/After comparison */}
        <FadeInUp delay={0.3} className="mt-16">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Before */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(239,68,68,0.05)",
                border: "1px solid rgba(239,68,68,0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">😩</span>
                <p className="font-bold text-red-400 text-lg">Before</p>
              </div>
              <ul className="space-y-2">
                {[
                  "새벽 2시까지 실험실에서 데이터 클릭",
                  "엑셀에 수기로 기록하다 실수",
                  "보고서 작성에 3일 소요",
                  "반복 측정으로 번아웃",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#A0AEC0]">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(0,229,255,0.05)",
                border: "1px solid rgba(0,229,255,0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">😊</span>
                <p className="font-bold text-[#00E5FF] text-lg">After</p>
              </div>
              <ul className="space-y-2">
                {[
                  "퇴근 후 자동으로 수집 완료",
                  "실시간 대시보드로 즉시 확인",
                  "보고서 자동 생성 (5분)",
                  "연구 본질에 집중",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#A0AEC0]">
                    <span className="text-[#00E5FF] mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
