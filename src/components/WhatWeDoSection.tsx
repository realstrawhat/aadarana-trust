export default function WhatWeDoSection() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">This is what we do best</h2>
      <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/videos/poster.webp"
          className="w-full h-auto object-cover"
        >
          <source src="/videos/desktop.mp4" media="(min-width: 1024px)" />
          <source src="/videos/tablet.mp4" media="(min-width: 768px)" />
          <source src="/videos/mobile.mp4" />
        </video>
      </div>
    </section>
  );
} 