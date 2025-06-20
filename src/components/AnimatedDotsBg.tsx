"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Dot {
  size: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  blur: string;
}

export default function AnimatedDotsBg() {
  const [dots, setDots] = useState<Dot[] | null>(null);

  useEffect(() => {
    const generatedDots = Array.from({ length: 18 }, () => ({
      size: Math.random() * 32 + 16,
      top: Math.random() * 90 + "%",
      left: Math.random() * 100 + "%",
      delay: Math.random() * 4,
      duration: Math.random() * 6 + 6,
      blur: Math.random() > 0.5 ? "blur-sm" : "blur-md",
    }));
    setDots(generatedDots);
  }, []);

  if (!dots) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, opacity: 0.5 }}
          animate={{ x: 120, opacity: 0.7 }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: dot.duration,
            delay: dot.delay,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full bg-white/20 ${dot.blur}`}
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.top,
            left: dot.left,
            filter: "brightness(1.2) blur(2px)",
          }}
        />
      ))}
    </div>
  );
} 