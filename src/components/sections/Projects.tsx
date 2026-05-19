"use client";

import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Globe, ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    id: "ajiapp",
    label: "Featured Project",
    name: "AjiApp",
    tagline: "Your only guide to Morocco",
    description:
      "An all-in-one travel companion designed for international visitors coming to Morocco. From visa guidance and eSIM activation to hotel bookings, cultural sites, currency conversion, and real-time event schedules — AjiApp covers every aspect of the Moroccan experience.",
    role: "Full-Stack & Cloud Engineer",
    period: "May 2025 – Jan 2026",
    type: "Mobile + Web + Cloud",
    highlights: [
      "Published on Google Play Store & App Store",
      "Spring Boot microservices + Flutter/Riverpod frontend",
      "React admin dashboard for platform management",
      "Automated CI/CD pipelines on Google Cloud Platform",
      "OAuth2/JWT authentication + centralized audit logging",
    ],
    stack: ["Flutter", "Spring Boot", "Java", "Riverpod", "React", "GCP", "CI/CD", "OAuth2"],
    links: {
      live: "https://ajiapp.com",
    },
    accentColor: "#00D9FF",
    bgGradient: "from-[#00D9FF]/8 via-transparent to-[#7C3AED]/8",
    borderColor: "border-[#00D9FF]/20",
    dotColor: "bg-[#00D9FF]",
    platform: "iOS & Android",
  },
  {
    id: "medzair",
    label: "Client Project",
    name: "Medzair",
    tagline: "N°1 Medical Staffing Platform in France",
    description:
      "A comprehensive platform that connects locum doctors with hospitals and healthcare facilities across France. Featuring AI-powered mission matching, one-click contract signing, real-time availability management, and push notifications — built to solve the critical staffing shortage triggered by the Rist law.",
    role: "Mobile Developer",
    period: "Jan 2024 – Apr 2024",
    type: "Mobile Application",
    highlights: [
      "Live on Google Play Store & App Store",
      "Real-time API sync with push notifications (FCM)",
      "Flutter + GetX reactive state management",
      "Optimized data refresh logic for smooth UX",
      "Serves doctors and hospitals across France",
    ],
    stack: ["Flutter", "Dart", "GetX", "REST API", "FCM", "Push Notifications"],
    links: {
      live: "https://www.medzair.com",
    },
    accentColor: "#F59E0B",
    bgGradient: "from-[#F59E0B]/8 via-transparent to-[#EF4444]/8",
    borderColor: "border-[#F59E0B]/20",
    dotColor: "bg-[#F59E0B]",
    icon: "🏥",
    platform: "Android",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-28 bg-[#080B12]">
      {/* Subtle separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1E2A38] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="section-label mb-4">Selected Work</p>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-[#F0EDE8] max-w-lg leading-tight" style={{ fontWeight: 800 }}>
            Apps people actually use
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`relative overflow-hidden rounded-2xl border ${project.borderColor} bg-gradient-to-br ${project.bgGradient} bg-[#0D1117] group cursor-default`}
              style={{ background: "#0D1117" }}
            >
              {/* Inner gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} pointer-events-none`} />

              <div className="relative p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                  {/* Content — 3 cols */}
                  <div className="lg:col-span-3">
                    {/* Label + icon row */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-2xl">{project.icon}</span>
                      <span className="section-label" style={{ color: project.accentColor }}>
                        {project.label}
                      </span>
                      <span className="px-2 py-0.5 text-xs rounded-full border border-[#1E2A38] text-[#8892A4]">
                        {project.platform}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-syne text-3xl md:text-4xl font-bold mb-2 transition-all duration-300"
                      style={{ fontWeight: 800, color: project.accentColor }}
                    >
                      {project.name}
                    </h3>
                    <p className="text-[#8892A4] text-base mb-5 font-medium">
                      {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-[#8892A4] leading-relaxed mb-8 text-sm max-w-xl">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="skill-tag"
                          style={{
                            borderColor: `${project.accentColor}30`,
                            color: project.accentColor,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Live link */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.02]"
                        style={{
                          background: project.accentColor,
                          color: "#080B12",
                        }}
                      >
                        <Globe className="w-4 h-4" />
                        Visit Live Site
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Details — 2 cols */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Role info card */}
                    <div className="rounded-xl border border-[#1E2A38] bg-[#080B12]/60 p-5">
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-[#4A5568] uppercase tracking-wider mb-1">My Role</div>
                          <div className="text-[#F0EDE8] text-sm font-semibold">{project.role}</div>
                        </div>
                        <div>
                          <div className="text-xs text-[#4A5568] uppercase tracking-wider mb-1">Period</div>
                          <div className="text-[#8892A4] text-sm">{project.period}</div>
                        </div>
                        <div>
                          <div className="text-xs text-[#4A5568] uppercase tracking-wider mb-1">Type</div>
                          <div className="text-[#8892A4] text-sm">{project.type}</div>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <div className="text-xs text-[#4A5568] uppercase tracking-wider mb-3">Key Highlights</div>
                      <ul className="space-y-2.5">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-[#8892A4]">
                            <CheckCircle2
                              className="w-4 h-4 flex-shrink-0 mt-0.5"
                              style={{ color: project.accentColor }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom gradient glow line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(to right, transparent, ${project.accentColor}60, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* More projects note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-[#4A5568] text-sm"
        >
          More projects available on request — I&apos;ve built platforms across fintech, ed-tech, and logistics.
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;
