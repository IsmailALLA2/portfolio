"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    domain: "Mobile",
    color: "#00D9FF",
    icon: "📱",
    skills: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Riverpod", "GetX"],
  },
  {
    domain: "Backend",
    color: "#7C3AED",
    icon: "⚙️",
    skills: ["Java", "Spring Boot", "Spring Security", "REST API", "GraphQL", "Kafka", "Hibernate"],
  },
  {
    domain: "Frontend",
    color: "#F59E0B",
    icon: "🌐",
    skills: ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "SCSS"],
  },
  {
    domain: "Cloud & DevOps",
    color: "#10B981",
    icon: "☁️",
    skills: ["Google Cloud", "Docker", "GitHub Actions", "CI/CD", "Codemagic", "App Store Connect", "Google Play Console"],
  },
  {
    domain: "Database",
    color: "#EF4444",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore", "Redis", "SQL Server"],
  },
  {
    domain: "Tools & Testing",
    color: "#8892A4",
    icon: "🔧",
    skills: ["Git", "Postman", "Swagger", "JUnit", "Mockito"],
  },
];

const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "French", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 bg-[#0D1117]">
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
          <p className="section-label mb-4">Tech Stack</p>
          <h2
            className="font-syne text-4xl md:text-5xl font-bold text-[#F0EDE8] leading-tight"
            style={{ fontWeight: 800 }}
          >
            What I work with
          </h2>
        </motion.div>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.domain}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
              className="card p-6"
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">{group.icon}</span>
                <span
                  className="font-syne font-semibold text-sm uppercase tracking-wider"
                  style={{ color: group.color, fontWeight: 700 }}
                >
                  {group.domain}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{
                      borderColor: `${group.color}25`,
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = group.color;
                      (e.target as HTMLElement).style.borderColor = `${group.color}50`;
                      (e.target as HTMLElement).style.background = `${group.color}08`;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "#8892A4";
                      (e.target as HTMLElement).style.borderColor = `${group.color}25`;
                      (e.target as HTMLElement).style.background = "#0D1117";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-[#4A5568] uppercase tracking-wider mb-5 font-semibold">
            Languages
          </p>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#1E2A38] bg-[#080B12]"
              >
                <div>
                  <div className="text-sm font-semibold text-[#F0EDE8]">{lang.name}</div>
                  <div className="text-xs text-[#4A5568]">{lang.level}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
