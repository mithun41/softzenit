// components/WorkingProcessSection.js
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const processSteps = [
  {
    step: 1,
    title: "Discover",
    description:
      "We start by understanding your needs and documenting every detail to ensure nothing is overlooked.",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "We create a clear and actionable plan, simplifying complex ideas into achievable steps.",
  },
  {
    step: 3,
    title: "Design & Dev",
    description:
      "We design intuitive interfaces and develop robust solutions tailored to your business requirements.",
  },
  {
    step: 4,
    title: "Testing",
    description:
      "Every product is thoroughly tested to ensure quality, reliability, and seamless performance.",
  },
  {
    step: 5,
    title: "Project Deliver",
    description:
      "We deliver the final solution on time, ensuring it meets expectations and drives results.",
  },
];

const WorkingProcessSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 lg:py-10 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
            Working Process
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto">
            Applying Industry’s Best Practices at Every Step
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Wavy Line for Desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-10 pointer-events-none">
            <svg
              className="w-full h-16"
              viewBox="0 0 1200 60"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M 0 30 Q 60 10, 120 30 Q 180 50, 240 30 Q 300 10, 360 30 Q 420 50, 480 30 Q 540 10, 600 30 Q 660 50, 720 30 Q 780 10, 840 30 Q 900 50, 960 30 Q 1020 10, 1080 30 Q 1140 50, 1200 30"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeDasharray="8 12"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl z-10 transition-all duration-500 ${
                      hoveredIndex === index
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 shadow-2xl shadow-blue-500/50 scale-110 text-white"
                        : "bg-white border-2 border-blue-500 text-blue-600 shadow-md"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>{`0${item.step}`}</span>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border-4 border-blue-400"
                      />
                    )}
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  className={`p-8 rounded-2xl transition-all duration-500 ${
                    hoveredIndex === index
                      ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl transform -translate-y-4"
                      : "bg-white text-gray-800 shadow-lg hover:shadow-xl"
                  }`}
                  style={{ minHeight: "280px" }}
                >
                  <h3
                    className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      hoveredIndex === index ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-base leading-relaxed transition-colors duration-300 ${
                      hoveredIndex === index ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "60px" }}
                      transition={{ duration: 0.5 }}
                      className="mt-6 h-1 bg-white/50 rounded-full"
                    />
                  )}
                </motion.div>

                {/* Mobile Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-blue-200" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        ></motion.div>
      </div>
    </section>
  );
};

export default WorkingProcessSection;
