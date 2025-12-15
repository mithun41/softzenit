// app/services/crm-erp-solutions/page.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// Importing from their correct libraries
import { AiOutlineWallet } from "react-icons/ai";
import {
  FiCheck,
  FiArrowRight,
  FiUsers,
  FiTrendingUp,
  FiBox,
  FiDollarSign,
  FiPieChart,
  FiShoppingBag,
  FiClock,
  FiTarget,
  FiAward,
} from "react-icons/fi";

// --- Data Definitions (Unchanged) ---
const features = [
  "Custom CRM & ERP Development",
  "Sales Force Automation",
  "Inventory Management",
  "Financial Management",
  "HR & Payroll Systems",
  "Real-time Analytics & Reporting",
];

const solutions = [
  {
    type: "CRM",
    icon: FiUsers,
    img: "/assets/img/images/erp2.jpg",
    title: "Customer Relationship Management",
    description:
      "Build stronger customer relationships with intelligent CRM systems that track interactions, automate sales, and improve customer satisfaction.",
    // Updated Color: Teal-to-Blue
    color: "from-teal-500 to-blue-500",
    modules: [
      "Lead Management",
      "Sales Pipeline",
      "Contact Management",
      "Email Integration",
      "Customer Support",
      "Marketing Automation",
    ],
  },
  {
    type: "ERP",
    icon: AiOutlineWallet,
    img: "/assets/img/images/erp3.jpg",
    title: "Enterprise Resource Planning",
    description:
      "Streamline your entire business operations with integrated ERP solutions that connect all departments and provide real-time visibility.",
    // Updated Color: Indigo-to-Cyan
    color: "from-indigo-600 to-cyan-500",
    modules: [
      "Financial Management",
      "Inventory Control",
      "Supply Chain",
      "Manufacturing",
      "HR & Payroll",
      "Business Intelligence",
    ],
  },
];

const industryModules = [
  {
    icon: FiShoppingBag,
    title: "Retail & E-commerce",
    description:
      "POS systems, inventory tracking, multi-channel selling, multi-channel selling, and customer loyalty programs.",
  },
  {
    icon: FiBox,
    title: "Manufacturing",
    description:
      "Production planning, quality control, material requirements, and shop floor management.",
  },
  {
    icon: FiDollarSign,
    title: "Finance & Accounting",
    description:
      "General ledger, accounts payable/receivable, budgeting, and financial reporting.",
  },
  {
    icon: FiUsers,
    title: "Human Resources",
    description:
      "Employee management, payroll processing, attendance tracking, and performance reviews.",
  },
  {
    icon: FiTrendingUp,
    title: "Sales & Marketing",
    description:
      "Lead generation, campaign management, sales forecasting, and customer analytics.",
  },
  {
    icon: FiPieChart,
    title: "Business Intelligence",
    description:
      "Data visualization, KPI dashboards, predictive analytics, and custom reporting.",
  },
];

const benefits = [
  {
    icon: FiClock,
    title: "Save Time",
    stat: "40%",
    description: "Reduce manual tasks",
  },
  {
    icon: FiTrendingUp,
    title: "Increase Revenue",
    stat: "35%",
    description: "Boost sales with insights",
  },
  {
    icon: FiTarget,
    title: "Improve Accuracy",
    stat: "99%",
    description: "Eliminate errors",
  },
  {
    icon: FiAward,
    title: "Better Decisions",
    stat: "60%",
    description: "Faster data-driven decisions",
  },
];

const pricingPlans = [
  {
    name: "Starter CRM",
    price: "$4,999",
    description: "Perfect for small businesses",
    features: [
      "Up to 10 users",
      "Contact management",
      "Sales pipeline",
      "Email integration",
      "Basic reporting",
      "3 months support",
    ],
  },
  {
    name: "Complete ERP",
    price: "$19,999",
    description: "Full business management suite",
    features: [
      "Up to 50 users",
      "All CRM features",
      "Inventory management",
      "Financial accounting",
      "HR & Payroll",
      "12 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for large organizations",
    features: [
      "Unlimited users",
      "Multi-company support",
      "Custom modules",
      "API development",
      "Dedicated support",
      "Lifetime support",
    ],
  },
];
// --- End Data Definitions ---

const ERPCRMPage = () => {
  // Define primary color utility classes
  const PRIMARY_GRADIENT = "from-teal-600 to-blue-700";
  const PRIMARY_BUTTON =
    "from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700";
  const ACCENT_COLOR = "text-teal-500";
  const ACCENT_GRADIENT_BG = "bg-gradient-to-r from-teal-400 to-blue-400";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section (Updated to Teal/Blue) */}
      <section
        className={`relative pt-20 pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-br ${PRIMARY_GRADIENT} text-white overflow-hidden`}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <AiOutlineWallet className="w-5 h-5 text-teal-300" />
                <span className="text-sm font-semibold">
                  CRM & ERP Solutions
                </span>
              </div>

              <h1 className="text-white text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Transform Your
                <span
                  className={`block bg-gradient-to-r ${ACCENT_GRADIENT_BG} bg-clip-text text-transparent`}
                >
                  Business Operations
                </span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Streamline operations, boost productivity, and drive growth with
                intelligent CRM and ERP systems tailored to your business needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r ${PRIMARY_BUTTON} text-white font-semibold rounded-xl transition-all duration-300 shadow-xl hover:scale-105`}
                >
                  Request Demo <FiArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View Solutions
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              {/* Simplified icon visual for the hero image area */}
              <div className="">
                <img
                  src="/assets/img/images/erp4.jpg"
                  alt="Mobile App Preview"
                  className="max-w-md lg:max-w-lg rounded-3xl shadow-2xl ml-12"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none">
            {/* Wave color to match background: bg-gray-50 */}
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </section>

      {/* Solutions Section (Updated Colors) */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive systems to manage every aspect of your business
            </p>
          </motion.div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex p-4 bg-gradient-to-br ${solution.color} rounded-2xl mb-6 shadow-lg`}
                  >
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="inline-block px-4 py-2 bg-teal-100 rounded-full text-sm font-bold text-teal-700 mb-4">
                    {solution.type}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {solution.modules.map((module, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-white border border-gray-100 rounded-lg shadow-sm"
                      >
                        <FiCheck className={`w-5 h-5 ${ACCENT_COLOR}`} />
                        <span className="text-gray-700 font-medium text-sm">
                          {module}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div>
                    <div>
                      <img
                        src={solution.img}
                        alt="Mobile App Preview"
                        className="max-w-md lg:max-w-lg rounded-3xl shadow-2xl mt-12"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section (Updated Colors) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from implementing our solutions
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${PRIMARY_GRADIENT} rounded-xl flex items-center justify-center mx-auto mb-6`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-extrabold text-gray-900 mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Modules (Updated Colors) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Industry-Specific Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized solutions for different business sectors
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${PRIMARY_GRADIENT} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {module.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {module.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Updated Colors) */}
      <section
        className={`py-24 bg-gradient-to-br ${PRIMARY_GRADIENT} text-white`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-xl text-blue-200 mb-10">
              Let's discuss how CRM & ERP can transform your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Schedule Consultation <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ERPCRMPage;
