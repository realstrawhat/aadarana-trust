import React, { useEffect, useState } from "react";

const PARTICLE_COUNT = 60;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface Particle {
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
  i: number;
}

export default function AnimatedParticlesBg() {
  const [particles, setParticles] = useState<Particle[] | null>(null);

  useEffect(() => {
    const generated = Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      const size = randomBetween(12, 32);
      const top = randomBetween(0, 100);
      // Evenly distribute left positions across the width
      const left = (i / PARTICLE_COUNT) * 100;
      const duration = randomBetween(18, 32);
      // Use negative delay so all particles are in motion immediately
      const delay = -randomBetween(0, duration);
      return { size, top, left, duration, delay, i };
    });
    setParticles(generated);
  }, []);

  if (!particles) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <style>{`
        @keyframes moveRight {
          0% { transform: translateX(-10vw); }
          100% { transform: translateX(110vw); }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.i}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animation: `moveRight ${p.duration}s linear ${p.delay}s infinite`,
            background:
              "radial-gradient(hsl(207, 100%, 80%) 0%, hsl(207, 100%, 80%) 40%, transparent 100%)",
            borderRadius: "50%",
            opacity: 0.7,
            filter: "blur(1.5px)",
            pointerEvents: "none",
            zIndex: 0,
            mixBlendMode: "screen",
          }}
        />
      ))}
    </div>
  );
} 