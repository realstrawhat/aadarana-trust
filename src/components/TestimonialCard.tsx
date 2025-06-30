"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative mb-6">
        <Image
          src="/quote.svg"
          alt="Quote mark"
          width={40}
          height={40}
          className="absolute -top-4 -left-4 opacity-20"
        />
      </div>
      <p className="text-xl mb-4 italic text-gray-700 relative z-10">{quote}</p>
      <div className="flex items-center">
        <div className="h-0.5 w-8 bg-[#005FA1] mr-3" />
        <p className="text-[#005FA1] font-semibold">— {author}</p>
      </div>
    </motion.div>
  );
} 