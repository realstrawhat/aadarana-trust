"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { detectUserLocation } from "../../utils/locationUtils";

const impactData: Record<string, Array<{ amount: number; label: string }>> = {
  IN: [
    { amount: 1000, label: "Feeds 5 hungry children for a week with nutritious meals" },
    { amount: 5000, label: "Provides complete education support including books, uniforms & tuition" },
    { amount: 25000, label: "Ensures medical care, hygiene & personal care for a child for a month" },
    { amount: 66000, label: "Transforms one child's entire year with complete care & support" },
  ],
  US: [
    { amount: 12, label: "Feeds 5 hungry children for a week with nutritious meals" },
    { amount: 60, label: "Provides complete education support including books, uniforms & tuition" },
    { amount: 300, label: "Ensures medical care, hygiene & personal care for a child for a month" },
    { amount: 800, label: "Transforms one child's entire year with complete care & support" },
  ],
  GB: [
    { amount: 10, label: "Feeds 5 hungry children for a week with nutritious meals" },
    { amount: 50, label: "Provides complete education support including books, uniforms & tuition" },
    { amount: 250, label: "Ensures medical care, hygiene & personal care for a child for a month" },
    { amount: 660, label: "Transforms one child's entire year with complete care & support" },
  ],
  EU: [
    { amount: 11, label: "Feeds 5 hungry children for a week with nutritious meals" },
    { amount: 55, label: "Provides complete education support including books, uniforms & tuition" },
    { amount: 275, label: "Ensures medical care, hygiene & personal care for a child for a month" },
    { amount: 725, label: "Transforms one child's entire year with complete care & support" },
  ],
};

const currencyMap: Record<string, { symbol: string; name: string }> = {
  IN: { symbol: "₹", name: "INR" },
  US: { symbol: "$", name: "USD" },
  GB: { symbol: "£", name: "GBP" },
  EU: { symbol: "€", name: "EUR" },
};

export default function InternationalDonatePage() {
  const [country, setCountry] = useState("IN");
  const [currency, setCurrency] = useState(currencyMap.IN);
  const [impacts, setImpacts] = useState(impactData.IN);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const { country: userCountry } = await detectUserLocation();
        let code = userCountry;
        // EU countries
        const euCountries = [
          "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE"
        ];
        if (euCountries.includes(code)) code = "EU";
        if (!impactData[code]) code = "IN";
        setCountry(code);
        setCurrency(currencyMap[code] || currencyMap.IN);
        setImpacts(impactData[code] || impactData.IN);
      } catch (error) {
        console.warn("Location detection failed in international donate page, using defaults:", error);
        setCountry("IN");
        setCurrency(currencyMap.IN);
        setImpacts(impactData.IN);
      }
    }
    fetchCountry();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-r from-[#005FA1] to-[#00395c]">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            International Donations
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Support our mission through secure international bank transfers
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Section - Bank Transfer Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#005FA1] mb-4">
                  Bank Transfer Details
                </h2>
                <div className="w-20 h-1 bg-[#005FA1] mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <span className="block text-sm font-semibold text-gray-600 mb-2">Account Name</span>
                      <span className="block text-lg font-bold text-gray-900">Aadarana Trust</span>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-gray-600 mb-2">Account Number</span>
                      <span className="block text-lg font-bold text-gray-900">40393556528</span>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-gray-600 mb-2">IFSC Code</span>
                      <span className="block text-lg font-bold text-gray-900">SBIN0000691</span>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-gray-600 mb-2">SWIFT Code</span>
                      <span className="block text-lg font-bold text-gray-900">SBININBB104</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <div>
                    <span className="block text-sm font-semibold text-gray-600 mb-2">Bank Name & Branch</span>
                    <span className="block text-lg font-bold text-gray-900">State Bank of India, FCRA Cell</span>
                  </div>
                  <div className="mt-4">
                    <span className="block text-sm font-semibold text-gray-600 mb-2">Branch Address</span>
                    <span className="block text-lg font-bold text-gray-900">
                      4th Floor, New Delhi Main Branch,<br/>
                      11, Sansad Marg, New Delhi -110001, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Impact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#005FA1] mb-4">
                  Your Impact Makes a Difference
                </h2>
                <div className="w-20 h-1 bg-[#005FA1] mx-auto rounded-full"></div>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
                This isn't just about food or shelter—it's about meeting the basic human needs every child deserves. It's about restoring dignity, offering hope and building the foundation for a brighter future.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {impacts.map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-[#e0f0fa] to-[#b3d9f2] p-6 rounded-2xl border-l-4 border-[#005FA1]">
                    <div className="text-2xl md:text-3xl font-bold text-[#005FA1] mb-2">
                      {currency.symbol}{item.amount.toLocaleString()}
                    </div>
                    <p className="text-lg font-semibold text-gray-800">{item.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl font-semibold text-gray-800">
                  Together, we can turn abandoned stories into empowered futures.
                </p>
                <p className="text-lg text-gray-700">
                  Thank you for being part of the solution. Every gift you give is an act of compassion—and a step toward lifelong change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 