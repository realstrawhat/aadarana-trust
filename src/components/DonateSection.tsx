"use client";

import React, { useState, useEffect } from "react";
import { detectUserLocation, redirectToInternationalDonate } from "../utils/locationUtils";

const currencyMap = {
  US: { symbol: "$", amounts: [10, 25, 50, 100] },
  IN: { symbol: "₹", amounts: [100, 250, 500, 1000] },
  GB: { symbol: "£", amounts: [10, 20, 50, 100] },
  EU: { symbol: "€", amounts: [10, 25, 50, 100] },
};

export default function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [frequency, setFrequency] = useState("monthly");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [amounts, setAmounts] = useState<number[]>([10, 25, 50, 100]);
  const [loading, setLoading] = useState(true);
  const [isIndian, setIsIndian] = useState(true);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const { country, isIndian: userIsIndian } = await detectUserLocation();
        setIsIndian(userIsIndian);
        
        // EU countries list (partial, can be expanded)
        const euCountries = [
          "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE"
        ];
        let countryCode = country;
        if (euCountries.includes(country)) countryCode = "EU";
        
        const config = currencyMap[countryCode as keyof typeof currencyMap] || currencyMap["US"];
        setCurrencySymbol(config.symbol);
        setAmounts(config.amounts);
        setSelectedAmount(config.amounts[0]);
      } catch (error) {
        console.warn("Location detection failed in DonateSection, using defaults:", error);
        setCurrencySymbol("$");
        setAmounts([10, 25, 50, 100]);
        setSelectedAmount(10);
        setIsIndian(false); // Default to non-Indian if detection fails
      } finally {
        setLoading(false);
      }
    }
    fetchCountry();
  }, []);

  const handleDonateClick = () => {
    if (!isIndian) {
      redirectToInternationalDonate();
    } else {
      // For Indian users, navigate to the donate page
      window.location.href = '/donate';
    }
  };

  if (loading) {
    return (
      <section className="w-full flex items-center justify-center py-20 min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#005FA1]" />
          <span className="text-[#005FA1] font-bold text-lg">Detecting your location...</span>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-20">
      {/* Donate Box */}
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col gap-8 w-full max-w-md md:max-w-lg min-h-[400px] text-lg">
        <h2 className="text-xl font-bold text-[#005FA1] mb-2">Donate</h2>
        <div className="flex gap-2 mb-4">
          <button
            className={`px-3 py-1 rounded-full text-sm font-semibold border ${frequency === "monthly" ? "bg-[#005FA1] text-white" : "bg-gray-100 text-gray-700"}`}
            onClick={() => setFrequency("monthly")}
            aria-pressed={frequency === "monthly"}
          >
            Monthly
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm font-semibold border ${frequency === "onetime" ? "bg-[#005FA1] text-white" : "bg-gray-100 text-gray-700"}`}
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
              className={`px-4 py-2 rounded-lg font-semibold border ${selectedAmount === amt ? "bg-[#005FA1] text-white" : "bg-gray-100 text-gray-700"}`}
              onClick={() => setSelectedAmount(amt)}
              aria-pressed={selectedAmount === amt}
            >
              {currencySymbol}{amt}
            </button>
          ))}
        </div>
        <input
          type="number"
          min={1}
          placeholder="Custom amount"
          className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005FA1]"
          onChange={e => setSelectedAmount(Number(e.target.value))}
          aria-label="Custom donation amount"
        />
        <button 
          className="mt-4 bg-[#005FA1] text-white font-bold py-2 rounded-lg hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#005FA1]"
          onClick={handleDonateClick}
        >
          Donate {frequency === "monthly" ? "Monthly" : "Once"} {currencySymbol}{selectedAmount}
        </button>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex flex-col gap-6 max-w-xl">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Every child deserves a life of security and opportunity..</h3>
        <p className="text-lg text-gray-700">Let&apos;s build that future—together</p>
        <div className="w-full flex flex-col md:flex-row gap-6 mt-8 justify-center items-stretch">
          {[{
            label: currencySymbol === '₹' ? `100 ${currencySymbol}` : `1 ${currencySymbol === '$' ? 'Dollar' : currencySymbol === '£' ? 'Pound' : currencySymbol === '€' ? 'Euro' : 'Unit'}`,
            desc: currencySymbol === '₹' ? 'For every 100 you give' : 'For every unit you give'
          }, {
            label: "1 Child",
            desc: "You help one child in need"
          }, {
            label: "1 Day",
            desc: "Of safety, learning, and love"
          }].map((item) => (
            <div
              key={item.label}
              className="bg-[#005FA1] text-white font-bold border-2 border-[#005FA1] flex flex-col justify-center items-center w-56 min-h-[200px] text-center shadow-lg text-xl md:text-2xl uppercase tracking-wide select-none transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#005FA1] mx-auto md:mx-0"
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