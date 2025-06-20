"use client";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  words: string[];
}

export default function AnimatedText({ words }: AnimatedTextProps) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 1400);
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setFade(false);
      }, 200);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [words.length]);

  return (
    <span
      className={`inline-block align-middle font-extrabold ml-2 transition-all duration-300 ease-in-out text-purple-600 whitespace-nowrap
        ${fade ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}
      `}
      style={{ fontSize: 'inherit', lineHeight: 1 }}
      aria-live="polite"
    >
      {words[index]}
    </span>
  );
} 