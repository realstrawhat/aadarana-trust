"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "../../components/AnimatedText";
import { useState } from "react";
import Carousel from '../../components/Carousel';
import Head from 'next/head';

const impactInfo = [
  {
    title: "Safe & Loving Home",
    desc: "We provide a secure, nurturing environment where children feel valued, protected, and loved. Our home becomes their sanctuary—a place where they can heal, grow, and thrive."
  },
  {
    title: "Quality Education",
    desc: "Education is the key to breaking the cycle of poverty. We ensure every child receives proper schooling, including books, uniforms, and tuition support to help them reach their full potential."
  },
  {
    title: "Healthcare & Nutrition",
    desc: "We provide regular medical check-ups, proper nutrition, and hygiene education. Healthy children are happy children who can focus on learning and growing."
  },
  {
    title: "Emotional Support",
    desc: "Our caregivers provide the emotional stability and guidance that every child needs. We help them process trauma, build confidence, and develop healthy relationships."
  },
  {
    title: "Life Skills & Values",
    desc: "We teach essential life skills, moral values, and character development. Children learn responsibility, empathy, and the importance of giving back to society."
  },
  {
    title: "Creativity & Celebration",
    desc: "Through dancing, singing, painting, yoga, and festival celebrations, our children learn to laugh, express and celebrate life again."
  }
];

const impactIcons = [
  { icon: "/images/icons/A safe, loving home (1).webp", text: "A safe, loving home" },
  { icon: "/images/icons/Better health (1).webp", text: "Better health" },
  { icon: "/images/icons/A hopeful, empowered future (1).webp", text: "A hopeful, empowered future" },
  { icon: "/images/icons/Continued education (1).webp", text: "Continued education" }
];

export default function WhyChildrenHomePage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="bg-white min-h-screen flex flex-col overflow-x-hidden">
      <Head>
        <title>Why Orphanage? | Aadarana Trust</title>
        <meta name="description" content="Learn why Aadarana Trust believes every child deserves more than survival—discover our mission and the need for safe, loving homes." />
        <meta property="og:title" content="Why Orphanage? | Aadarana Trust" />
        <meta property="og:description" content="Learn why Aadarana Trust believes every child deserves more than survival—discover our mission and the need for safe, loving homes." />
        <meta property="og:image" content="https://aadaranatrust.org/images/gallery/717.jpg" />
        <meta property="og:url" content="https://aadaranatrust.org/why-orphanage" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://aadaranatrust.org/why-orphanage" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://aadaranatrust.org/"},
            {"@type": "ListItem", "position": 2, "name": "Why Orphanage", "item": "https://aadaranatrust.org/why-orphanage"}
          ]
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Why Orphanage?",
          "url": "https://aadaranatrust.org/why-orphanage",
          "description": "Learn why Aadarana Trust believes every child deserves more than survival—discover our mission and the need for safe, loving homes."
        }) }} />
      </Head>
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-black">
          <Image src="/images/gallery/717.jpg" alt="Children" fill quality={80} loading="eager" priority={true} sizes="100vw" className="object-cover object-top z-0" style={{ objectPosition: 'center 30%' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center px-4 mt-8">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-xl tracking-tight">
              Childhood is <AnimatedText words={["Dignity", "Joyful", "Stability", "Learning", "Safety", "Progress"]} />
            </h1>
            <p className="text-white text-2xl md:text-3xl mb-8 font-medium drop-shadow-lg">The solution is simple. The impact is lifelong.</p>
            <Link href="/donate">
              <button className="bg-[#005FA1] text-white font-bold px-10 py-4 rounded-full shadow-xl hover:bg-[#b3d9f2] transition-colors text-xl">Donate Now</button>
            </Link>
          </div>
        </section>
        {/* Impactful Intro Section */}
        <section className="w-full py-20 flex flex-col items-center bg-white px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#005FA1] max-w-3xl w-full">
            Orphaned Children Deserve More Than Survival—<br className="hidden sm:block" />They Deserve a Future
          </h2>
          <p className="max-w-3xl text-xl md:text-2xl text-center text-gray-700 font-semibold leading-relaxed">
            Every child deserves more than just survival—they deserve a future filled with hope, care, and opportunity. Millions of children in India face unimaginable challenges, but together, we can change their story. Education is the key that unlocks confidence, breaks the cycle of poverty, and empowers children to dream beyond their circumstances. At Aadarana Trust, we believe that with a safe home, quality education, and a loving environment, every child can thrive and become a force for positive change. The future we dream of for these children is not just possible—it&apos;s within our reach.
          </p>
        </section>
        {/* Carousel + Facts Section */}
        <section className="w-full py-20 bg-gray-50 flex flex-col items-center overflow-x-hidden">
          <div className="w-full flex justify-center">
            <Carousel />
          </div>
        </section>
        {/* Expandable Info + Bento Images Section */}
        <section className="w-full max-w-7xl mx-auto py-24 flex flex-col md:flex-row gap-16 items-stretch bg-white px-4">
          {/* Left: Accordion/text */}
          <div className="flex-1 flex flex-col gap-6 max-w-2xl w-full order-1 md:order-none">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#005FA1]">How Aadarana Changes Lives</h2>
            {impactInfo.map((item, i) => (
              <div key={i} className="mb-2">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex items-center w-full text-left text-xl md:text-2xl font-bold text-black focus:outline-none focus:ring-2 focus:ring-[#005FA1] py-3 border-b border-gray-200"
                >
                  <div className="flex flex-col items-start">
                    <span>{item.title}</span>
                    {open === i && (
                      <span className="text-lg md:text-xl text-gray-700 font-normal mt-2 text-left">
                        {item.desc}
                      </span>
                    )}
                  </div>
                  <span className={`ml-auto transition-transform text-3xl text-black font-light ${open === i ? "rotate-45" : "rotate-0"}`}>+</span>
                </button>
              </div>
            ))}
          </div>
          {/* Right: Collage */}
          <div className="flex-1 max-w-3xl w-full flex items-stretch order-2 md:order-none">
            <div className="grid grid-cols-2 gap-1 md:gap-2 w-full">
              {/* Left column */}
              <div className="flex flex-col gap-1 md:gap-2 h-full min-h-0">
                <div className="bg-gray-300 rounded-2xl w-full flex-1 min-h-0 relative overflow-hidden">
                  <Image
                    src="/images/gallery/IMG_20230715_141909 (1).jpg"
                    alt="Bento photo 1"
                    fill
                    quality={80}
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-gray-300 rounded-2xl w-full flex-1 min-h-0 relative overflow-hidden">
                  <Image
                    src="/images/gallery/IMG_20230712_204358.jpg"
                    alt="Bento photo 2"
                    fill
                    quality={80}
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-gray-300 rounded-2xl w-full flex-1 min-h-0 relative overflow-hidden">
                  <Image
                    src="/images/gallery/20240721_140006 (1).jpg"
                    alt="Bento photo 3"
                    fill
                    quality={80}
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Right column */}
              <div className="flex flex-col gap-1 md:gap-2 h-full min-h-0">
                <div className="bg-gray-200 rounded-2xl w-full relative overflow-hidden" style={{height: '20%'}}>
                  <Image
                    src="/images/gallery/20250527_125446.jpg"
                    alt="Bento photo 4"
                    fill
                    quality={80}
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-gray-400 rounded-2xl w-full flex-1 min-h-0 relative overflow-hidden">
                  <Image
                    src="/images/gallery/2T9A4016 (1).JPG"
                    alt="Bento photo 5"
                    fill
                    quality={80}
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-gray-300 rounded-2xl w-full relative overflow-hidden" style={{height: '25%'}}>
                  <Image
                    src="/images/gallery/20250126_134235.jpg"
                    alt="Bento photo 6"
                    fill
                    quality={80}
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Impact Section with Icons */}
        <section className="w-full py-24 flex flex-col md:flex-row items-center bg-gray-50 px-4 gap-4">
          {/* On mobile, photo first; on desktop, photo left */}
          <div className="flex-1 flex justify-center md:items-start items-center md:self-start order-1 md:order-none mb-8 md:mb-0">
            <Image 
              src="/images/gallery/20250126_124228-1.jpg" 
              alt="Vulnerable Children" 
              width={600} 
              height={600} 
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-3xl object-cover shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-[480px] md:max-w-[600px] h-[600px]"
            />
          </div>
          <div className="flex-1 flex flex-col gap-8 max-w-xl w-full items-center md:items-start order-2 md:order-none md:pr-8">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#005FA1] text-center md:text-left">How to Uplift Vulnerable Children</h2>
            <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-6 text-left">
              At Aadarana Trust, we believe every child deserves more than just survival—they deserve belonging, dignity, and a real chance at life. For the orphaned, the abandoned, and the vulnerable, we offer more than shelter. We offer a family. With every nourishing meal, every lesson learned, and every moment of care, a child begins to rise above their past. They don't just survive—they thrive. This isn't mere charity. It's transformation. It's the quiet power of compassion turning broken beginnings into bright tomorrows.
            </p>
            <div className="grid grid-cols-4 gap-4 md:gap-8 mb-6 w-full">
              {impactIcons.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <Image src={item.icon} alt={item.text} width={64} height={64} quality={80} loading="lazy" sizes="64px" />
                  <span className="text-sm md:text-base font-bold text-[#00395c] text-center">{item.text}</span>
                </div>
              ))}
            </div>
            <Link href="/donate">
              <button className="bg-[#005FA1] text-white font-bold px-12 py-6 rounded-full shadow-xl hover:bg-[#b3d9f2] transition-colors text-2xl mx-auto w-full max-w-xs block">Donate Now</button>
            </Link>
          </div>
        </section>
        {/* Quote Section */}
        <section className="relative w-full py-20 flex items-center justify-center bg-gradient-to-br from-[#005FA1] via-[#00395c] to-[#005FA1]">
          <Image
            src="/images/gallery/mother-theresa-GettyImages-863357110.avif"
            alt="Mother Theresa"
            fill
            quality={80}
            loading="lazy"
            sizes="100vw"
            className="object-cover z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
          <blockquote className="relative z-20 max-w-4xl mx-auto text-center text-white text-4xl md:text-6xl font-semibold italic px-8 py-12">
            &quot;…if you love until it hurts, there will be no more hurt and only love.&quot;<br />
            <span className="block mt-8 text-2xl font-normal not-italic opacity-80">— Mother Theresa</span>
          </blockquote>
        </section>
      </main>
      <Footer />
    </div>
  );
} 