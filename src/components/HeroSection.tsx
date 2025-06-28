import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/home/1-2.webp"
        alt="Aadarana Trust children smiling and playing together in the home courtyard"
        fill
        quality={80}
        loading="eager"
        priority={true}
        sizes="100vw"
        className="object-cover object-left md:object-top z-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center px-4 mt-8">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-center max-w-4xl mx-auto">
          It All Begins with Compassion
        </h1>
        <p className="text-white text-lg md:text-2xl font-medium drop-shadow-md text-center max-w-3xl mx-auto">
          Shelter. Education. Health. Nutrition. Dignity. Hope.
        </p>
      </div>
    </section>
  );
} 