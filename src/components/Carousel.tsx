"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useSwipeable } from 'react-swipeable';

const slides = [
  {
    image: '/images/gallery/DSC04100.JPG',
    title: 'Deprived of Basic Rights',
    description: 'Millions of children in India are deprived of basic rights like education, healthcare, and protection.'
  },
  {
    image: '/images/gallery/DSC04092.JPG',
    title: 'Children at Risk',
    description: 'Children from poverty-stricken, broken, or unsafe homes often face neglect, abuse, or are forced into child labor.'
  },
  {
    image: '/images/gallery/33.jpg',
    title: 'Rescued from Exploitation',
    description: 'Many come from backgrounds involving street begging, domestic servitude, or are rescued from exploitative environments.'
  },
  {
    image: '/images/gallery/DSC04254.JPG',
    title: 'Girls Lack Basic Safety',
    description: 'Girls, especially, suffer from lack of education, hygiene and safety, making them vulnerable.'
  },
  {
    image: '/images/gallery/44.jpg',
    title: 'Women and girls bear the burden',
    description: 'They walk an average of four miles each day to collect water—work that keeps them out of school and limits their opportunity.'
  },
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
            {slides.map((slide, i) => {
              return (
                <div key={i} className="relative w-full h-72 md:h-[480px] flex-shrink-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    quality={80}
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 1600px"
                    className="object-cover object-center"
                    priority={i === index}
                  />
                  {/* Black tint overlay */}
                  <div className="absolute inset-0 bg-black/40 z-5"></div>
                  {/* Caption overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-black/30 text-white rounded-2xl flex flex-col items-center justify-center text-center w-96 h-40 md:w-[500px] md:h-48 px-6 py-6">
                      <span className="text-xl md:text-3xl font-bold mb-2">{slide.title}</span>
                      {slide.description && (
                        <span className="text-base md:text-xl font-medium opacity-90">{slide.description}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
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
          <span key={i} className={`w-3 h-3 rounded-full ${i === index ? "bg-[#005FA1]" : "bg-gray-300"} block transition-colors`} />
        ))}
      </div>
    </div>
  );
} 