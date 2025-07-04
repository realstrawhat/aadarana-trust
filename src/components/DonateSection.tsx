"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { detectUserLocation, redirectToInternationalDonate } from "../utils/locationUtils";

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id?: string;
  handler: (response: { razorpay_payment_id: string; }) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color?: string;
  };
}

interface RazorpayInstance {
  open: () => void;
}

interface RazorpayWindow extends Window {
  Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
}

declare const window: RazorpayWindow;

const currencyMap = {
  US: { symbol: "$", amounts: [10, 25, 50, 100] },
  IN: { symbol: "₹", amounts: [100, 250, 500, 1000] },
  GB: { symbol: "£", amounts: [10, 20, 50, 100] },
  EU: { symbol: "€", amounts: [10, 25, 50, 100] },
};

export default function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
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
        
        const config = currencyMap[countryCode as keyof typeof currencyMap] || currencyMap["IN"];
        setCurrencySymbol(config.symbol);
        setAmounts(config.amounts);
        setSelectedAmount(config.amounts[0]);
      } catch (error) {
        console.warn("Location detection failed in DonateSection, using defaults:", error);
        // Default to non-Indian (USD) if detection fails, to be safe.
        setCurrencySymbol("$");
        setAmounts([10, 25, 50, 100]);
        setSelectedAmount(10);
        setIsIndian(false);
      } finally {
        setLoading(false);
      }
    }
    fetchCountry();
  }, []);

  const handleDonateClick = async () => {
    if (!isIndian) {
      redirectToInternationalDonate();
      return;
    }

    if (!selectedAmount || selectedAmount <= 0) {
      alert("Please select or enter a valid donation amount.");
      return;
    }

    // Fetch order_id from backend
    const amountInPaise = selectedAmount * 100;
    let order_id = "";
    try {
      const res = await fetch("/api/razorpay-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountInPaise, currency: "INR" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Order creation failed");
      order_id = data.order_id;
    } catch (err) {
      alert("Failed to initiate payment. Please try again.");
      return;
    }

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: amountInPaise, // amount in the smallest currency unit
      currency: 'INR',
      name: 'Aadarana Trust',
      description: 'Donate to support children',
      order_id,
      handler: function (response: { razorpay_payment_id: string }) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // You can handle the success response here
      },
      theme: {
        color: '#005FA1',
      },
    };

    const rzp = new (window as unknown as RazorpayWindow).Razorpay(options);
    rzp.open();
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
    <>
      <Script
        id="razorpay-checkout-js-donatesection"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-20 bg-gray-100">
        {/* Donate Box */}
        <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col gap-8 w-full max-w-md md:max-w-lg min-h-[400px] text-lg">
          <h2 className="text-xl font-bold text-[#005FA1] mb-2">Donate</h2>
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
            Donate {currencySymbol}{selectedAmount}
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
    </>
  );
} 