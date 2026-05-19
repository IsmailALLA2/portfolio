"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master's — Intelligent Processing Systems",
    institution: "Université Mohammed V (Faculty of Sciences)",
    location: "Rabat, Morocco",
    period: "Sep 2023 – Sep 2025",
    badge: "MSc",
    color: "#00D9FF",
  },
  {
    degree: "Bachelor's — Software Systems Engineering",
    institution: "Université Cadi Ayyad (EST)",
    location: "Essaouira, Morocco",
    period: "Sep 2022 – Jul 2023",
    badge: "BSc",
    color: "#7C3AED",
  },
  {
    degree: "BTS — Information Systems Development",
    institution: "Brevet de Technicien Supérieur",
    location: "Oujda, Morocco",
    period: "Sep 2020 – Jul 2022",
    badge: "BTS",
    color: "#F59E0B",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-20 bg-[#0D1117]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E2A38] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <GraduationCap className="w-6 h-6 text-[#00D9FF]" />
          <h2
            className="font-syne text-2xl font-bold text-[#F0EDE8]"
            style={{ fontWeight: 700 }}
          >
            Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              {/* Badge */}
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl font-syne text-xs font-bold mb-4"
                style={{
                  background: `${edu.color}12`,
                  color: edu.color,
                  border: `1px solid ${edu.color}30`,
                  fontWeight: 700,
                }}
              >
                {edu.badge}
              </div>

              <h3 className="text-[#F0EDE8] font-semibold text-sm leading-snug mb-2">
                {edu.degree}
              </h3>
              <p className="text-xs font-medium mb-4" style={{ color: edu.color }}>
                {edu.institution}
              </p>

              <div className="space-y-1.5 text-xs text-[#4A5568]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
