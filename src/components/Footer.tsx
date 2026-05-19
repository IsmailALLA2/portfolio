import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#1E2A38] bg-[#080B12] py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / name */}
          <div className="font-syne font-bold text-lg text-[#F0EDE8]" style={{ fontWeight: 700 }}>
            I<span className="text-[#00D9FF]">.</span>ALLA
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:alkaismail2001@gmail.com"
              className="flex items-center gap-2 text-sm text-[#4A5568] hover:text-[#00D9FF] transition-colors"
            >
              <Mail className="w-4 h-4" />
              alkaismail2001@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ismail-alla/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#4A5568] hover:text-[#00D9FF] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#4A5568]">
            © {year} Ismail ALLA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
