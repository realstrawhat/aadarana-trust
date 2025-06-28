import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aadarana Trust - Empowering Children's Lives",
  description: "Aadarana Trust is dedicated to providing care, education, and support to vulnerable children in need. Join us in making a difference.",
  keywords: "orphanage, children's home, charity, donation, child care, education, India",
  authors: [{ name: "Aadarana Trust" }],
  creator: "Aadarana Trust",
  publisher: "Aadarana Trust",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aadaranatrust.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Aadarana Trust - Empowering Children's Lives",
    description: "Aadarana Trust is dedicated to providing care, education, and support to vulnerable children in need. Join us in making a difference.",
    url: 'https://aadaranatrust.org',
    siteName: 'Aadarana Trust',
    images: [
      {
        url: '/images/hero/Aadarana Logo 2025 (1).webp',
        width: 1200,
        height: 630,
        alt: 'Aadarana Trust Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aadarana Trust - Empowering Children's Lives",
    description: "Aadarana Trust is dedicated to providing care, education, and support to vulnerable children in need. Join us in making a difference.",
    images: ['/images/hero/Aadarana Logo 2025 (1).webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body 
        className={`${geist.variable} ${geistMono.variable} antialiased font-sans`}
        style={{
          fontFamily: `var(--font-geist-sans), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`
        }}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
