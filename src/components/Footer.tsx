import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Why Orphanage/HOME", href: "/why-orphanage" },
  { name: "Our Impact", href: "/impact" },
  { name: "Our Story", href: "/our-story" },
  { name: "Contact", href: "/contact" },
  { name: "Donate Today", href: "/donate" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-950 to-purple-950 text-white pt-16 pb-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
        {/* Left: Logo and description */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/3">
          <Image
            src="/images/logo.webp"
            alt="Aadarana Trust Logo"
            width={72}
            height={72}
            quality={80}
            loading="lazy"
            sizes="72px"
            className="rounded-2xl shadow-lg"
          />
          <p className="text-base max-w-xs text-center md:text-left opacity-80">
            Aadarana Trust is dedicated to providing shelter, education, health, nutrition, dignity, and hope to every child in need.
          </p>
          <div className="flex gap-5 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-purple-400 transition-colors text-2xl"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-purple-400 transition-colors text-2xl"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-purple-400 transition-colors text-2xl"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-purple-400 transition-colors text-2xl"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
        {/* Right: Navigation */}
        <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-2/3">
          <nav aria-label="Footer navigation" className="w-full">
            <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-lg font-semibold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-purple-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 text-sm text-gray-400 text-center w-full md:text-right">&copy; {new Date().getFullYear()} Aadarana Trust. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
} 