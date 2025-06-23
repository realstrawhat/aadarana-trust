"use client";
import React from 'react';
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import StatCard from "../../components/StatCard";
import TestimonialCard from "../../components/TestimonialCard";
import ServiceCard from "../../components/ServiceCard";
import SupportCard from "../../components/SupportCard";

const stats = [
  {
    number: "65+",
    description: "Children under full-time care (From just 8 children in 2013 to 65+ today)"
  },
  {
    number: "100+",
    description: "Volunteers and supporters have given their time, love and resources"
  },
  {
    number: "12+",
    description: "Years of service to some of India's most vulnerable children"
  },
  {
    number: "2",
    description: "Dedicated children's homes Separate, safe spaces for boys and girls"
  }
];

const services = [
  "Long-term residential care",
  "Formal education in private schools",
  "Healthcare, nutrition, and hygiene",
  "Emotional support and moral guidance"
];

const childSupport = [
  "School uniforms, books, and tuition",
  "Daily healthy meals and clean water",
  "Clean beds, safe bathrooms, and hygiene kits",
  "Play, festivals, and personality development",
  "Regular medical checkups and emotional care"
];

const testimonials = [
  {
    quote: "I celebrated my daughter's birthday at Aadarana—it was the most meaningful celebration we've ever had.",
    author: "Donor, Hyderabad"
  },
  {
    quote: "The children are bright, respectful and full of hope. Aadarana is raising future leaders.",
    author: "Volunteer / Teacher"
  }
];

export default function ImpactPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-32 bg-gradient-to-r from-[#005FA1] to-[#00395c] text-white overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src="/impact-bg.jpg"
              alt="Impact Background"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </motion.div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Impact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl"
            >
              Since 2013, Aadarana Trust has been transforming lives—one child at a time. 
              We don't just provide food and shelter. We build futures with dignity, education and hope.
            </motion.p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 text-[#005FA1]"
            >
              How We Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-12 text-gray-700"
            >
              Our impact is possible thanks to the generosity of individual donors, volunteers and partners 
              who believe every child deserves a chance. We provide:
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-700 font-semibold text-center"
            >
              We do not believe in a one-time intervention. We are in it for the long run—raising children like family.
            </motion.p>
          </div>
        </section>

        {/* Child Support Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 text-[#005FA1]"
            >
              Each child is supported with:
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {childSupport.map((support, index) => (
                <SupportCard key={index} support={support} />
              ))}
            </div>
          </div>
        </section>

        {/* Local Love Section */}
        <section className="py-20 bg-gradient-to-br from-[#005FA1] to-[#00395c] text-white relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          </motion.div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Built on Local Love
            </motion.h2>
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl mb-6"
              >
                Aadarana is a grassroots effort. Our team is made up of local caregivers, educators and 
                volunteers who understand the challenges these children face. We grow stronger with the help 
                of everyday citizens, donors, families and corporate well-wishers who celebrate, contribute 
                and partner with us.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold"
              >
                This is not just aid. This is partnership. Purpose. Progress.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-[#005FA1] text-center"
            >
              Testimonials from Our Supporters
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#e0f0fa] p-8 md:p-12 rounded-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#005FA1]">Transparency & Trust</h2>
              <p className="text-xl text-gray-700 max-w-3xl">
                We believe in accountability and welcome every supporter to visit our homes. 
                We maintain clear records, photo documentation and donor reporting for long-term sponsors. 
                You can see exactly where your support is going—and who it's helping.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-[#005FA1] to-[#00395c]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 text-white"
            >
              Ready to Join Our Mission?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-12"
            >
              Be a part of our growing impact:
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Sponsor a Child", description: "₹66,000/year" },
                { title: "Celebrate a Special Day", description: "with Our Kids" },
                { title: "Donate in Kind", description: "Food, Clothes, School Supplies" },
                { title: "Partner with Us", description: "for CSR Initiatives" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg cursor-pointer"
                >
                  <p className="font-bold text-[#005FA1]">{item.title}</p>
                  <p className="text-[#00395c]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 