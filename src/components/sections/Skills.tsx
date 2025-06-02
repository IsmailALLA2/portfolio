"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Smartphone,
  Server,
  Brain,
  Globe,
  Heart,
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Flutter", icon: "📱", category: "mobile" },
    { name: "Spring Boot", icon: "🌱", category: "backend" },
    { name: "Angular", icon: "🅰️", category: "frontend" },
    { name: "Java", icon: "☕", category: "backend" },
    { name: "SQL", icon: "🗄️", category: "database" },
    { name: "Python", icon: "🐍", category: "backend" },
    { name: "Machine Learning", icon: "🤖", category: "ai" },
    { name: "OpenStack", icon: "☁️", category: "cloud" },
  ];

  const languages = [
    { name: "Arabe", level: "Native", percentage: 100 },
    { name: "Français", level: "Fluent", percentage: 90 },
    { name: "Anglais", level: "Intermediate", percentage: 70 },
  ];

  const interests = [
    { name: "Volleyball", icon: "🏐" },
    { name: "Running", icon: "🏃‍♂️" },
  ];

  const skillCategories = [
    { name: "Mobile Development", icon: Smartphone, color: "text-blue-600" },
    { name: "Backend Development", icon: Server, color: "text-green-600" },
    { name: "Database Management", icon: Database, color: "text-purple-600" },
    { name: "Machine Learning", icon: Brain, color: "text-red-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions
            innovantes
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Domaines d'expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <category.icon className={`h-8 w-8 ${category.color} mb-4`} />
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {category.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <Globe className="h-6 w-6 mr-3 text-blue-600" />
              Langues
            </h3>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div
                  key={language.name}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {language.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {language.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${language.percentage}%` }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-blue-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <Heart className="h-6 w-6 mr-3 text-red-600" />
              Centres d'intérêt
            </h3>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-3">{interest.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {interest.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
