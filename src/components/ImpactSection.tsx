"use client";

import ParticlesClientOnly from "./ParticlesClientOnly";

export default function ImpactSection() {
  return (
    <section className="relative w-full py-16 bg-purple-700 overflow-hidden">
      <ParticlesClientOnly />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 px-4">
        <div className="flex-1 text-white flex flex-col items-start justify-start">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 self-start">How is Aadarana Trust for humanity?</h2>
        </div>
        <div className="flex-1 text-white flex flex-col gap-10">
          <p className="text-sm md:text-base font-bold leading-relaxed md:leading-loose tracking-wide max-w-2xl mx-auto md:mx-0 text-justify md:text-left text-center">
            At Aadarana Trust, we believe that no child should suffer for the circumstances they were born into.<br/>
            We care for orphaned, abandoned, and vulnerable children—offering them not just survival, but a home filled with warmth, learning, and hope.<br/>
            When a child receives food, education, and love, everything changes.<br/>
            They dream again.<br/>
            They learn.<br/>
            They grow into citizens who give back.<br/>
            This isn&apos;t just about charity. It&apos;s about transformation.<br/>
            Every meal shared, every book opened, every blanket provided—it all adds up to a life no longer defined by fear or neglect.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-white text-purple-700 font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-purple-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white text-lg md:text-xl">
              See Impact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 