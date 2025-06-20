"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Why Children Home", href: "/why-orphanage" },
  { name: "Our Impact", href: "/impact" },
  { name: "Our Story", href: "/our-story" },
  { name: "Contact", href: "/contact" },
  { name: "Donate Today", href: "/donate" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transition-colors transition-shadow transition-[backdrop-filter] ${
        scrolled ? "bg-white/90 shadow-lg border-b border-gray-200 backdrop-blur-md" : "bg-transparent border-b border-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="Aadarana Trust Logo"
            width={48}
            height={48}
            quality={80}
            loading="eager"
            priority={true}
            sizes="48px"
          />
        </Link>
        <button
          className="md:hidden p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <XMarkIcon className="h-7 w-7 text-gray-700" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-gray-700" />
          )}
        </button>
        <ul className="hidden md:flex gap-2 lg:gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name} className="flex items-center h-full">
              {link.name === "Donate Today" ? (
                <Link
                  href={link.href}
                  className="ml-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold text-lg shadow hover:from-purple-700 hover:to-purple-900 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center h-full"
                  aria-label={link.name}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-bold text-gray-800 hover:text-purple-700 transition-colors px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center h-full"
                  aria-label={link.name}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-2 bg-white/95 px-4 py-6 shadow-lg border-t border-gray-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.name === "Donate Today" ? (
                <Link
                  href={link.href}
                  className="block w-full px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold shadow hover:from-purple-700 hover:to-purple-900 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
                  aria-label={link.name}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="block text-lg font-semibold text-gray-800 hover:text-purple-700 transition-colors px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
                  aria-label={link.name}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
} 