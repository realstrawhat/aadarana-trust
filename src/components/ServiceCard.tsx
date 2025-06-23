"use client";
import React from 'react';
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: string;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="w-3 h-3 rounded-full bg-[#005FA1]"
      />
      <p className="text-lg text-gray-800">{service}</p>
    </motion.div>
  );
} 