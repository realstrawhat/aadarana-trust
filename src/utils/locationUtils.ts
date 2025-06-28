export async function detectUserLocation(): Promise<{ country: string; isIndian: boolean }> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
    
    const res = await fetch("https://ipapi.co/json/", {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    const country = data.country || "IN";
    const isIndian = country === "IN";
    
    return { country, isIndian };
  } catch (error) {
    console.warn("Location detection failed, defaulting to Indian user:", error);
    // Default to Indian user if detection fails
    return { country: "IN", isIndian: true };
  }
}

export function redirectToInternationalDonate() {
  if (typeof window !== 'undefined') {
    window.location.href = '/international-donate';
  }
}

export function shouldRedirectToInternational(): boolean {
  // Check if we're already on the international donate page
  if (typeof window !== 'undefined') {
    return window.location.pathname === '/international-donate';
  }
  return false;
} 