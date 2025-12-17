// components/MobileAppSliderSection.js
"use client";

import { useState } from "react";
import { FcApproval } from "react-icons/fc";
import { MdArrowForward } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- Slider Data ---------------- */
const sliderData = [
  {
    id: 1,
    title: "Mobile App Solutions Built for Real Business Growth",
    description:
      "We design and develop high-performance mobile applications that feel intuitive, scale smoothly, and solve real business problems across iOS and Android platforms.",
    features: [
      "Custom iOS and Android app development",
      "User-friendly and responsive mobile experiences",
      "Seamless integration with business systems",
    ],
    imageSrc: "assets/img/images/project-video1.png",
  },
  {
    id: 2,
    title: "Innovative Web Platforms & Digital Transformation",
    description:
      "Build robust, scalable web applications and SaaS products with modern technologies to transform your digital presence and operations.",
    features: [
      "High-performance Next.js development",
      "Cloud-ready scalable architecture",
      "Secure API & backend integration",
    ],
    imageSrc: "assets/img/images/project-video.png",
  },
];

/* ---------------- Animations ---------------- */
const leftVariants = {
  initial: { x: -80, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 80, opacity: 0 },
};

const rightVariants = {
  initial: { x: 80, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -80, opacity: 0 },
};

const MobileAppSliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentItem = sliderData[currentSlide];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));

  const handleButtonClick = () => {
    console.log(`Get Started Clicked for Slide ${currentItem.id}`);
  };

  return (
    <section className=" bg-gray-50 overflow-hidden relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-blue-600 text-sm font-semibold uppercase">
          Learn Our Projects
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
          Our Work Does the Talking
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="relative bg-white border border-gray-100 rounded-xl shadow-xl p-6 md:p-10">
          {/* Slider Content */}
          <AnimatePresence mode="wait">
            <div
              key={currentItem.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
            >
              {/* Left Content */}
              <motion.div
                variants={leftVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h3 className="text-xl sm:text-3xl font-bold text-gray-900 leading-snug">
                  {currentItem.title}
                </h3>

                <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-xl">
                  {currentItem.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {currentItem.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FcApproval className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <button
                    onClick={handleButtonClick}
                    className="inline-flex items-center gap-2 px-7 py-3
                               text-sm font-semibold text-white bg-blue-600
                               rounded-md hover:bg-blue-700 transition"
                  >
                    Get Started
                    <MdArrowForward className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                variants={rightVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              >
                <img
                  src={currentItem.imageSrc}
                  alt={currentItem.title}
                  className="w-full rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2
                       w-12 h-12 bg-white text-gray-800 rounded-full
                       shadow-lg border border-gray-200 flex items-center
                       justify-center hover:bg-gray-100 transition z-20"
          >
            <IoIosArrowBack size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2
                       w-12 h-12 bg-blue-600 text-white rounded-full
                       shadow-lg flex items-center justify-center
                       hover:bg-blue-700 transition z-20"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSliderSection;
