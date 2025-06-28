"use client";

import ParticlesClientOnly from "./ParticlesClientOnly";

export default function ImpactSection() {
  return (
    <section className="relative w-full py-16 bg-[#005FA1] overflow-hidden">
      <ParticlesClientOnly />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 px-4">
        <div className="flex-1 text-[#e0f0fa] flex flex-col items-start justify-start">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 self-start">How is Aadarana Trust for humanity?</h2>
        </div>
        <div className="flex-1 text-white flex flex-col gap-10">
          <p className="text-lg md:text-xl font-semibold leading-relaxed text-left">
            At Aadarana Trust, we believe that no child should suffer for the circumstances they were born into. We care for orphaned, abandoned, and vulnerable children—offering them not just survival, but a home filled with warmth, learning, and hope. When a child receives food, education, and love, everything changes. They dream again. They learn. They grow into citizens who give back. This isn't just about charity. It's about transformation. Every meal shared, every book opened, every blanket provided—it all adds up to a life no longer defined by fear or neglect.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-white text-[#005FA1] font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-[#e0f0fa] transition-colors focus:outline-none focus:ring-2 focus:ring-white text-lg md:text-xl">
              See Impact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 