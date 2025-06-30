"use client";
import React from "react";
import Navbar from "../../../aadarana-trust/src/components/Navbar";
import Footer from "../../../aadarana-trust/src/components/Footer";
import ParticlesClientOnly from "../../../aadarana-trust/src/components/ParticlesClientOnly";

export default function OurStoryPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-[#005FA1]">
          <ParticlesClientOnly />
          <div className="absolute inset-0 bg-gradient-to-b from-[#005FA1]/80 via-[#005FA1]/60 to-[#005FA1]/90 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center px-4">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-xl tracking-tight">
              All great movements start with a great story.<br className="hidden md:block" /> This is ours.
            </h1>
          </div>
        </section>
        {/* Story Section */}
        <section className="w-full py-20 flex flex-col items-center bg-white px-4">
          <p className="max-w-3xl text-lg md:text-2xl text-center text-gray-800 font-semibold leading-relaxed mb-8">
            Aadarana Trust was founded by Mr. Nandigama Kiran in 2013, after a life-changing mission to the slums of Telangana. There, he witnessed first-hand the harsh realities faced by orphaned and abandoned children—many of whom had no food, shelter, education, or even a name.<br /><br />
            That moment of truth gave rise to a lifelong mission: To provide vulnerable children not only a safe home, but a childhood filled with dignity, love and opportunity.<br /><br />
            Aadarana (which means compassion) began humbly with just 8 children in a small rented home. Over time, the trust grew—steadily, quietly, and powerfully—into a beacon of hope for more than 65 boys and girls, and a trusted organization recognized for its integrity, impact and heart.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
} 