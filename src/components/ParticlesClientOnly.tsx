"use client";
import dynamic from "next/dynamic";
const AnimatedParticlesBg = dynamic(() => import("./AnimatedParticlesBg"), { ssr: false });

export default function ParticlesClientOnly() {
  return <AnimatedParticlesBg />;
} 