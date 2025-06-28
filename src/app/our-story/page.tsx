"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ParticlesClientOnly from "../../components/ParticlesClientOnly";

// Global style to remove footer top margin/padding
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `footer, .footer, #footer, .Footer { margin-top: 0 !important; padding-top: 0 !important; }`;
  document.head.appendChild(style);
}

export default function OurStoryPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col overflow-x-hidden max-w-full" style={{overflowX: 'hidden', maxWidth: '100vw', boxSizing: 'border-box'}}>
      <Navbar />
      <main className="flex-1 flex flex-col overflow-x-hidden max-w-full" style={{overflowX: 'hidden', maxWidth: '100vw', boxSizing: 'border-box'}}>
        {/* Hero Section */}
        <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-0 max-w-full" style={{overflowX: 'hidden', maxWidth: '100vw', boxSizing: 'border-box'}}>
          <img
            src="/images/gallery/IMG_20240325_163654.jpg"
            alt="Background for our story hero section"
            className="absolute inset-0 w-full h-full object-cover z-0"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center px-4 md:px-0 max-w-full">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-xl tracking-tight">
              All great movements start with a great story.<br className="hidden md:block" /> This is ours.
            </h1>
          </div>
        </section>
        {/* Story Section */}
        <section className="w-full py-20 flex flex-col items-center bg-white px-4 md:px-0 max-w-full" style={{overflowX: 'hidden', maxWidth: '100vw', boxSizing: 'border-box'}}>
          <div className="bg-pink-100 p-8 md:p-12 rounded-2xl max-w-4xl w-full">
            <p className="max-w-3xl text-lg md:text-2xl text-left text-gray-800 font-semibold leading-relaxed mb-8 px-2 sm:px-4 md:px-0">
              Aadarana Trust was founded by Mr. Nandigama Kiran in 2013, after a life-changing mission to the slums of Telangana. There, he witnessed first-hand the harsh realities faced by orphaned and abandoned children—many of whom had no food, shelter, education, or even a name.<br /><br />
              That moment of truth gave rise to a lifelong mission: To provide vulnerable children not only a safe home, but a childhood filled with dignity, love and opportunity.<br /><br />
              Aadarana (which means compassion) began humbly with just 8 children in a small rented home. Over time, the trust grew—steadily, quietly, and powerfully—into a beacon of hope for more than 65 boys and girls, and a trusted organization recognized for its integrity, impact and heart.
            </p>
          </div>
        </section>
        {/* Timeline Section - Pure HTML & CSS */}
        <section className="w-full py-20 bg-[#005FA1] flex flex-col items-center px-2 sm:px-4 md:px-0 max-w-full" style={{overflowX: 'hidden', maxWidth: '100vw', boxSizing: 'border-box'}}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center px-2 sm:px-4 md:px-0 max-w-full" style={{letterSpacing: '0.02em'}}>Milestones in Our Journey</h2>
          <div className="timeline-container px-2 sm:px-4 md:px-0 max-w-full">
            <div className="timeline">
              {/* 2013 */}
              <div className="timeline-item left">
                <div className="timeline-content">
                  <span className="timeline-year">2013</span>
                  <p className="timeline-desc">Aadarana Trust is officially registered as a non-profit in Hyderabad. The first orphanage home opens, welcoming 8 children from marginalized backgrounds.</p>
                </div>
              </div>
              {/* 2015 */}
              <div className="timeline-item right">
                <div className="timeline-content">
                  <span className="timeline-year">2015</span>
                  <p className="timeline-desc">The number of children grows to 25+. Tuition classes, health check-ups, and recreational activities are introduced. Support from friends and donors expands.</p>
                </div>
              </div>
              {/* 2018 */}
              <div className="timeline-item left">
                <div className="timeline-content">
                  <span className="timeline-year">2018</span>
                  <p className="timeline-desc">Separate homes for boys and girls are established in Kismathpur. The Trust increases its focus on holistic development—mental health, moral values and life skills.</p>
                </div>
              </div>
              {/* 2020 */}
              <div className="timeline-item right">
                <div className="timeline-content">
                  <span className="timeline-year">2020</span>
                  <p className="timeline-desc">During the COVID-19 pandemic, Aadarana continues to provide uninterrupted food, education, and healthcare to every child under its care.</p>
                </div>
              </div>
              {/* 2023 */}
              <div className="timeline-item left">
                <div className="timeline-content">
                  <span className="timeline-year">2023</span>
                  <p className="timeline-desc">Aadarana marks 10 years of service. It becomes one of the few local homes offering private school education, daily meals, medical care, and shelter—entirely through donations and goodwill.</p>
                </div>
              </div>
              {/* 2025+ */}
              <div className="timeline-item right">
                <div className="timeline-content">
                  <span className="timeline-year">2025+</span>
                  <p className="timeline-desc">Aadarana begins planning for a permanent children's campus, vocational training center, and partnerships with CSR and global donors to reach 100+ children annually.</p>
                </div>
              </div>
            </div>
          </div>
          <style jsx global>{`
            html, body, #__next {
              overflow-x: hidden !important;
              max-width: 100vw !important;
              box-sizing: border-box;
            }
          `}</style>
          <style jsx>{`
            .timeline-container {
              width: 100%;
              max-width: 900px;
              position: relative;
              margin: 0 auto;
              box-sizing: border-box;
              overflow-x: hidden;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
            @media (min-width: 1024px) {
              .timeline-container {
                padding-left: 0;
                padding-right: 0;
              }
            }
            .timeline {
              position: relative;
              margin: 0 auto;
              padding: 0;
              box-sizing: border-box;
              overflow-x: hidden;
              max-width: 900px;
              width: 100%;
            }
            .timeline:before {
              content: '';
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 4px;
              height: 100%;
              background: linear-gradient(to bottom, #fff 0%, #fff8 100%);
              z-index: 0;
            }
            .timeline-item {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              position: relative;
              width: 50%;
              padding: 0 48px 0 0;
              margin-bottom: 64px;
              z-index: 1;
              transition: transform 0.2s;
              box-sizing: border-box;
              max-width: 100%;
            }
            .timeline-item.right {
              left: 50%;
              justify-content: flex-start;
              padding: 0 0 0 48px;
            }
            .timeline-item.left {
              left: 0;
              justify-content: flex-end;
              padding: 0 48px 0 0;
            }
            .timeline-content {
              background: rgba(255,255,255,0.08);
              border: 1.5px solid #fff3;
              padding: 32px 32px 24px 32px;
              border-radius: 16px;
              box-shadow: 0 4px 32px 0 rgba(0,0,0,0.10);
              color: #fff;
              max-width: 360px;
              width: 100%;
              font-family: 'Inter', 'Montserrat', 'Poppins', Arial, sans-serif;
              transition: box-shadow 0.2s, background 0.2s;
              box-sizing: border-box;
              overflow-x: hidden;
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .timeline-content:hover {
              background: rgba(255,255,255,0.16);
              box-shadow: 0 8px 40px 0 rgba(0,0,0,0.18);
            }
            .timeline-year {
              display: block;
              font-weight: 800;
              font-size: 2rem;
              margin-bottom: 12px;
              color: #fff;
              letter-spacing: 0.04em;
              font-family: 'Inter', 'Montserrat', 'Poppins', Arial, sans-serif;
              text-shadow: 0 2px 8px #00395c44;
            }
            .timeline-desc {
              font-size: 1.1rem;
              line-height: 1.7;
              color: #fff;
              font-family: 'Inter', 'Georgia', serif;
              margin: 0;
              word-break: break-word;
            }
            @media (max-width: 900px) {
              .timeline-content { max-width: 100%; width: 100%; padding: 24px 18px 18px 18px; }
              .timeline-item { width: 100%; max-width: 100%; padding: 0 0 0 0; }
              .timeline-item.right, .timeline-item.left { left: 0; padding: 0 0 0 0; }
              .timeline:before { display: none; }
            }
            @media (max-width: 768px) {
              .timeline:before {
                left: 24px;
                transform: none;
              }
              .timeline-item, .timeline-item.right, .timeline-item.left {
                width: 100%;
                left: 0;
                flex-direction: column;
                align-items: flex-start;
                padding: 0 0 0 24px;
                margin-bottom: 48px;
                max-width: 100%;
                box-sizing: border-box;
              }
              .timeline-content {
                margin-top: 0;
                margin-bottom: 0;
                max-width: 100%;
                width: 100%;
                border-radius: 12px;
                padding: 20px 14px 16px 14px;
                box-sizing: border-box;
                padding-left: 1rem;
                padding-right: 1rem;
              }
              .timeline-year {
                margin-bottom: 10px;
                font-size: 1.3rem;
                font-family: 'Inter', 'Montserrat', 'Poppins', Arial, sans-serif;
              }
            }
            @media (max-width: 480px) {
              .timeline-container { padding: 0 0px; }
              .timeline:before { left: 12px; }
              .timeline-item, .timeline-item.right, .timeline-item.left { padding: 0 0 0 4px; }
              .timeline-content { padding: 14px 2px 12px 2px; padding-left: 0.75rem; padding-right: 0.75rem; }
            }
          `}</style>
        </section>
        {/* How We Work Section */}
        <section className="w-full py-20 bg-white flex flex-col items-center px-4 md:px-0 max-w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#005FA1] mb-10 text-center" style={{letterSpacing: '0.02em'}}>How We Work</h2>
          <div className="max-w-3xl w-full text-gray-800 text-lg md:text-2xl font-medium leading-relaxed flex flex-col gap-6">
            <p className="mb-2">Aadarana Trust is run by a passionate team of caregivers, educators and volunteers who believe in long-term impact—not temporary rescue.</p>
            <p className="mb-2">We raise children like family. Each child is supported with:</p>
            <ul className="list-none pl-0 md:pl-0 text-base md:text-xl font-normal mb-2 space-y-4">
              <li className="flex items-start gap-3"><span className="mt-1 w-3 h-3 rounded-full bg-[#005FA1] flex-shrink-0"></span><span><span className="font-bold text-[#005FA1] text-lg md:text-xl">Food & nutrition</span></span></li>
              <li className="flex items-start gap-3"><span className="mt-1 w-3 h-3 rounded-full bg-[#005FA1] flex-shrink-0"></span><span><span className="font-bold text-[#005FA1] text-lg md:text-xl">Private school education</span></span></li>
              <li className="flex items-start gap-3"><span className="mt-1 w-3 h-3 rounded-full bg-[#005FA1] flex-shrink-0"></span><span><span className="font-bold text-[#005FA1] text-lg md:text-xl">Clothing, hygiene, and health care</span></span></li>
              <li className="flex items-start gap-3"><span className="mt-1 w-3 h-3 rounded-full bg-[#005FA1] flex-shrink-0"></span><span><span className="font-bold text-[#005FA1] text-lg md:text-xl">Emotional and spiritual guidance</span></span></li>
              <li className="flex items-start gap-3"><span className="mt-1 w-3 h-3 rounded-full bg-[#005FA1] flex-shrink-0"></span><span><span className="font-bold text-[#005FA1] text-lg md:text-xl">Creative outlets:</span> <span className="font-bold text-[#005FA1]"> music, dance, art, yoga, and celebration</span></span></li>
            </ul>
            <p className="mb-0">We are registered under the Indian Trust Act, and also hold FCRA and JJ Act registration for transparency, accountability, and legal compliance.</p>
          </div>
        </section>
        {/* Our Team Section */}
        <section className="w-full py-20 bg-white flex flex-col items-center px-4 md:px-0 max-w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#005FA1] mb-12 text-center" style={{letterSpacing: '0.02em'}}>Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-y-60 md:gap-x-48 max-w-5xl w-full mx-auto items-start min-w-0">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center w-full min-w-0">
              <div className="w-52 h-52 md:w-72 md:h-72 bg-gray-200 shadow-lg overflow-hidden mb-4 flex items-center justify-center">
                <img src="/images/gallery/kiran.jpg" alt="Nandigama Kiran" className="object-cover w-full h-full" style={{aspectRatio: '1/1'}} onError={e => {e.currentTarget.src = 'https://placehold.co/300x300?text=Photo'}} />
              </div>
              <div className="text-left w-52 md:w-72">
                <div className="font-bold text-lg md:text-xl text-[#005FA1] whitespace-nowrap">Nandigama Kiran</div>
                <div className="text-gray-700 text-base md:text-lg whitespace-nowrap">Founder & Trustee</div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center w-full min-w-0">
              <div className="w-52 h-52 md:w-72 md:h-72 bg-gray-200 shadow-lg overflow-hidden mb-4 flex items-center justify-center">
                <img src="/images/gallery/siresh.jpg" alt="Sireesha" className="object-cover w-full h-full" style={{aspectRatio: '1/1'}} onError={e => {e.currentTarget.src = 'https://placehold.co/300x300?text=Photo'}} />
              </div>
              <div className="text-left w-52 md:w-72">
                <div className="font-bold text-lg md:text-xl text-[#005FA1] whitespace-nowrap">Sireesha</div>
                <div className="text-gray-700 text-base md:text-lg whitespace-nowrap">Girls Home Coordinator</div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center w-full min-w-0">
              <div className="w-52 h-52 md:w-72 md:h-72 bg-gray-200 shadow-lg overflow-hidden mb-4 flex items-center justify-center">
                <img src="/images/gallery/madhu.jpg" alt="Madhu" className="object-cover w-full h-full" style={{aspectRatio: '1/1'}} onError={e => {e.currentTarget.src = 'https://placehold.co/300x300?text=Photo'}} />
              </div>
              <div className="text-left w-52 md:w-72">
                <div className="font-bold text-lg md:text-xl text-[#005FA1] whitespace-nowrap">Madhu</div>
                <div className="text-gray-700 text-base md:text-lg whitespace-nowrap">Logistics & Meals Support</div>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="flex flex-col items-center w-full min-w-0">
              <div className="w-52 h-52 md:w-72 md:h-72 bg-gray-200 shadow-lg overflow-hidden mb-4 flex items-center justify-center">
                <img src="/images/gallery/murali-1.jpg" alt="Murali" className="object-cover w-full h-full" style={{aspectRatio: '1/1'}} onError={e => {e.currentTarget.src = 'https://placehold.co/300x300?text=Photo'}} />
              </div>
              <div className="text-left w-52 md:w-72">
                <div className="font-bold text-lg md:text-xl text-[#005FA1] whitespace-nowrap">Murali</div>
                <div className="text-gray-700 text-base md:text-lg whitespace-nowrap">Education & School Liaison</div>
              </div>
            </div>
          </div>
        </section>
        {/* Quote Section */}
        <section className="relative w-full py-16 md:py-16 flex items-center justify-center bg-gray-900 min-h-[400px] md:min-h-[520px]">
          <img
            src="/images/gallery/IMG_20240401_181608-1.jpg"
            alt="Background for quote section"
            className="object-cover w-full h-full absolute inset-0"
            style={{ objectPosition: 'center 30%' }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
          <blockquote className="relative z-20 max-w-3xl mx-auto text-center text-white font-semibold italic px-4 md:px-12 py-0 leading-relaxed md:leading-snug" style={{marginBottom: 0, paddingBottom: 0}}>
            <span className="block mb-6 text-2xl md:text-4xl" style={{ fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.01em' }}>
              "We started with 8 children and a dream. Today, we are raising future doctors, teachers, and leaders—with love, values and dignity."
            </span>
            <span className="block mt-8 text-2xl font-normal not-italic opacity-80">— Nandigama Kiran, Founder</span>
          </blockquote>
        </section>
      </main>
      <Footer />
    </div>
  );
} 