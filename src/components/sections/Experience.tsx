"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack & Mobile Developer",
    company: "AjiApp",
    companyUrl: "https://ajiapp.com",
    location: "Rabat, Morocco",
    period: "May 2025 – Jan 2026",
    type: "Contract",
    typeColor: "#00D9FF",
    description: [
      "Architected a cloud-native platform, defining coding standards and the full technical roadmap.",
      "Built Spring Boot microservices with OAuth2/JWT, centralized audit logging, and API versioning.",
      "Developed a cross-platform Flutter/Riverpod mobile app serving international tourists in Morocco.",
      "Built a React admin panel for centralized platform operations management.",
      "Automated CI/CD pipelines for GCP deployments and Google Play / App Store releases.",
    ],
    stack: ["Spring Boot", "Flutter", "Riverpod", "React", "GCP", "CI/CD", "OAuth2"],
  },
  {
    title: "Full-Stack & Mobile Developer (Intern PFE)",
    company: "IndataCore",
    companyUrl: null,
    location: "Casablanca, Morocco",
    period: "Feb 2025 – Aug 2025",
    type: "Internship",
    typeColor: "#7C3AED",
    description: [
      "Integrated an AI/ML SDK for real-time identity verification and KYC workflow automation.",
      "Built RESTful APIs with Spring Boot: validation, error handling, and API versioning.",
      "Developed a multi-platform Flutter mobile app with Riverpod state management.",
      "Built an Angular backoffice dashboard for operational monitoring and management.",
    ],
    stack: ["Spring Boot", "Flutter", "Angular", "AI SDK", "Riverpod", "KYC"],
  },
  {
    title: "Full-Stack Developer",
    company: "Asas",
    companyUrl: null,
    location: "Rabat, Morocco",
    period: "May 2024 – Jul 2024",
    type: "Freelance",
    typeColor: "#F59E0B",
    description: [
      "Built a full-stack Angular + Spring Boot platform digitizing student-agency-university interactions.",
      "Implemented secure REST APIs with JWT authentication and role-based access control.",
    ],
    stack: ["Angular", "Spring Boot", "Java", "JWT", "PostgreSQL"],
  },
  {
    title: "Mobile Developer",
    company: "Medzair France",
    companyUrl: "https://www.medzair.com",
    location: "Remote",
    period: "Jan 2024 – Apr 2024",
    type: "Freelance",
    typeColor: "#F59E0B",
    description: [
      "Developed a Flutter app with GetX for reactive state management and real-time data sync.",
      "Integrated REST APIs and Firebase Cloud Messaging for real-time push notifications.",
      "Improved UI performance by refactoring the data refresh and rendering logic.",
    ],
    stack: ["Flutter", "Dart", "GetX", "REST API", "FCM"],
  },
  {
    title: "Software Developer (Backend & Mobile)",
    company: "SogeSoft",
    companyUrl: null,
    location: "Oujda, Morocco",
    period: "Apr 2023 – Aug 2023",
    type: "Internship",
    typeColor: "#7C3AED",
    description: [
      "Built scalable REST APIs with Spring Boot using a layered architecture.",
      "Worked with SQL databases and wrote unit tests to validate business logic.",
      "Built a Flutter delivery app with GetX, handling navigation, API integration, and UX/UI.",
    ],
    stack: ["Spring Boot", "Java", "SQL", "Flutter", "GetX", "JUnit"],
  },
];

const typeBadge: Record<string, string> = {
  Contract: "border-[#00D9FF]/30 text-[#00D9FF] bg-[#00D9FF]/05",
  Internship: "border-[#7C3AED]/30 text-[#7C3AED] bg-[#7C3AED]/05",
  Freelance: "border-[#F59E0B]/30 text-[#F59E0B] bg-[#F59E0B]/05",
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-28 bg-[#080B12]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E2A38] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-4">Experience</p>
          <h2
            className="font-syne text-4xl md:text-5xl font-bold text-[#F0EDE8] leading-tight"
            style={{ fontWeight: 800 }}
          >
            Where I&apos;ve worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="timeline-dot" style={{ top: "18px", background: exp.typeColor }} />

                <div className="card p-6 hover:border-[#2A3A4E]">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-syne text-lg font-bold text-[#F0EDE8]" style={{ fontWeight: 700 }}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-sm animated-underline"
                            style={{ color: exp.typeColor }}
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span className="font-semibold text-sm" style={{ color: exp.typeColor }}>
                            {exp.company}
                          </span>
                        )}
                      </div>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${typeBadge[exp.type]}`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-xs text-[#4A5568] mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-5">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#8892A4]">
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                          style={{ background: exp.typeColor }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md border border-[#1E2A38] bg-[#080B12] text-[#4A5568]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
