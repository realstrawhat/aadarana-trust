"use client";

import { getCurrencySymbol, currencySymbolClass } from "../utils/currencyUtils";

export default function CurrencyTest() {
  const currencies = [
    { code: "IN", name: "Indian Rupee" },
    { code: "US", name: "US Dollar" },
    { code: "GB", name: "British Pound" },
    { code: "EU", name: "Euro" },
  ];

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Currency Symbol Test</h2>
      <div className="space-y-4">
        {currencies.map((currency) => (
          <div key={currency.code} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="font-semibold text-gray-700">{currency.name}</span>
            <span className={`text-2xl font-bold text-blue-600 ${currencySymbolClass}`}>
              {getCurrencySymbol(currency.code)}1,000
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          If you can see all currency symbols above, they are displaying correctly.
        </p>
      </div>
    </div>
  );
} 