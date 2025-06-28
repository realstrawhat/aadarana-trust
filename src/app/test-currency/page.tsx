import CurrencyTest from "../../components/CurrencyTest";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TestCurrencyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Currency Symbol Test
            </h1>
            <p className="text-lg text-gray-600">
              This page tests if currency symbols display correctly on Vercel
            </p>
          </div>
          <CurrencyTest />
        </div>
      </div>
      <Footer />
    </div>
  );
} 