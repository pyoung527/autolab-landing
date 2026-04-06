"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";

interface FormData {
  name: string;
  email: string;
  organization: string;
  use_case: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    use_case: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "요청 처리 중 오류가 발생했습니다.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "오류가 발생했습니다.");
    }
  };

  const inputClass =
    "w-full bg-[#0A1F44]/50 border border-[#00E5FF]/20 rounded-xl px-4 py-3 text-white placeholder-[#4A5568] focus:outline-none focus:border-[#00E5FF]/60 focus:bg-[#0A1F44]/80 transition-all duration-200 text-sm";

  return (
    <div className="w-full max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-2xl p-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{
                background: "rgba(0,229,255,0.1)",
                border: "2px solid #00E5FF",
                boxShadow: "0 0 30px rgba(0,229,255,0.3)",
              }}
            >
              <svg className="w-8 h-8 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">신청이 완료되었습니다!</h3>
            <p className="text-[#A0AEC0] text-sm">곧 연락드립니다. 빠르게 검토 후 24시간 내 회신드립니다.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#A0AEC0] mb-1.5 ml-1">
                  이름 <span className="text-[#00E5FF]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="홍길동"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#A0AEC0] mb-1.5 ml-1">
                  이메일 <span className="text-[#00E5FF]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hong@lab.ac.kr"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#A0AEC0] mb-1.5 ml-1">
                소속 기관 / 연구실
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="서울대학교 화학공학과"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#A0AEC0] mb-1.5 ml-1">
                자동화하고 싶은 작업을 알려주세요
              </label>
              <textarea
                name="use_case"
                value={formData.use_case}
                onChange={handleChange}
                rows={4}
                placeholder="예: 반응기 온도/압력 데이터를 1시간마다 기록하고, 이상값이 감지되면 알림을 받고 싶습니다..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm text-center"
              >
                {errorMessage}
              </motion.p>
            )}

            <GlowButton
              type="submit"
              size="large"
              className="w-full"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-[#050B1A] border-t-transparent rounded-full block"
                  />
                  신청 중...
                </span>
              ) : (
                "무료 진단 받기 →"
              )}
            </GlowButton>

            <p className="text-center text-xs text-[#4A5568]">
              스팸 없음 · 영업 전화 없음 · 언제든 취소 가능
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
