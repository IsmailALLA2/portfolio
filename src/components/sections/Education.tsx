"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master - Systèmes de traitement intelligents",
      institution: "Université Mohammed V (Faculté des Sciences)",
      location: "Rabat",
      period: "octobre 2023 – novembre 2025",
      status: "Diplômé",
      description:
        "Formation avancée en systèmes de traitement intelligents et intelligence artificielle.",
      type: "master",
    },
    {
      degree: "Licence - Ingénierie des Systèmes Informatiques et Logiciels",
      institution: "Université Cadi Ayyad (École Supérieure de Technologie)",
      location: "Essaouira",
      period: "septembre 2022 – juillet 2023",
      status: "Diplômé",
      description:
        "Formation spécialisée en ingénierie des systèmes informatiques et développement logiciel.",
      type: "licence",
    },
    {
      degree: "BTS - Développement des systèmes d'information",
      institution: "BTS (Brevet de Technicien Supérieur)",
      location: "Oujda",
      period: "septembre 2020 – juillet 2022",
      status: "Diplômé",
      description:
        "Formation technique en développement des systèmes d'information (Bac +2).",
      type: "bts",
    },
  ];

  const courses = [];

  const getEducationIcon = (type: string) => {
    switch (type) {
      case "master":
        return "🎓";
      case "licence":
        return "🎓";
      case "bts":
        return "📚";
      default:
        return "🎓";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "En cours"
      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Formation & Éducation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mon parcours académique et mes certifications professionnelles
          </p>
        </motion.div>

        {/* Academic Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Formation Académique
            </h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4 mt-1">
                      {getEducationIcon(edu.type)}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {edu.institution}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      edu.status
                    )} mt-2 lg:mt-0 self-start lg:self-center`}
                  >
                    {edu.status}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 dark:text-gray-400 mb-3 space-y-1 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {edu.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {edu.location}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Education Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                3
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Diplômes obtenus
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                5+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Années d'études
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                Master
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Diplôme obtenu
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
