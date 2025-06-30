"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import Script from "next/script";
import { detectUserLocation, redirectToInternationalDonate } from "../../utils/locationUtils";

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
        // If detection fails, default to Indian settings and remain on the page.
        setCurrencySymbol("₹");
        setImpactCards(currencyMap.IN.impactCards);
        setIsIndian(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCountry();
  }, []);

  const handleDonate = async () => {
    if (!isIndian) {
      redirectToInternationalDonate();
      return;
    }

    const amountInPaise = parseInt(donationAmount) * 100;
    if (isNaN(amountInPaise) || amountInPaise <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const options: RazorpayOptions = {
      key: 'rzp_live_sF65PhDjCbaFNh',
      amount: amountInPaise,
      currency: 'INR',
      name: 'Aadarana Trust',
      description: 'Donate to support children',
      handler: function (response: { razorpay_payment_id: string }) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // You can handle the success response here (e.g., send to your backend)
      },
      prefill: {
        name: 'Aadarana Donor',
        email: 'test@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#005FA1',
      },
    };

    const rzp = new (window as unknown as RazorpayWindow).Razorpay(options);
    rzp.open();
  };

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setDonationAmount(amount);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDonate();
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
    <div className="overflow-x-hidden">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
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
                      }`}
                    >
                      One Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMonthly(true)}
                      className={`flex-1 py-3 px-6 rounded-full font-bold transition-all ${
                        isMonthly ? 'bg-white text-[#005FA1]' : 'text-white'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>

                  {/* Quick Amount Selection */}
                  <div>
                    <label className="block text-lg font-semibold mb-3">Select Amount</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { amount: 1000, description: "provides a week's worth of meals for 5 children" },
                        { amount: 5000, description: "helps cover school tuition, books and uniforms" },
                        { amount: 25000, description: "supports medical care, hygiene and personal needs for a month" },
                        { amount: 66000, description: "sponsors one child's complete care for an entire year" }
                      ].map((item) => (
                        <button
                          key={item.amount}
                          type="button"
                          onClick={() => handleAmountSelect(item.amount.toString())}
                          className={`py-3 px-4 rounded-xl font-bold transition-all text-left ${
                            selectedAmount === item.amount.toString()
                              ? 'bg-white text-[#005FA1]'
                              : 'bg-white/20 text-white hover:bg-white/30'
                          }`}
                        >
                          <div className="text-lg">{currencySymbol}{item.amount.toLocaleString()}</div>
                          <div className="text-xs font-normal mt-1">{item.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <label htmlFor="customAmount" className="block text-lg font-semibold mb-3">
                      Or enter custom amount
                    </label>
                    <input
                      type="number"
                      id="customAmount"
                      value={donationAmount}
                      onChange={(e) => {
                        setDonationAmount(e.target.value);
                        setSelectedAmount("");
                      }}
                      placeholder={`Enter amount in ${currencySymbol}`}
                      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-white text-[#005FA1] font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors text-lg"
                  >
                    {isMonthly ? 'Start Monthly Donation' : 'Donate Now'}
                  </button>

                  <p className="text-sm text-white/80 text-center">
                    Your donation is secure and tax-deductible. We'll send you a receipt via email.
                  </p>
                </form>
              </div>
              
              {/* International Donor Link */}
              <div className="mt-6 text-center">
                <a 
                  href="/international-donate" 
                  className="inline-block bg-[#005FA1] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#00395c] transition-colors text-lg"
                >
                  International donor? Please Click here
                </a>
              </div>
            </div>

            {/* Left Side - Content - Second on mobile, first on desktop */}
            <div className="text-gray-800 space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#005FA1] mb-6">
                  Your Impact Makes a Difference
                </h2>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  This isn't just about food or shelter—it's about meeting the basic human needs every child deserves. It's about restoring dignity, offering hope and building the foundation for a brighter future.
                </p>
              </div>

              {/* Impact Cards */}
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-200 p-6 rounded-2xl animate-pulse">
                      <div className="h-8 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {impactCards.map((card, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#e0f0fa] to-[#b3d9f2] p-6 rounded-2xl border-l-4 border-[#005FA1]">
                      <div className="text-2xl md:text-3xl font-bold text-[#005FA1] mb-2">
                        {currencySymbol}{card.amount.toLocaleString()}
                      </div>
                      <p className="text-lg font-semibold text-gray-800">{card.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Call to Action */}
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