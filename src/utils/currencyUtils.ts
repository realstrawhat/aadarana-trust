import React from 'react';

export const currencySymbols = {
  IN: { symbol: "₹", fallback: "Rs", name: "INR" },
  US: { symbol: "$", fallback: "$", name: "USD" },
  GB: { symbol: "£", fallback: "GBP", name: "GBP" },
  EU: { symbol: "€", fallback: "EUR", name: "EUR" },
};

export function getCurrencySymbol(country: string, useFallback = false): string {
  const currency = currencySymbols[country as keyof typeof currencySymbols] || currencySymbols.IN;
  return useFallback ? currency.fallback : currency.symbol;
}

export function formatCurrency(amount: number, country: string, useFallback = false): string {
  const currency = currencySymbols[country as keyof typeof currencySymbols] || currencySymbols.IN;
  const symbol = useFallback ? currency.fallback : currency.symbol;
  
  // Format the amount with proper locale
  const locale = country === 'IN' ? 'en-IN' : 
                 country === 'US' ? 'en-US' : 
                 country === 'GB' ? 'en-GB' : 
                 country === 'EU' ? 'de-DE' : 'en-IN';
  
  return `${symbol}${amount.toLocaleString(locale)}`;
}

// CSS class to ensure currency symbols display properly
export const currencySymbolClass = "font-sans [font-feature-settings:'tnum'] [font-variant-numeric:tabular-nums]";

// Function to detect if currency symbols are supported
export function detectCurrencySupport(): boolean {
  if (typeof window === 'undefined') return true; // Server-side, assume support
  
  const testElement = document.createElement('span');
  testElement.style.fontFamily = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  testElement.style.position = 'absolute';
  testElement.style.left = '-9999px';
  testElement.textContent = '₹£€$';
  
  document.body.appendChild(testElement);
  const width = testElement.offsetWidth;
  document.body.removeChild(testElement);
  
  // If width is very small, symbols might not be rendering properly
  return width > 20;
}

// Hook to automatically use fallbacks if symbols aren't supported
export function useCurrencyFallback(): boolean {
  const [useFallback, setUseFallback] = React.useState(false);
  
  React.useEffect(() => {
    if (!detectCurrencySupport()) {
      setUseFallback(true);
    }
  }, []);
  
  return useFallback;
} 