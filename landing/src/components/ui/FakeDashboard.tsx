"use client";

import { motion } from "framer-motion";

export function FakeDashboard() {
  const lineData = [30, 55, 40, 70, 60, 85, 75, 90, 80, 95];
  const barData = [60, 80, 45, 90, 70];

  const maxBar = Math.max(...barData);

  const points = lineData
    .map((v, i) => {
      const x = (i / (lineData.length - 1)) * 260 + 10;
      const y = 80 - (v / 100) * 65;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="glass-card rounded-2xl p-5 w-full max-w-md mx-auto select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-[#A0AEC0]">실험 자동화 현황</p>
          <p className="text-lg font-bold text-white">Lab Dashboard</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
          <span className="text-xs text-[#00E5FF]">실시간</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: "자동 수집", value: "1,284", unit: "건" },
          { label: "절감 시간", value: "38.5", unit: "h" },
          { label: "정확도", value: "99.7", unit: "%" },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#0A1F44]/60 rounded-lg p-2 text-center">
            <p className="text-[10px] text-[#A0AEC0] mb-0.5">{stat.label}</p>
            <p className="text-base font-bold text-[#00E5FF]">
              {stat.value}
              <span className="text-xs font-normal text-[#A0AEC0] ml-0.5">{stat.unit}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Line Chart */}
      <div className="mb-4">
        <p className="text-xs text-[#A0AEC0] mb-1.5">데이터 수집량 (최근 10회)</p>
        <svg viewBox="0 0 280 90" className="w-full h-20" preserveAspectRatio="none">
          {/* Grid lines */}
          {[20, 45, 70].map((y) => (
            <line
              key={y}
              x1="10"
              y1={y}
              x2="270"
              y2={y}
              stroke="rgba(160,174,192,0.1)"
              strokeWidth="1"
            />
          ))}
          {/* Gradient fill */}
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.polyline
            points={points}
            fill="none"
            stroke="#00E5FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
          />
          {/* Dot on last point */}
          <motion.circle
            cx="270"
            cy={80 - (lineData[lineData.length - 1] / 100) * 65}
            r="4"
            fill="#00E5FF"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.2, type: "spring" }}
          />
        </svg>
      </div>

      {/* Bar chart */}
      <div>
        <p className="text-xs text-[#A0AEC0] mb-2">장비별 연결 상태</p>
        <div className="flex items-end gap-1.5 h-10">
          {barData.map((v, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t"
              style={{ originY: "bottom", height: `${(v / maxBar) * 100}%`, background: i === 3 ? "#00E5FF" : "rgba(0,229,255,0.3)" }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: "easeOut" }}
            />
          ))}
        </div>
        <div className="flex gap-1.5 mt-1">
          {["장비A", "장비B", "장비C", "장비D", "장비E"].map((label) => (
            <p key={label} className="flex-1 text-center text-[9px] text-[#A0AEC0]">
              {label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
