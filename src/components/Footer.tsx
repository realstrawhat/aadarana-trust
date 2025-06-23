import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Why Child Home", href: "/why-orphanage" },
  { name: "Our Impact", href: "/impact" },
  { name: "Our Story", href: "/our-story" },
  { name: "Contact", href: "/contact" },
  { name: "Donate Today", href: "/donate" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-950 to-[#00395c] text-white pt-16 pb-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Logo and description */}
        <div className="flex flex-col h-full w-full items-center md:items-start">
          {/* Logo at the top */}
          <div className="w-[240px] h-[240px] flex items-center justify-center mb-0">
            <Image
              src="/images/hero/Aadarana Logo 2025 white (1).png"
              alt="Aadarana Trust Logo"
              width={240}
              height={240}
              quality={80}
              loading="lazy"
              sizes="(max-width: 768px) 160px, 240px"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex-grow" />
        </div>
        {/* Navigation */}
        <div className="flex flex-col items-center md:items-center gap-6">
          <nav aria-label="Footer navigation" className="w-full">
            <ul className="flex flex-col md:flex-col gap-3 md:gap-3 text-lg font-semibold items-center md:items-start">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#1a8bd0] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Socials and copyright */}
        <div className="flex flex-col items-center md:items-end gap-6 w-full">
          <div className="flex gap-5 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-[#1a8bd0] transition-colors text-2xl bg-white/10 rounded-full p-3"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#1a8bd0] transition-colors text-2xl bg-white/10 rounded-full p-3"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#1a8bd0] transition-colors text-2xl bg-white/10 rounded-full p-3"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#1a8bd0] transition-colors text-2xl bg-white/10 rounded-full p-3"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <div className="w-full border-t border-white/20 my-2" />
          <div className="text-sm text-gray-400 text-center md:text-right w-full">&copy; {new Date().getFullYear()} Aadarana Trust. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
} 