import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Why Child Home", href: "/why-orphanage" },
  { name: "Our Impact", href: "/impact" },
  { name: "Our Story", href: "/our-story" },
  { name: "Contact", href: "/contact" },
  { name: "Donate Today", href: "/donate" },
  { name: "Terms of Use", href: "/terms-of-use" },
];

// Optimized SVG icons for better performance
const SocialIcons = {
  Facebook: () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  ),
  Instagram: () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  ),
  X: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#005FA1] text-white pt-20 pb-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-12 items-start">
        {/* Logo and description */}
        <div className="flex flex-col h-full w-full items-center md:items-start">
          {/* Logo at the top */}
          <div className="w-[200px] h-[200px] flex items-center justify-center mb-0 mt-12">
            <img
              src="/images/hero/WhatsApp Image 2025-06-28 at 3.57.16 PM.jpeg"
              alt="Aadarana Trust Logo"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex-grow" />
        </div>
        {/* Navigation */}
        <div className="flex flex-col items-center md:items-center gap-6 mt-8 -mt-24 md:mt-8">
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
        <div className="flex flex-col items-center md:items-end gap-4 md:gap-8 w-full mt-4 md:mt-8">
          <div className="flex gap-5 mt-4 md:mt-8">
            <a href="https://www.facebook.com/AadaranaTrustIndia" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#1a8bd0] transition-colors text-2xl bg-white/10 rounded-full p-3">
              <SocialIcons.Facebook />
            </a>
            <a href="https://www.instagram.com/aadaranatrust/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#1a8bd0] transition-colors text-2xl bg-white/10 rounded-full p-3">
              <SocialIcons.Instagram />
            </a>
          </div>
          <div className="w-full border-t border-white/20 my-2 md:my-4" />
          <div className="text-sm text-gray-400 text-center md:text-right w-full mb-2 md:mb-4">&copy; {new Date().getFullYear()} Aadarana Trust. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
} 