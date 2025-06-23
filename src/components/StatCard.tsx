"use client";
import React from 'react';
import { motion } from "framer-motion";

interface StatCardProps {
  number: string;
  description: string;
}

export default function StatCard({ number, description }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-[#e0f0fa] p-8 rounded-xl text-center transform transition-all hover:shadow-xl"
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-[#005FA1] mb-4"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {number}
      </motion.h2>
      <p className="text-[#00395c]">{description}</p>
    </motion.div>
  );
} 