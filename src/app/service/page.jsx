// app/services/web-development/page.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// --- Updated Imports for Coding Icons ---
import { FiCheck, FiArrowRight } from "react-icons/fi";
import {
  IoCodeSlash,
  IoLayersOutline,
  IoGlobeOutline,
  IoSettingsOutline,
  IoServerOutline,
  IoCloudUploadOutline,
} from "react-icons/io5";
import {
  FaCartShopping,
  FaCode, // General code icon for fallback/TypeScript
  FaCodeBranch,
} from "react-icons/fa6";
import {
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPostgresql,
  DiAws,
  DiDocker,
  DiVim, // Using a generic editor/language icon for Next.js as DiNextjs is unavailable
  DiVisualstudio, // Using a development tool icon for TypeScript
} from "react-icons/di";

// --- Data Definitions (Updated Technologies Array with new Icons) ---
const features = [
  "Responsive Web Design",
  "Progressive Web Apps (PWA)",
  "E-commerce Development",
  "Content Management Systems",
  "API Development & Integration",
  "Cloud Hosting & Deployment",
];

const technologies = [
  { name: "React", icon: DiReact },
  { name: "Next.js", icon: FaCodeBranch }, // Using FaCodeBranch as a Next.js/routing symbol
  { name: "Node.js", icon: DiNodejsSmall },
  { name: "TypeScript", icon: DiVisualstudio },
  { name: "MongoDB", icon: DiMongodb },
  { name: "PostgreSQL", icon: DiPostgresql },
  { name: "AWS", icon: DiAws },
  { name: "Docker", icon: DiDocker },
];

const serviceTypes = [
  {
    icon: IoLayersOutline,
    title: "Custom Web Applications",
    description:
      "Tailored web solutions built from scratch to match your unique business requirements and workflows.",
  },
  {
    icon: FaCartShopping,
    title: "E-commerce Solutions",
    description:
      "Full-featured online stores with payment integration, inventory management, and order tracking.",
  },
  {
    icon: IoGlobeOutline,
    title: "Corporate Websites",
    description:
      "Professional business websites that establish your brand presence and credibility online.",
  },
  {
    icon: IoSettingsOutline,
    title: "Web Portals",
    description:
      "Complex portals for customer management, employee collaboration, or partner ecosystems.",
  },
  {
    icon: IoServerOutline,
    title: "Database Design",
    description:
      "Robust database architecture ensuring data integrity, security, and optimal performance.",
  },
  {
    icon: IoCloudUploadOutline,
    title: "Cloud Solutions",
    description:
      "Scalable cloud-based applications with high availability and disaster recovery.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements, define project scope, and create a detailed roadmap.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and interactive prototypes for your approval.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Expert developers build your application using modern frameworks and best practices.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    description:
      "Rigorous testing ensures quality before we deploy to production environment.",
  },
];
// --- End Data Definitions ---

const WebDevelopmentPage = () => {
  // Define new color utility classes (Indigo/Purple/Pink)
  const PRIMARY_GRADIENT = "from-indigo-900 via-purple-900 to-fuchsia-900";
  const PRIMARY_BUTTON =
    "from-fuchsia-500 to-indigo-500 hover:from-fuchsia-600 hover:to-indigo-600";
  const ACCENT_COLOR = "text-fuchsia-500";
  const ACCENT_GRADIENT_BG = "bg-gradient-to-r from-fuchsia-400 to-indigo-400";
  const ACCENT_GRADIENT_WAVE = "from-fuchsia-500/30 to-indigo-500/30";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className={`relative pt-20 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-br ${PRIMARY_GRADIENT} text-white overflow-hidden`}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <IoCodeSlash className={`w-5 h-5 ${ACCENT_COLOR}`} />
                <span className="text-sm font-semibold">Web Development</span>
              </div>

              <h1 className="text-white text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Build Powerful
                <span
                  className={`block ${ACCENT_GRADIENT_BG} bg-clip-text text-transparent`}
                >
                  Web Applications
                </span>
              </h1>

              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Transform your ideas into scalable, high-performance web
                applications that drive business growth and deliver exceptional
                user experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${PRIMARY_BUTTON} text-white font-semibold rounded-xl transition-all duration-300 shadow-xl hover:scale-105`}
                >
                  Start Your Project
                  <FiArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/projects/web"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  View Projects
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ACCENT_GRADIENT_WAVE} rounded-3xl blur-3xl`}
                ></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <IoCodeSlash className="w-full h-64 text-white/20" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services for modern businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-fuchsia-50 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${PRIMARY_BUTTON} rounded-xl flex items-center justify-center shadow-md`}
                >
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg font-semibold text-gray-800">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Web Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple websites to complex enterprise applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${PRIMARY_BUTTON} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section (UPDATED ICONS) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <tech.icon
                  className={`text-5xl mb-4 mx-auto ${ACCENT_COLOR}`}
                />{" "}
                {/* Using the component directly */}
                <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-white lg:text-5xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven agile methodology that delivers results efficiently
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Vertical/Horizontal Connectors */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-fuchsia-700/30 hidden md:block lg:hidden"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-fuchsia-700/30 hidden lg:block"></div>

            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center lg:text-left p-4 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:border-fuchsia-500 transition-all duration-300"
              >
                <div className="flex justify-center lg:justify-start">
                  <div
                    className={`w-12 h-12 flex items-center justify-center  rounded-full font-bold text-xl mb-4 bg-gradient-to-br ${PRIMARY_BUTTON} text-white shadow-xl`}
                  >
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl text-white font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-24 bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-700 text-white`}
        id="contact"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              Let's discuss your project and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-fuchsia-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Get Free Consultation
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/projects/web"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
