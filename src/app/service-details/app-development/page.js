// app/services/mobile-app-development/page.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// --- Updated Imports for Mobile & Development Icons ---
import { FiCheck, FiArrowRight } from "react-icons/fi"; // Retaining FiCheck/FiArrowRight as general utility icons
import { FaApple, FaAndroid, FaCode } from "react-icons/fa"; // Added FaCode for general coding
import {
  IoPhonePortraitOutline, // Replaces FiSmartphone (Hero/Business Apps)
  IoFlashOutline, // Replaces FiZap (Social/Messaging)
  IoShieldOutline, // Replaces FiShield (Healthcare/Fitness)
  IoNotificationsOutline, // Replaces FiBell (On-Demand Services)
  IoLocationOutline, // Replaces FiMapPin (Travel/Tourism)
  IoCameraOutline, // Replaces FiCamera (Entertainment/Media)
  IoGlobeOutline, // Replaces FiMonitor (Cross-Platform)
  IoLogoReact, // React Native Icon
  IoLogoNodejs, // Node.js Icon
  IoLogoFirebase, // Firebase Icon
  IoLogoAmazon, // AWS Icon
} from "react-icons/io5";
import {
  MdDataObject, // For database/structure - Replaces MongoDB icon
  MdOutlineFormatListBulleted, // For Flutter or cross-platform
} from "react-icons/md";
import {
  FaSwift, // Swift Icon
  FaCodeBranch, // Kotlin/Android Icon or general branching
} from "react-icons/fa6";

const features = [
  "Native iOS & Android Apps",
  "Cross-Platform Development",
  "Custom UI/UX Design",
  "Push Notifications",
  "Offline Functionality",
  "App Store Optimization",
];

const platforms = [
  {
    icon: FaApple,
    name: "iOS Development",
    description: "Native apps for iPhone and iPad using Swift and SwiftUI",
    color: "from-gray-700 to-gray-900",
  },
  {
    icon: FaAndroid,
    name: "Android Development",
    description:
      "Native apps for Android devices using Kotlin and Jetpack Compose",
    color: "from-green-500 to-green-700",
  },
  {
    icon: IoGlobeOutline, // Updated Icon
    name: "Cross-Platform",
    description:
      "Single codebase for both iOS and Android using React Native or Flutter",
    color: "from-purple-500 to-pink-600",
  },
];

const appTypes = [
  {
    icon: IoPhonePortraitOutline, // Updated Icon
    title: "Business Apps",
    description:
      "Streamline operations with custom apps for inventory, CRM, employee management, and more.",
    examples: ["Enterprise Apps", "Internal Tools", "B2B Solutions"],
  },
  {
    icon: IoFlashOutline, // Updated Icon
    title: "Social & Messaging",
    description:
      "Build engaging social platforms and real-time messaging applications with chat, stories, and feeds.",
    examples: ["Social Networks", "Chat Apps", "Community Platforms"],
  },
  {
    icon: IoShieldOutline, // Updated Icon
    title: "Healthcare & Fitness",
    description:
      "HIPAA-compliant health apps with telemedicine, fitness tracking, and wellness features.",
    examples: ["Telemedicine", "Fitness Trackers", "Health Records"],
  },
  {
    icon: IoNotificationsOutline, // Updated Icon
    title: "On-Demand Services",
    description:
      "Connect service providers with customers through booking, scheduling, and delivery apps.",
    examples: ["Food Delivery", "Ride Sharing", "Home Services"],
  },
  {
    icon: IoLocationOutline, // Updated Icon
    title: "Travel & Tourism",
    description:
      "Enhance travel experiences with booking systems, guides, and location-based services.",
    examples: ["Travel Booking", "City Guides", "Hotel Apps"],
  },
  {
    icon: IoCameraOutline, // Updated Icon
    title: "Entertainment & Media",
    description:
      "Engage users with streaming, gaming, photo/video editing, and content platforms.",
    examples: ["Video Streaming", "Music Apps", "Photo Editors"],
  },
];

const technologies = [
  { name: "React Native", icon: IoLogoReact, category: "Cross-Platform" },
  {
    name: "Flutter",
    icon: MdOutlineFormatListBulleted,
    category: "Cross-Platform",
  },
  { name: "Swift", icon: FaSwift, category: "iOS" },
  { name: "Kotlin", icon: FaCodeBranch, category: "Android" }, // Using FaCodeBranch for Kotlin/Android
  { name: "Firebase", icon: IoLogoFirebase, category: "Backend" },
  { name: "AWS", icon: IoLogoAmazon, category: "Cloud" },
  { name: "MongoDB", icon: MdDataObject, category: "Database" },
  { name: "Node.js", icon: IoLogoNodejs, category: "Backend" },
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We understand your app idea, target audience, and business goals to create a winning strategy.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "Our designers craft intuitive interfaces and create interactive prototypes for user testing.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Expert developers build your app with clean code while QA ensures flawless functionality.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We handle app store submission and provide ongoing maintenance and feature updates.",
  },
];

const pricingPlans = [
  {
    name: "MVP",
    price: "$9,999",
    description: "Minimum Viable Product to test your idea",
    features: [
      "Single platform (iOS or Android)",
      "5-7 core features",
      "Basic UI/UX design",
      "App store submission",
      "2 months development",
      "1 month support",
    ],
  },
  {
    name: "Standard",
    price: "$24,999",
    description: "Full-featured app for both platforms",
    features: [
      "iOS & Android apps",
      "10-15 features",
      "Custom design",
      "User authentication",
      "Push notifications",
      "Backend integration",
      "4 months development",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Complex apps with advanced features",
    features: [
      "Native or cross-platform",
      "Unlimited features",
      "Advanced integrations",
      "Real-time functionality",
      "Analytics & reporting",
      "Dedicated team",
      "Priority support",
      "12 months support",
    ],
  },
];

const MobileAppPage = () => {
  // Utility classes for easy color reference
  const ACCENT_COLOR_HERO = "text-pink-400";
  const PRIMARY_BUTTON =
    "from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <IoPhonePortraitOutline
                  className={`w-5 h-5 ${ACCENT_COLOR_HERO}`}
                />{" "}
                {/* Updated Icon */}
                <span className="text-sm font-semibold">
                  Mobile App Development
                </span>
              </div>

              <h1 className="text-white text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Create Amazing
                <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Mobile Apps
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your ideas into powerful iOS and Android applications
                that engage users and drive business growth on mobile platforms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${PRIMARY_BUTTON} text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/50 hover:scale-105`}
                >
                  Start Your Project
                  <FiArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View Services
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-4xl font-bold text-pink-400">150+</div>
                  <div className="text-sm text-gray-400 mt-1">
                    Apps Delivered
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400">98%</div>
                  <div className="text-sm text-gray-400 mt-1">
                    Client Satisfaction
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-400">5M+</div>
                  <div className="text-sm text-gray-400 mt-1">Downloads</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="">
                <img
                  src="/assets/img/images/app1.jpg"
                  alt="Mobile App Preview"
                  className="max-w-md lg:max-w-lg rounded-3xl shadow-2xl ml-12"
                />
              </div>
            </motion.div>
          </div>
        </div>

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

      {/* Platform Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We build apps for iOS, Android, or both platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100"
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <platform.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {platform.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {platform.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Key Features We Implement
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential features that make your app stand out
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
                className="flex items-center gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${PRIMARY_BUTTON} rounded-xl flex items-center justify-center`}
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

      {/* App Types Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Types of Apps We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple utilities to complex enterprise solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${PRIMARY_BUTTON} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <type.icon className="w-8 h-8 text-white" />{" "}
                  {/* Updated Icons */}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section (UPDATED ICONS) */}
      <section className="py-24 bg-gray-50">
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
              Modern tools and frameworks for high-performance apps
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
                className="p-8 bg-white rounded-2xl text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <tech.icon
                  className={`text-5xl mb-4 mx-auto text-purple-600`}
                />{" "}
                {/* Used tech.icon component */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
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
            <h2 className="text-4xl text-white  lg:text-5xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              From concept to launch in four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-pink-500 mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl text-white  font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 -right-4 w-8 h-0.5 bg-pink-500/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (Unchanged, but position is here) */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-pink-600 via-purple-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Turn Your App Idea Into Reality
            </h2>
            <p className="text-xl text-pink-100 mb-10">
              Join hundreds of successful businesses who trusted us with their
              mobile apps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Schedule a Call
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/projects/app"
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

export default MobileAppPage;
