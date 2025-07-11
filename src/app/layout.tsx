import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aadarana Trust - Empowering Children's Lives",
  description: "Aadarana Trust is dedicated to providing care, education, and support to vulnerable children in need. Join us in making a difference.",
  keywords: "orphanage, children's home, charity, donation, child care, education, India",
  authors: [{ name: "Aadarana Trust" }],
  creator: "Aadarana Trust",
  publisher: "Aadarana Trust",
  icons: {
    icon: '/images/gallery/favicon-32x32.png',
    shortcut: '/images/gallery/favicon-32x32.png',
    apple: '/images/gallery/favicon-32x32.png',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aadarana Trust",
              "url": "https://aadaranatrust.org",
              "logo": "https://aadaranatrust.org/images/hero/Aadarana Logo 2025 (1).webp",
              "contactPoint": [{
                "@type": "ContactPoint",
                "email": "info@aadaranatrust.org",
                "contactType": "Customer Support",
                "areaServed": "IN",
                "availableLanguage": ["English"]
              }],
              "sameAs": [
                "https://www.facebook.com/aadaranatrust/"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://aadaranatrust.org",
              "name": "Aadarana Trust",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://aadaranatrust.org/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body 
        className={`${geist.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
