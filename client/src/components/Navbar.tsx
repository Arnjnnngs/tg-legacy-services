/*
 * DESIGN: Light professional navbar with emerald accents
 * White background, dark text, emerald CTA button
 * Mobile: slide-out menu from right
 */
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md border-b border-gray-100"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="text-white font-black text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>TG</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 leading-tight text-sm md:text-base" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  TG Legacy Services
                </p>
                <p className="text-emerald-600 text-[10px] leading-tight" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "0.1em" }}>
                  MOBILE NOTARY
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 text-sm font-medium"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:9136018371"
                className="flex items-center gap-2 btn-emerald px-5 py-2.5 rounded-lg text-sm"
              >
                <Phone size={15} />
                (913) 601-8371
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile slide-out menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden transition-transform duration-300 ease-out bg-white shadow-lg ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <span className="font-bold text-gray-900 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            TG Legacy Services
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-500 hover:text-gray-900 p-1 rounded"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col p-5 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="tel:9136018371"
              className="btn-emerald flex items-center justify-center gap-2 py-3 rounded-lg text-sm"
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={15} />
              Call (913) 601-8371
            </a>
            <a
              href="mailto:info@tglegacyservices.com"
              className="flex items-center justify-center gap-2 py-3 rounded-lg text-sm text-gray-700 border border-gray-300 hover:border-emerald-600 hover:text-emerald-600 transition-all"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              Email Us
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
