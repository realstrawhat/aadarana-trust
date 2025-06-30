"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { detectUserLocation, redirectToInternationalDonate } from "../../utils/locationUtils";
import Script from "next/script";

const currencyMap = {
  US: { 
    symbol: "$", 
    impactCards: [
      { amount: 10, description: "Feeds 5 hungry children for a week with nutritious meals" },
      { amount: 50, description: "Provides complete education support including books, uniforms & tuition" },
      { amount: 250, description: "Ensures medical care, hygiene & personal care for a child for a month" },
      { amount: 660, description: "Transforms one child's entire year with complete care & support" }
    ]
  },
  IN: { 
    symbol: "₹", 
    impactCards: [
      { amount: 1000, description: "Feeds 5 hungry children for a week with nutritious meals" },
      { amount: 5000, description: "Provides complete education support including books, uniforms & tuition" },
      { amount: 25000, description: "Ensures medical care, hygiene & personal care for a child for a month" },
      { amount: 66000, description: "Transforms one child's entire year with complete care & support" }
    ]
  },
  GB: { 
    symbol: "£", 
    impactCards: [
      { amount: 10, description: "Feeds 5 hungry children for a week with nutritious meals" },
      { amount: 50, description: "Provides complete education support including books, uniforms & tuition" },
      { amount: 250, description: "Ensures medical care, hygiene & personal care for a child for a month" },
      { amount: 660, description: "Transforms one child's entire year with complete care & support" }
    ]
  },
  EU: { 
    symbol: "€", 
    impactCards: [
      { amount: 10, description: "Feeds 5 hungry children for a week with nutritious meals" },
      { amount: 50, description: "Provides complete education support including books, uniforms & tuition" },
      { amount: 250, description: "Ensures medical care, hygiene & personal care for a child for a month" },
      { amount: 660, description: "Transforms one child's entire year with complete care & support" }
    ]
  }
};

export default function DonatePage() {
  const [currencySymbol, setCurrencySymbol] = useState("₹");
  const [impactCards, setImpactCards] = useState(currencyMap.IN.impactCards);
  const [loading, setLoading] = useState(true);
  const [donationAmount, setDonationAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [isIndian, setIsIndian] = useState(true);

  useEffect(() => {
    async function fetchCountry() {
      try {
        const { country, isIndian: userIsIndian } = await detectUserLocation();
        setIsIndian(userIsIndian);
        
        // Redirect non-Indian users to international donate page
        if (!userIsIndian) {
          redirectToInternationalDonate();
          return;
        }
        
        // EU countries list (partial, can be expanded)
        const euCountries = [
          "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE"
        ];
        let countryCode = country;
        if (euCountries.includes(country)) countryCode = "EU";
        
        const config = currencyMap[countryCode as keyof typeof currencyMap] || currencyMap["IN"];
        setCurrencySymbol(config.symbol);
        setImpactCards(config.impactCards);
      } catch (error) {
        console.warn("Location detection failed in donate page, using defaults:", error);
        setCurrencySymbol("₹");
        setImpactCards(currencyMap.IN.impactCards);
        setIsIndian(true); // Default to Indian if detection fails
      } finally {
        setLoading(false);
      }
    }
    fetchCountry();
  }, []);

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setDonationAmount(amount);
  };

  // Razorpay handler for Indian users
  const handleRazorpay = () => {
    const amount = Number(donationAmount);
    if (!amount || amount < 1) return;
    const options = {
      key: "rzp_test_6N1YIZMdmzothk",
      amount: amount * 100, // in paise
      currency: "INR",
      name: "Aadarana Trust",
      description: `Donation (${isMonthly ? 'Monthly' : 'One Time'})`,
      image: "/images/logo.png",
      handler: function (response: unknown) {
        alert("Payment successful! Payment ID: " + (response as { razorpay_payment_id: string }).razorpay_payment_id);
      },
      prefill: {},
      theme: { color: "#005FA1" },
    };
    // @ts-expect-error
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isIndian) {
      handleRazorpay();
    } else {
      // Handle donation submission here for international
      console.log("Donation submitted:", { amount: donationAmount, isMonthly });
    }
  };

  // Show loading while checking location
  if (loading) {
    return (
      <div className="overflow-x-hidden">
        <Navbar />
        <div className="w-full flex items-center justify-center py-20 min-h-[400px]">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#005FA1]" />
            <span className="text-[#005FA1] font-bold text-lg">Detecting your location...</span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <div className="overflow-x-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center">
          <img
            src="/images/gallery/20240829_154159-2.jpg"
            alt="Background for donate hero section"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ objectPosition: 'center 30%' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Donate Today
            </h1>
            <p className="text-white text-lg md:text-2xl font-medium drop-shadow-md max-w-4xl mx-auto leading-relaxed">
              Every rupee you give brings a child closer to a life of safety, education and love.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
              
              {/* Donation Form - First on mobile, second on desktop */}
              <div className="order-1 lg:order-2 lg:sticky lg:top-8">
                <div className="bg-gradient-to-br from-[#005FA1] to-[#00395c] p-8 rounded-3xl text-white shadow-2xl">
                  <h2 className="text-3xl font-bold mb-6 text-center">Make a Donation</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Donation Type Toggle */}
                    <div className="flex bg-white/20 rounded-full p-1">
                      <button
                        type="button"
                        onClick={() => setIsMonthly(false)}
                        className={`flex-1 py-3 px-6 rounded-full font-bold transition-all ${
                          !isMonthly ? 'bg-white text-[#005FA1]' : 'text-white'
                        }`