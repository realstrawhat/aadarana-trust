import Image from "next/image";
// import ParticlesClientOnly from "./ParticlesClientOnly";

export default function QuoteSection() {
  return (
    <section className="relative w-full py-16 md:py-28 flex items-center justify-center bg-gray-900 min-h-[400px] md:min-h-[520px]">
      <Image
        src="/images/home/IMG_4896.JPG"
        alt="Background for quote section"
        fill
        quality={80}
        loading="lazy"
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
      <blockquote className="relative z-20 max-w-3xl mx-auto text-center text-white font-semibold italic px-4 md:px-12 py-0 leading-relaxed md:leading-snug">
        <span className="block mb-6 text-2xl md:text-4xl" style={{ fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.01em' }}>
          “The test of our progress is not whether we add more to the abundance of those who have much.<br />It is whether we provide enough for those who have little.”
        </span>
        <span className="block mt-4 text-lg md:text-2xl font-normal not-italic opacity-80">— Franklin D. Roosevelt</span>
      </blockquote>
    </section>
  );
} 