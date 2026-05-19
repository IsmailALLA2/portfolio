"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, MapPin, Sparkles } from "lucide-react";
import pdpImage from "@/assets/pdp.jpeg";

const ROLES = [
  "Full-Stack Engineer",
  "Mobile Developer",
  "Flutter Specialist",
  "Spring Boot Expert",
  "Cloud Builder",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const current = ROLES[roleIndex];
    if (!isDeleting && charIndex < current.length) {
      intervalRef.current = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!isDeleting && charIndex === current.length) {
      intervalRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      intervalRef.current = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => { if (intervalRef.current) clearTimeout(intervalRef.current); };
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    setDisplayed(ROLES[roleIndex].substring(0, charIndex));
  }, [charIndex, roleIndex]);

  const stats = [
    { value: "2+", label: "Years exp." },
    { value: "50k+", label: "App downloads" },
    { value: "5+", label: "Companies" },
    { value: "3", label: "Languages" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080B12]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(0,217,255,0.1)_0%,transparent_60%)] pointer-events-none" />

      {/* Purple glow right */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_right,rgba(124,58,237,0.12)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Text */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1E2A38] bg-[#0D1117] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
              <span className="text-xs text-[#8892A4] font-medium">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-syne font-800 leading-none mb-4" style={{ fontWeight: 800 }}>
                <span className="block text-6xl md:text-7xl xl:text-8xl text-[#F0EDE8]">
                  Ismail
                </span>
                <span className="block text-6xl md:text-7xl xl:text-8xl text-gradient-accent">
                  ALLA
                </span>
              </h1>
            </motion.div>

            {/* Typed role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-2 mb-6 h-8"
            >
              <Sparkles className="w-4 h-4 text-[#00D9FF] flex-shrink-0" />
              <span className="font-syne text-xl text-[#F0EDE8] font-medium">
                {displayed}
                <span className="inline-block w-0.5 h-5 bg-[#00D9FF] ml-0.5 animate-blink align-middle" />
              </span>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-1.5 text-[#8892A4] text-sm mb-8"
            >
              <MapPin className="w-4 h-4" />
              <span>Rabat, Morocco</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[#8892A4] text-lg leading-relaxed mb-10 max-w-lg"
            >
              I build{" "}
              <span className="text-[#F0EDE8]">scalable mobile & web products</span>{" "}
              that ship to real users — from backend APIs to Play Store, with{" "}
              <span className="text-[#00D9FF]">50k+ downloads</span> across apps I&apos;ve developed.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a href="#contact" className="btn-primary">
                <Mail className="w-4 h-4" />
                Let&apos;s talk
              </a>
              <a
                href="https://www.linkedin.com/in/ismail-alla/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-4 gap-6 pt-8 border-t border-[#1E2A38]"
            >
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-syne text-2xl font-bold text-[#F0EDE8]" style={{ fontWeight: 700 }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#8892A4] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#00D9FF]/20 to-[#7C3AED]/20 blur-2xl animate-glow-pulse" />

              {/* Accent ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#00D9FF] to-[#7C3AED] p-0.5">
                <div className="w-full h-full rounded-full bg-[#080B12]" />
              </div>

              {/* Photo */}
              <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2 border-[#1E2A38] bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pdpImage.src}
                  alt="Ismail ALLA"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-2 -right-2 bg-[#0D1117] border border-[#1E2A38] rounded-xl px-3 py-2 shadow-card animate-float">
                <div className="text-xs text-[#8892A4]">Total downloads</div>
                <div className="text-sm font-semibold text-[#00D9FF] font-syne" style={{ fontWeight: 600 }}>50k+ 🚀</div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-2 -left-4 bg-[#0D1117] border border-[#1E2A38] rounded-xl px-3 py-2 shadow-card" style={{ animationDelay: "3s" }}>
                <div className="text-xs text-[#8892A4]">Available for</div>
                <div className="text-sm font-semibold text-[#F59E0B] font-syne" style={{ fontWeight: 600 }}>Freelance 💼</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#4A5568] tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-[#4A5568] animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
