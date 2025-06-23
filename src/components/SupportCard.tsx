"use client";
import React from 'react';
import { motion } from "framer-motion";

interface SupportCardProps {
  support: string;
}

export default function SupportCard({ support }: SupportCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-[#e0f0fa] p-6 rounded-xl transform transition-all hover:shadow-lg"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-1.5 h-6 bg-[#005FA1] rounded-full" />
        <p className="text-lg text-[#00395c]">{support}</p>
      </div>
    </motion.div>
  );
} 