"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import AnimatedText from "../../components/AnimatedText";
import { useState } from "react";
import Carousel from '../../components/Carousel';

const impactInfo = [
  {
    title: "Safety & Shelter",
    desc: "Children live in clean, separate homes for boys and girls, equipped with beds, toilets, hygiene products and water storage. It's not a hostel—it's a home."
  },
  {
    title: "Nutritious Food",
    desc: "Our children are served three meals a day, designed by a nutritionist to include fruits, milk, eggs and traditional porridge—building strength, immunity and growth."
  },
  {
    title: "Quality Education",
    desc: "All children attend private schools and colleges. Evening tuition and life skills classes ensure they are confident and well-rounded."
  },
  {
    title: "Healthcare & Hygiene",
    desc: "We provide regular medical checkups, first-aid, dental and eye care, and hygiene essentials—like soaps, oils and mosquito repellents."
  },
  {
    title: "Clothing & Essentials",
    desc: "Each child receives school uniforms, casual clothes, slippers, sweaters, blankets, stationery and hygiene kits—giving them dignity and identity."
  },
  {
    title: "Emotional Support & Values",
    desc: "Children receive counseling, moral education and spiritual care. We aim to rebuild not just their future—but their confidence, behavior and values."
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
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-black">
          <Image src="/images/hero-bg.webp" alt="Children" fill quality={80} loading="eager" priority sizes="100vw" className="object-cover z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center px-4">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-xl tracking-tight">
              Childhood is <AnimatedText words={["Dignity", "Joyful", "Stability", "Learning", "Safety", "Progress"]} />
            </h1>
            <p className="text-white text-2xl md:text-3xl mb-8 font-medium drop-shadow-lg">The solution is simple. The impact is lifelong.</p>
            <button className="bg-[#005FA1] text-white font-bold px-10 py-4 rounded-full shadow-xl hover:bg-[#b3d9f2] transition-colors text-xl">Donate Now</button>
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
        <section className="w-full py-20 bg-gray-50 flex flex-col items-center">
          <div className="w-full flex justify-center">
            <Carousel />
          </div>
        </section>
        {/* Expandable Info + Bento Images Section */}
        <section className="w-full py-24 flex flex-col md:flex-row gap-16 items-stretch bg-white px-4">
          {/* Left: Accordion/text */}
          <div className="flex-1 flex flex-col gap-6 max-w-2xl w-full order-1 md:order-none">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#005FA1]">How Aadarana Changes Lives</h2>
            {impactInfo.map((item, i) => (
              <div key={i} className="mb-2">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex items-center w-full text-left text-xl md:text-2xl font-bold text-black focus:outline-none focus:ring-2 focus:ring-[#005FA1] py-3 border-b border-gray-200"
                >
                  <span>{item.title}</span>
                  <span className={`ml-auto transition-transform text-2xl text-black ${open === i ? "rotate-90" : "rotate-0"}`}>▶</span>
                </button>
                {open === i && (
                  <div className="pl-8 pr-2 py-3 text-lg md:text-xl text-gray-700 font-semibold bg-[#e0f0fa] rounded-xl mt-2 shadow">
                    {item.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Right: Collage */}
          <div className="flex-1 max-w-3xl w-full flex items-stretch order-2 md:order-none">
            <div className="grid grid-cols-2 gap-1 md:gap-2 w-full">
              {/* Left column */}
              <div className="flex flex-col gap-1 md:gap-2 h-full min-h-0">
                <div className="bg-gray-300 rounded-2xl w-full flex-1 min-h-0" />
                <div className="bg-gray-300 rounded-2xl w-full flex-1 min-h-0" />
                <div className="bg-gray-300 rounded-2xl w-full flex-1 min-h-0" />
              </div>
              {/* Right column */}
              <div className="flex flex-col gap-1 md:gap-2 h-full min-h-0">
                <div className="bg-gray-200 rounded-2xl w-full" style={{height: '20%'}} />
                <div className="bg-gray-400 rounded-2xl w-full flex-1 min-h-0" />
                <div className="bg-gray-300 rounded-2xl w-full" style={{height: '25%'}} />
              </div>
            </div>
          </div>
        </section>
        {/* Impact Section with Icons */}
        <section className="w-full py-24 flex flex-col md:flex-row items-center bg-gray-50 px-4 gap-16">
          {/* On mobile, photo first; on desktop, photo left */}
          <div className="flex-1 flex justify-center md:items-start items-center md:self-start order-1 md:order-none mb-8 md:mb-0">
            <Image 
              src="/images/impact-photo.webp" 
              alt="Impact" 
              width={520} 
              height={520} 
              quality={80}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-3xl object-cover shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-[420px] md:max-w-[520px] h-auto"
            />
          </div>
          <div className="flex-1 flex flex-col gap-8 max-w-xl w-full items-center order-2 md:order-none">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#005FA1] text-center">How to Uplift Vulnerable Children</h2>
            <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-6 text-left md:text-justify">
              Your support brings hope, dignity, and opportunity to orphaned and underserved children. With just ₹800, you can provide a month of nourishing meals, quality education, and a safe home for a child in need. Every act of generosity helps transform lives, opening doors to brighter futures and lasting change. Stand with us—together, we can create a world where every child thrives.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-6 w-full max-w-md">
              {impactIcons.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <Image src={item.icon} alt={item.text} width={64} height={64} quality={80} loading="lazy" sizes="64px" />
                  <span className="text-lg md:text-xl font-bold text-[#00395c] text-center">{item.text}</span>
                </div>
              ))}
            </div>
            <button className="bg-[#005FA1] text-white font-bold px-12 py-6 rounded-full shadow-xl hover:bg-[#b3d9f2] transition-colors text-2xl mx-auto w-full max-w-xs block">Donate Now</button>
          </div>
        </section>
        {/* Quote Section */}
        <section className="relative w-full py-40 flex items-center justify-center bg-gradient-to-br from-[#005FA1] via-[#00395c] to-[#005FA1]">
          <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
          <blockquote className="relative z-20 max-w-4xl mx-auto text-center text-white text-4xl md:text-6xl font-semibold italic px-8 py-20">
            &quot;…if you love until it hurts, there will be no more hurt and only love.&quot;<br />
            <span className="block mt-10 text-2xl font-normal not-italic opacity-80">— Mother Theresa</span>
          </blockquote>
        </section>
      </main>
      <Footer />
    </div>
  );
} 