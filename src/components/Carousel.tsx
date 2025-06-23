"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useSwipeable } from 'react-swipeable';

const slides = [
  { image: '/images/child1.webp', caption: 'Millions of children in India are deprived of basic rights like education, healthcare and protection.' },
  { image: '/images/child2.webp', caption: 'Children from poverty-stricken, broken, or unsafe homes often face neglect, abuse, or are forced into child labor.' },
  { image: '/images/child3.webp', caption: 'Many come from backgrounds involving street begging, domestic servitude, or are rescued from exploitative environments.' },
  { image: '/images/child4.webp', caption: 'Girls, especially, suffer from lack of education, hygiene and safety.' },
  { image: '/images/child5.webp', caption: 'Millions of children in India are deprived of basic rights like education, healthcare and protection.' },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: false,
  });

  return (
    <div className="relative w-full flex flex-col items-center px-4">
      <div className="relative mx-auto max-w-6xl w-full">
        <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden bg-white">
          <div
            className="w-full h-72 md:h-[480px] flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
            {...handlers}
          >
            {slides.map((slide, i) => (
              <div key={i} className="relative w-full h-72 md:h-[480px] flex-shrink-0">
                <Image
                  src={slide.image}
                  alt={slide.caption}
                  fill
                  quality={80}
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 1600px"
                  className="object-cover object-center"
                  priority={i === index}
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="bg-white text-gray-900 text-base md:text-2xl font-bold px-6 py-3 rounded-xl shadow-lg border border-gray-200 text-center max-w-[90%]">
                    {slide.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Arrows - hidden on mobile, visible on md+ */}
        <button
          onClick={prev}
          className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-purple-100 z-30 focus:outline-none border border-purple-200"
          aria-label="Previous slide"
          type="button"
        >
          <ChevronLeftIcon className="w-7 h-7 text-purple-700" />
        </button>
        <button
          onClick={next}
          className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 translate-x-full w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-purple-100 z-30 focus:outline-none border border-purple-200"
          aria-label="Next slide"
          type="button"
        >
          <ChevronRightIcon className="w-7 h-7 text-purple-700" />
        </button>
      </div>
      {/* Dots */}
      <div className="mt-4 flex gap-2 z-20">
        {slides.map((_, i) => (
          <span key={i} className={`w-3 h-3 rounded-full ${i === index ? "bg-purple-600" : "bg-gray-300"} block transition-colors`} />
        ))}
      </div>
    </div>
  );
} 