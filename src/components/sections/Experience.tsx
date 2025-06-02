"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Asas",
      location: "Remote",
      period: "Juin 2024 - Juillet 2024",
      description:
        "Développement d'un système connectant les étudiants aux universités turques et aux agences.",
      technologies: ["Java", "Spring Boot", "Angular", "SQL"],
      type: "freelance",
    },
    {
      title: "Mobile Developer",
      company: "ZairTech",
      location: "Rabat, Maroc",
      period: "Janvier 2024 - Avril 2024",
      description:
        "Intégration d'APIs REST, utilisation de GetX pour la gestion d'état, notifications push et mises à jour en temps réel.",
      technologies: ["Flutter", "GetX", "REST API", "Push Notifications"],
      type: "contract",
    },
    {
      title: "Backend Intern",
      company: "SogeSoft",
      location: "Rabat, Maroc",
      period: "Avril 2023 - Juillet 2023",
      description:
        "Développement d'APIs RESTful en utilisant Spring Boot et Hibernate pour la gestion des données.",
      technologies: ["Spring Boot", "Hibernate", "Java", "RESTful APIs"],
      type: "internship",
    },
    {
      title: "Android Intern",
      company: "SogeSoft",
      location: "Rabat, Maroc",
      period: "Avril 2022 - Septembre 2022",
      description:
        "Construction d'une application Android moderne en utilisant le SDK Flutter.",
      technologies: ["Flutter", "Android SDK", "Dart"],
      type: "internship",
    },
    {
      title: "Desktop App Intern",
      company: "Colaimo",
      location: "Maroc",
      period: "Juin 2021 - Juillet 2021",
      description: "Développement d'applications de bureau en Java.",
      technologies: ["Java", "Swing", "Desktop Applications"],
      type: "internship",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "freelance":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "contract":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "internship":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "freelance":
        return "Freelance";
      case "contract":
        return "Contrat";
      case "internship":
        return "Stage";
      default:
        return "Emploi";
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Expérience Professionnelle
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mon parcours professionnel et les projets sur lesquels j'ai
            travaillé
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-2">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {experience.company}
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                          experience.type
                        )}`}
                      >
                        {getTypeLabel(experience.type)}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {experience.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                3+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Années d'expérience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                5
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Postes occupés
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                4
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Entreprises
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
