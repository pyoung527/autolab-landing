"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { GlowButton } from "@/components/ui/GlowButton";

const features = [
  {
    title: "데이터 자동 수집",
    description:
      "모든 계측 장비를 하나의 플랫폼에 연결합니다. 온도, 압력, 전류, 유량 등 모든 측정값이 실시간으로 자동 저장됩니다.",
    visual: <DeviceConnectionDiagram />,
    highlight: "장비 연결 시간 90% 단축",
  },
  {
    title: "조건 기반 자동화",
    description:
      "실험 조건을 설정하면 시스템이 알아서 실행합니다. 온도 도달 → 다음 단계, 이상값 감지 → 즉시 알림.",
    visual: <LogicFlowChart />,
    highlight: "프로그래밍 없이 설정 가능",
  },
  {
    title: "실시간 대시보드",
    description:
      "언제 어디서나 실험 현황을 확인하세요. 웹, 앱, 어디서든 데이터를 즉시 시각화합니다.",
    visual: <DashboardChart />,
    highlight: "모바일에서도 실시간 확인",
  },
  {
    title: "자동 보고서",
    description:
      "실험 종료 즉시 분석 결과와 그래프가 담긴 보고서가 생성됩니다. 3일 걸리던 작업이 5분으로.",
    visual: <ReportPreview />,
    highlight: "보고서 작성 시간 97% 감소",
  },
];

function DeviceConnectionDiagram() {
  const devices = ["온도계", "압력계", "유량계", "pH미터"];
  return (
    <div className="flex flex-col items-center gap-3 py-4">
      <div className="flex gap-3 flex-wrap justify-center">
        {devices.map((d, i) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="glass-card rounded-lg px-3 py-2 text-xs text-[#00E5FF] font-medium"
          >
            {d}
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-1">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-px h-4 bg-[#00E5FF]"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </div>
      <motion.div
        animate={{ boxShadow: ["0 0 10px rgba(0,229,255,0.3)", "0 0 30px rgba(0,229,255,0.7)", "0 0 10px rgba(0,229,255,0.3)"] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="bg-[#0A1F44] border border-[#00E5FF] rounded-xl px-6 py-3 text-sm font-bold text-[#00E5FF]"
      >
        ⚡ Lab Automation Hub
      </motion.div>
    </div>
  );
}

function LogicFlowChart() {
  const steps = [
    { condition: "온도 ≥ 80°C", action: "펌프 ON" },
    { condition: "압력 > 2bar", action: "알림 발송" },
    { condition: "시간 60min", action: "샘플 채취" },
  ];
  return (
    <div className="space-y-2 py-2">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <div
            className="px-3 py-1.5 rounded-lg text-xs font-medium flex-shrink-0"
            style={{ background: "rgba(0,229,255,0.1)", color: "#00E5FF", border: "1px solid rgba(0,229,255,0.2)" }}
          >
            IF {step.condition}
          </div>
          <span className="text-[#A0AEC0] text-xs">→</span>
          <div
            className="px-3 py-1.5 rounded-lg text-xs font-medium flex-shrink-0"
            style={{ background: "rgba(74,222,128,0.1)", color: "#4ADE80", border: "1px solid rgba(74,222,128,0.2)" }}
          >
            {step.action}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function DashboardChart() {
  const data = [40, 65, 55, 80, 70, 90, 85, 95];
  return (
    <div className="py-2">
      <div className="flex items-end gap-1.5 h-16 mb-2">
        {data.map((v, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t"
            style={{ originY: "bottom", height: `${v}%`, background: `rgba(0,229,255,${0.3 + (v / 100) * 0.5})` }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-[#A0AEC0]">
        <span>09:00</span>
        <span>12:00</span>
        <span>15:00</span>
        <span>18:00</span>
      </div>
    </div>
  );
}

function ReportPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-xl p-4 text-xs space-y-2"
    >
      <div className="flex items-center justify-between border-b border-[#00E5FF]/10 pb-2">
        <span className="font-bold text-white text-sm">실험 결과 보고서</span>
        <span className="text-[#00E5FF]">✓ 자동 생성</span>
      </div>
      {[
        { label: "평균 온도", value: "82.3°C" },
        { label: "최대 압력", value: "1.8 bar" },
        { label: "수집 횟수", value: "1,284회" },
        { label: "이상 감지", value: "0건" },
      ].map((row) => (
        <div key={row.label} className="flex justify-between">
          <span className="text-[#A0AEC0]">{row.label}</span>
          <span className="text-white font-medium">{row.value}</span>
        </div>
      ))}
    </motion.div>
  );
}

function FeatureRow({
  feature,
  index,
  onCtaClick,
}: {
  feature: (typeof features)[0];
  index: number;
  onCtaClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`grid md:grid-cols-2 gap-10 items-center ${!isEven ? "md:[direction:rtl]" : ""}`}
    >
      {/* Text */}
      <div className={!isEven ? "md:[direction:ltr]" : ""}>
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
          style={{
            background: "rgba(0,229,255,0.1)",
            color: "#00E5FF",
            border: "1px solid rgba(0,229,255,0.2)",
          }}
        >
          0{index + 1}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{feature.title}</h3>
        <p className="text-[#A0AEC0] text-base leading-relaxed mb-6">{feature.description}</p>
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style={{
            background: "rgba(74,222,128,0.1)",
            color: "#4ADE80",
            border: "1px solid rgba(74,222,128,0.2)",
          }}
        >
          ⚡ {feature.highlight}
        </div>
      </div>

      {/* Visual */}
      <div className={`glass-card rounded-2xl p-6 ${!isEven ? "md:[direction:ltr]" : ""}`}>
        {feature.visual}
      </div>
    </motion.div>
  );
}

interface SolutionSectionProps {
  onCtaClick: () => void;
}

export function SolutionSection({ onCtaClick }: SolutionSectionProps) {
  return (
    <section
      id="solution"
      className="section-padding relative"
      style={{
        background: "linear-gradient(180deg, #050B1A 0%, #080f1f 50%, #050B1A 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeInUp className="text-center mb-20">
          <p className="text-[#00E5FF] text-sm font-semibold tracking-widest uppercase mb-3">
            Solution
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            실험실에 자동화 엔진을 추가하세요
          </h2>
          <p className="text-[#A0AEC0] text-lg max-w-2xl mx-auto">
            4가지 핵심 기능으로 연구 효율을 10배 높이세요
          </p>
        </FadeInUp>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureRow
              key={feature.title}
              feature={feature}
              index={index}
              onCtaClick={onCtaClick}
            />
          ))}
        </div>

        {/* Mid-page CTA */}
        <FadeInUp delay={0.2} className="text-center mt-20">
          <GlowButton size="large" onClick={onCtaClick}>
            지금 무료로 시작하기 →
          </GlowButton>
        </FadeInUp>
      </div>
    </section>
  );
}
