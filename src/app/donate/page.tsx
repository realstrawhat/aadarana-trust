"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { detectUserLocation, redirectToInternationalDonate } from "../../utils/locationUtils";
import { getCurrencySymbol, currencySymbolClass } from "../../utils/currencyUtils";

const currencyMap = {
  US: { symbol: "$", amounts: [10, 25, 50, 100] },
  IN: { symbol: "₹", amounts: [100, 250, 500, 1000] },
  GB: { symbol: "£", amounts: [10, 20, 50, 100] },
  EU: { symbol: "€", amounts: [10, 25, 50, 100] },
};

const impactCards = [
  {
    title: "Education",
    description: "Provide books, uniforms, and school supplies",
    icon: "📚",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Healthcare",
    description: "Medical checkups, vaccinations, and treatment",
    icon: "🏥",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Nutrition",
    description: "Three nutritious meals every day",
    icon: "🍎",
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Shelter",
    description: "Safe and comfortable living environment",
    icon: "🏠",
    color: "from-purple-500 to-purple-600"
  }
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [frequency, setFrequency] = useState("monthly");
  const [currencySymbol, setCurrencySymbol] = useState("₹");
  const [amounts, setAmounts] = useState<number[]>([100, 250, 500, 1000]);
  const [loading, setLoading] = useState(true);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const { country } = await detectUserLocation();
        
        // EU countries list (partial, can be expanded)
        const euCountries = [
          "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE"
        ];
        let countryCode = country;
        if (euCountries.includes(country)) countryCode = "EU";
        
        const config = currencyMap[countryCode as keyof typeof currencyMap] || currencyMap["IN"];
        const symbol = getCurrencySymbol(countryCode, useFallback);
        setCurrencySymbol(symbol);
        setAmounts(config.amounts);
        setSelectedAmount(config.amounts[0]);
      } catch (error) {
        console.warn("Location detection failed in donate page, using defaults:", error);
        setCurrencySymbol("₹");
        setAmounts([100, 250, 500, 1000]);
        setSelectedAmount(100);
      } finally {
        setLoading(false);
      }
    }
    fetchCountry();
  }, [useFallback]);

  const handleDonateClick = () => {
    // Redirect to FormBold or payment gateway
    window.open("https://formbold.com/s/your-form-id", "_blank");
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#005FA1]" />
            <span className="text-[#005FA1] font-bold text-lg">Loading...</span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/donate-hero.webp')",
            backgroundPosition: "center 30%"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Make a Difference Today
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Your donation helps provide care, education, and hope to vulnerable children
          </p>
        </div>
      </section>

      {/* Impact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every donation makes a real difference in a child's life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactCards.map((card, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center text-2xl`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#005FA1] mb-4">
                Choose Your Donation
              </h2>
              <p className="text-lg text-gray-600">
                Select an amount and frequency that works for you
              </p>
            </div>

            {/* Frequency Toggle */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                className={`px-6 py-3 rounded-full text-lg font-semibold border-2 transition-colors ${
                  frequency === "monthly" 
                    ? "bg-[#005FA1] text-white border-[#005FA1]" 
                    : "bg-white text-gray-700 border-gray-300 hover:border-[#005FA1]"
                }`}
                onClick={() => setFrequency("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-3 rounded-full text-lg font-semibold border-2 transition-colors ${
                  frequency === "onetime" 
                    ? "bg-[#005FA1] text-white border-[#005FA1]" 
                    : "bg-white text-gray-700 border-gray-300 hover:border-[#005FA1]"
                }`}
                onClick={() => setFrequency("onetime")}
              >
                One Time
              </button>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedAmount === amount
                      ? "bg-[#005FA1] text-white border-[#005FA1] scale-105"
                      : "bg-white text-gray-700 border-gray-300 hover:border-[#005FA1] hover:scale-105"
                  }`}
                  onClick={() => setSelectedAmount(amount)}
                >
                  <div className={`text-2xl font-bold ${currencySymbolClass}`}>
                    {currencySymbol}{amount}
                  </div>
                  <div className="text-sm mt-1">
                    {amount === 100 && "Basic care"}
                    {amount === 250 && "Education support"}
                    {amount === 500 && "Healthcare & nutrition"}
                    {amount === 1000 && "Complete care"}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Or enter a custom amount:
              </label>
              <input
                type="number"
                min="1"
                placeholder="Enter amount"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:border-[#005FA1] text-lg"
                onChange={(e) => setSelectedAmount(Number(e.target.value))}
              />
            </div>

            {/* Donate Button */}
            <div className="text-center">
              <button
                className="bg-[#005FA1] text-white font-bold py-4 px-8 rounded-xl text-xl hover:bg-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#005FA1] focus:ring-offset-2"
                onClick={handleDonateClick}
              >
                Donate {frequency === "monthly" ? "Monthly" : "Once"} <span className={currencySymbolClass}>{currencySymbol}{selectedAmount}</span>
              </button>
            </div>

            {/* International Donor Link */}
            <div className="text-center mt-6">
              <button
                className="text-[#005FA1] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#005FA1] rounded"
                onClick={() => window.open('/international-donate', '_blank')}
              >
                International donor? Please Click here.
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 