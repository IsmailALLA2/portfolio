"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080B12]/90 backdrop-blur-xl border-b border-[#1E2A38]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="font-syne font-700 text-lg text-[#F0EDE8] tracking-tight hover:text-[#00D9FF] transition-colors"
            style={{ fontWeight: 700 }}
          >
            I<span className="text-[#00D9FF]">.</span>ALLA
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#00D9FF]"
                      : "text-[#8892A4] hover:text-[#F0EDE8]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00D9FF]" />
                  )}
                </a>
              );
            })}
            <a
              href="/portfolio/Ismail%20ALLA%20CV.pdf"
              download="Ismail_ALLA_CV.pdf"
              className="ml-4 btn-primary text-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#8892A4] hover:text-[#F0EDE8] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0D1117] border-b border-[#1E2A38]">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-3 px-4 text-[#8892A4] hover:text-[#F0EDE8] hover:bg-[#131920] rounded-lg text-sm font-medium transition-all"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/portfolio/Ismail%20ALLA%20CV.pdf"
              download="Ismail_ALLA_CV.pdf"
              className="mt-2 btn-primary text-sm justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
