"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const slides = [
  {
    image: '/images/child1.jpg',
    fact: 'Millions of children in India are deprived of basic rights like education, healthcare and protection.'
  },
  {
    image: '/images/child2.jpg',
    fact: 'Children from poverty-stricken, broken, or unsafe homes often face neglect, abuse, or are forced into child labor.'
  },
  {
    image: '/images/child3.jpg',
    fact: 'Many come from backgrounds involving street begging, domestic servitude, or are rescued from exploitative environments.'
  },
  {
    image: '/images/child4.jpg',
    fact: 'Girls, especially, suffer from lack of education, hygiene and safety.'
  }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <section className="relative w-screen max-w-none h-[500px] overflow-hidden bg-gray-100">
      {/* Slides */}
      <div className="w-full h-full flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full h-[500px] flex-shrink-0">
            <Image
              src={slide.image}
              alt={`Carousel ${i + 1}`}
              fill
              quality={80}
              loading="eager"
              sizes="100vw"
              className="object-cover object-center"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority={i === index}
            />
            {/* Overlay Fact Box */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-white bg-opacity-90 rounded-md shadow-lg max-w-md w-[400px] px-6 py-4">
                <span className="text-xl font-semibold text-center text-gray-900 block">
                  {slide.fact}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-6 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-200 z-30 focus:outline-none"
        aria-label="Previous slide"
        type="button"
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-6 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-200 z-30 focus:outline-none"
        aria-label="Next slide"
        type="button"
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-700" />
      </button>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <span key={i} className={`w-3 h-3 rounded-full ${i === index ? "bg-purple-600" : "bg-white/60"} block`} />
        ))}
      </div>
    </section>
  );
} 