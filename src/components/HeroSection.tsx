import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bg.webp"
        alt="Children holding hands in sunlight"
        fill
        quality={80}
        loading="eager"
        priority={true}
        sizes="100vw"
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          It All Begins with Compassion
        </h1>
        <p className="text-white text-lg md:text-2xl font-medium drop-shadow-md">
          Shelter. Education. Health. Nutrition. Dignity. Hope.
        </p>
      </div>
    </section>
  );
} 