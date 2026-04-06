"use client";

import { motion } from "framer-motion";

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "default" | "large";
  className?: string;
  type?: "button" | "submit";
}

export function GlowButton({
  children,
  onClick,
  size = "default",
  className = "",
  type = "button",
}: GlowButtonProps) {
  const sizeClasses =
    size === "large"
      ? "px-10 py-5 text-lg"
      : "px-8 py-4 text-base";

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`btn-glow rounded-full font-bold cursor-pointer ${sizeClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
}
