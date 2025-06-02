"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master en Systèmes Intelligents",
      institution: "Université Mohammed V",
      location: "Rabat, Maroc",
      period: "Octobre 2023 - Présent",
      status: "En cours",
      description:
        "Formation avancée en intelligence artificielle, machine learning et systèmes intelligents.",
      type: "master",
    },
    {
      degree: "Licence en Génie Logiciel",
      institution: "Université Cadi Ayyad",
      location: "Essaouira, Maroc",
      period: "Septembre 2022 - Juillet 2023",
      status: "Diplômé",
      description:
        "Formation spécialisée en développement logiciel, architectures système et gestion de projets.",
      type: "licence",
    },
    {
      degree: "BTS Développement de Systèmes d'Information",
      institution: "École Technique",
      location: "Oujda, Maroc",
      period: "Septembre 2020 - Juillet 2022",
      status: "Diplômé",
      description:
        "Formation technique en développement d'applications et gestion de bases de données.",
      type: "bts",
    },
  ];

  const courses = [
    {
      title: "Building Scalable Java Microservices",
      provider: "Google Cloud",
      date: "Mars 2024",
      certificate: true,
      skills: ["Java", "Microservices", "Google Cloud", "Spring Boot"],
    },
    {
      title: "Machine Learning with Python",
      provider: "IBM",
      date: "Avril 2024",
      certificate: true,
      skills: ["Python", "Machine Learning", "Data Science", "TensorFlow"],
    },
    {
      title: "Big Data 101",
      provider: "IBM",
      date: "Novembre 2024",
      certificate: true,
      skills: ["Big Data", "Analytics", "Data Processing", "Hadoop"],
    },
  ];

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

        {/* Professional Courses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Certifications Professionnelles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-2xl">🏆</div>
                  {course.certificate && (
                    <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                      Certifié
                    </span>
                  )}
                </div>

                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {course.title}
                </h4>

                <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {course.provider}
                </div>

                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {course.date}
                </div>

                <div className="flex flex-wrap gap-1">
                  {course.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                3
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Diplômes obtenus
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                3
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Certifications
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                4+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Années d'études
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                En cours
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Formation Master
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
