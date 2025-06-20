"use client";
import React, { useState, useEffect, useRef } from 'react';
import WhySection from '../../components/WhySection';
import ImpactSection from '../../components/ImpactSection';
import QuoteSection from '../../components/QuoteSection';
import Footer from '../../components/Footer';
import Image from 'next/image';

const heroWords = [
  "Dignity",
  "Joy",
  "Stability",
  "Learning",
  "Safety",
  "Progress"
];

function CustomChildrenHeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setFade(true), 1800);
    intervalRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % heroWords.length);
        setFade(true);
      }, 200);
    }, 2000);
    setFade(true);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Find the longest word for width calculation
  const maxWord = heroWords.reduce((a, b) => (a.length > b.length ? a : b));

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-black">
      <Image src="/images/hero-bg.webp" alt="Children" fill quality={80} loading="eager" priority sizes="100vw" className="object-cover z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center px-4">
        <div className="flex flex-row items-center justify-center w-full">
          <span className="text-white text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-xl tracking-tight select-none" style={{lineHeight:1}}>
            Childhood is
          </span>
          <span
            className="ml-6 mb-8 inline-block align-middle font-extrabold text-5xl md:text-7xl tracking-tight select-none relative"
            style={{
              width: `calc(${maxWord.length}ch + 0.5em)`,
              minWidth: `${maxWord.length}ch`,
              maxWidth: `${maxWord.length}ch`,
              height: '1.1em',
              display: 'inline-block',
              verticalAlign: 'middle',
              overflow: 'hidden',
              position: 'relative',
            }}
            aria-live="polite"
          >
            <span
              className={`absolute left-0 top-0 w-full transition-all duration-500 ease-in-out ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} text-purple-400 whitespace-nowrap`}
              style={{ willChange: 'opacity, transform' }}
              key={heroWords[index]}
            >
              {heroWords[index]}
            </span>
          </span>
        </div>
        <p className="text-white text-2xl md:text-3xl mb-8 font-medium drop-shadow-lg">The solution is simple. The impact is lifelong.</p>
        <button className="bg-purple-600 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:bg-purple-700 transition-colors text-xl">Donate Now</button>
      </div>
    </section>
  );
}

export default function ChildrenHomePage() {
  return (
    <main className="bg-white w-full min-h-screen flex flex-col">
      <CustomChildrenHeroSection />
      <WhySection />
      {/* CarouselSection removed. Leave space for future carousel. */}
      <section className="w-full h-[500px] flex items-center justify-center bg-purple-50">
        {/* Carousel will go here */}
      </section>
      <ImpactSection />
      <QuoteSection />
      <Footer />
    </main>
  );
}

function AccordionRow({ item, idx }: { item: { title: string; content: string }; idx: number }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-2 text-left text-lg font-semibold text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
        aria-expanded={open}
        aria-controls={`accordion-content-${idx}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{item.title}</span>
        <svg className={`w-6 h-6 ml-2 transition-transform duration-300 text-purple-500 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      <div
        id={`accordion-content-${idx}`}
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${open ? 'max-h-40 py-2 px-2' : 'max-h-0 py-0 px-2'}`}
        aria-hidden={!open}
      >
        <div className="text-base text-gray-700 font-normal leading-relaxed">
          {item.content}
        </div>
      </div>
    </div>
  );
} 