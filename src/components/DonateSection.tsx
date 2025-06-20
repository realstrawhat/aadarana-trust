"use client";

import React, { useState } from "react";

const amounts = [10, 25, 50, 100];

export default function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState(amounts[0]);
  const [frequency, setFrequency] = useState("monthly");

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-20">
      {/* Donate Box */}
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col gap-8 w-full max-w-md md:max-w-lg min-h-[400px] text-lg">
        <h2 className="text-xl font-bold text-purple-700 mb-2">Donate</h2>
        <div className="flex gap-2 mb-4">
          <button
            className={`px-3 py-1 rounded-full text-sm font-semibold border ${frequency === "monthly" ? "bg-purple-700 text-white" : "bg-gray-100 text-gray-700"}`}
            onClick={() => setFrequency("monthly")}
            aria-pressed={frequency === "monthly"}
          >
            Monthly
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm font-semibold border ${frequency === "onetime" ? "bg-purple-700 text-white" : "bg-gray-100 text-gray-700"}`}
            onClick={() => setFrequency("onetime")}
            aria-pressed={frequency === "onetime"}
          >
            One Time
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {amounts.map((amt) => (
            <button
              key={amt}
              className={`px-4 py-2 rounded-lg font-semibold border ${selectedAmount === amt ? "bg-purple-700 text-white" : "bg-gray-100 text-gray-700"}`}
              onClick={() => setSelectedAmount(amt)}
              aria-pressed={selectedAmount === amt}
            >
              ${amt}
            </button>
          ))}
        </div>
        <input
          type="number"
          min={1}
          placeholder="Custom amount"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={e => setSelectedAmount(Number(e.target.value))}
          aria-label="Custom donation amount"
        />
        <button className="mt-4 bg-purple-700 text-white font-bold py-2 rounded-lg hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500">
          Donate {frequency === "monthly" ? "Monthly" : "Once"} ${selectedAmount}
        </button>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Every child deserves a life of security and opportunity..</h3>
        <p className="text-lg text-gray-700">Let&apos;s build that future—together</p>
        <div className="w-full flex flex-col md:flex-row gap-6 mt-8 justify-center items-stretch">
          {[{
            label: "1 Dollar",
            desc: "For every dollar you give"
          }, {
            label: "1 Child",
            desc: "You help one child in need"
          }, {
            label: "1 Day",
            desc: "Of safety, learning, and love"
          }].map((item) => (
            <div
              key={item.label}
              className="bg-purple-600 text-white font-bold border-2 border-purple-600 flex flex-col justify-center items-center flex-1 min-w-[180px] max-w-[220px] min-h-[200px] text-center shadow-lg text-xl md:text-2xl uppercase tracking-wide select-none transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 mx-auto md:mx-0"
              style={{ borderRadius: 0 }}
            >
              <span className="text-2xl md:text-3xl font-extrabold leading-tight whitespace-nowrap mb-2">{item.label}</span>
              <span className="text-base md:text-lg font-medium normal-case tracking-normal leading-snug font-sans">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 