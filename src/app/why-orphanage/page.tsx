"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import AnimatedText from "../../components/AnimatedText";
import { useState } from "react";

const facts = [
  "Millions of children in India are deprived of basic rights like education, healthcare and protection.",
  "Children from poverty-stricken, broken, or unsafe homes often face neglect, abuse, or are forced into child labor.",
  "Many come from backgrounds involving street begging, domestic servitude, or are rescued from exploitative environments.",
  "Girls, especially, suffer from lack of education, hygiene and safety."
];

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
  { icon: "/images/bed.svg", text: "A safe bed" },
  { icon: "/images/bag.svg", text: "A school bag" },
  { icon: "/images/heart.svg", text: "A loving environment" },
  { icon: "/images/star.svg", text: "And the chance to dream big" }
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
              Childhood is <AnimatedText words={["Dignity", "Joy", "Stability", "Learning", "Safety", "Progress"]} />
            </h1>
            <p className="text-white text-2xl md:text-3xl mb-8 font-medium drop-shadow-lg">The solution is simple. The impact is lifelong.</p>
            <button className="bg-purple-600 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:bg-purple-700 transition-colors text-xl">Donate Now</button>
          </div>
        </section>
        {/* Impactful Intro Section */}
        <section className="w-full py-20 flex flex-col items-center bg-white px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-purple-600">Orphaned Children Deserve More Than Survival—They Deserve a Future</h2>
          <p className="max-w-3xl text-xl md:text-2xl text-center text-gray-700 font-semibold leading-relaxed">
            Every child deserves more than just survival—they deserve a future filled with hope, care, and opportunity. Millions of children in India face unimaginable challenges, but together, we can change their story. Education is the key that unlocks confidence, breaks the cycle of poverty, and empowers children to dream beyond their circumstances. At Aadarana Trust, we believe that with a safe home, quality education, and a loving environment, every child can thrive and become a force for positive change. The future we dream of for these children is not just possible—it&apos;s within our reach.
          </p>
        </section>
        {/* Carousel + Facts Section */}
        <section className="w-full py-20 bg-gray-50 flex flex-col items-center">
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 w-full mb-8 md:mb-0">
              {/* Carousel */}
            </div>
            <div className="flex-1 w-full flex flex-col gap-6">
              {facts.map((fact, i) => (
                <div key={i} className="bg-purple-100 text-purple-800 font-bold rounded-2xl p-6 shadow-lg text-lg md:text-xl">
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Expandable Info + Bento Images Section */}
        <section className="w-full py-24 flex flex-col md:flex-row gap-16 items-center bg-white px-4">
          <div className="flex-1 flex flex-col gap-6 max-w-2xl w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-purple-600">How Aadarana Changes Lives</h2>
            {impactInfo.map((item, i) => (
              <div key={i} className="mb-2">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex items-center w-full text-left text-xl md:text-2xl font-bold text-black focus:outline-none focus:ring-2 focus:ring-purple-600 py-3 border-b border-gray-200"
                >
                  <span>{item.title}</span>
                  <span className={`ml-auto transition-transform text-2xl text-black ${open === i ? "rotate-90" : "rotate-0"}`}>▶</span>
                </button>
                {open === i && (
                  <div className="pl-8 pr-2 py-3 text-lg md:text-xl text-gray-700 font-semibold bg-purple-100 rounded-xl mt-2 shadow">
                    {item.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Bento Images */}
          <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 max-w-lg w-full">
            <div className="row-span-2 rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/bento1.webp" alt="Bento 1" width={400} height={500} className="object-cover w-full h-full" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/bento2.webp" alt="Bento 2" width={200} height={200} className="object-cover w-full h-full" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/bento3.webp" alt="Bento 3" width={200} height={200} className="object-cover w-full h-full" />
            </div>
          </div>
        </section>
        {/* Impact Section with Icons */}
        <section className="w-full py-24 flex flex-col md:flex-row items-center bg-gray-50 px-4 gap-16">
          <div className="flex-1 flex justify-center">
            <Image src="/images/impact-photo.webp" alt="Impact" width={400} height={400} className="rounded-3xl object-cover shadow-2xl" />
          </div>
          <div className="flex-1 flex flex-col gap-8 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-600">The Impact Is Real</h2>
            <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
              Since 2013, Aadarana Trust has grown from caring for just 8 children to 65+.<br />
              These are not just numbers—each child has a story of transformation, healing and hope.<br />
              We believe every child, regardless of background, deserves:
            </p>
            <div className="grid grid-cols-2 gap-8 mb-6">
              {impactIcons.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <Image src={item.icon} alt={item.text} width={56} height={56} />
                  <span className="text-lg md:text-xl font-bold text-gray-800 text-center">{item.text}</span>
                </div>
              ))}
            </div>
            <button className="bg-purple-600 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:bg-purple-700 transition-colors text-xl w-fit">Donate Now</button>
          </div>
        </section>
        {/* Quote Section */}
        <section className="relative w-full py-40 flex items-center justify-center bg-gradient-to-br from-purple-700 via-purple-900 to-purple-700">
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