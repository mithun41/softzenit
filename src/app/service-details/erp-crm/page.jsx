"use client";

import {
  Wallet,
  Check,
  ArrowRight,
  Users,
  TrendingUp,
  Box,
  DollarSign,
  PieChart,
  ShoppingBag,
  Clock,
  Target,
  Award,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

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
    icon: Users,
    img: "/assets/img/images/erp2.jpg",
    title: "Customer Relationship Management",
    description:
      "Build stronger customer relationships with intelligent CRM systems that track interactions, automate sales, and improve customer satisfaction.",
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
    icon: Wallet,
    img: "/assets/img/images/erp3.jpg",
    title: "Enterprise Resource Planning",
    description:
      "Streamline your entire business operations with integrated ERP solutions that connect all departments and provide real-time visibility.",
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
    icon: ShoppingBag,
    title: "Retail & E-commerce",
    description:
      "POS systems, inventory tracking, multi-channel selling, and customer loyalty programs.",
  },
  {
    icon: Box,
    title: "Manufacturing",
    description:
      "Production planning, quality control, material requirements, and shop floor management.",
  },
  {
    icon: DollarSign,
    title: "Finance & Accounting",
    description:
      "General ledger, accounts payable/receivable, budgeting, and financial reporting.",
  },
  {
    icon: Users,
    title: "Human Resources",
    description:
      "Employee management, payroll processing, attendance tracking, and performance reviews.",
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing",
    description:
      "Lead generation, campaign management, sales forecasting, and customer analytics.",
  },
  {
    icon: PieChart,
    title: "Business Intelligence",
    description:
      "Data visualization, KPI dashboards, predictive analytics, and custom reporting.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    stat: "40%",
    description: "Reduce manual tasks",
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    stat: "35%",
    description: "Boost sales with insights",
  },
  {
    icon: Target,
    title: "Improve Accuracy",
    stat: "99%",
    description: "Eliminate errors",
  },
  {
    icon: Award,
    title: "Better Decisions",
    stat: "60%",
    description: "Faster data-driven decisions",
  },
];

const ERPCRMPage = () => {
  useEffect(() => {
    document.title = "ERP & CRM Solutions | Softzen IT";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-16 sm:pb-20 lg:pt-24 lg:pb-32 bg-gradient-to-br from-teal-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 sm:mb-6">
                <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300" />
                <span className="text-xs sm:text-sm font-semibold">
                  CRM & ERP Solutions
                </span>
              </div>

              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  Business Operations
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                Streamline operations, boost productivity, and drive growth with
                intelligent CRM and ERP systems tailored to your business needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl hover:scale-105 text-sm sm:text-base"
                >
                  Request Demo <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                {/* <a
                  href="#solutions"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                >
                  View Solutions
                </a> */}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="ml-0 lg:ml-12">
                <img
                  src="/assets/img/images/erp4.jpg"
                  alt="ERP CRM Preview"
                  className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive systems to manage every aspect of your business
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`inline-flex p-3 sm:p-4 bg-gradient-to-br ${solution.color} rounded-2xl mb-4 sm:mb-6 shadow-lg`}
                  >
                    <solution.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-100 rounded-full text-xs sm:text-sm font-bold text-teal-700 mb-3 sm:mb-4">
                    {solution.type}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.modules.map((module, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-white border border-gray-100 rounded-lg shadow-sm"
                      >
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-xs sm:text-sm">
                          {module}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={`mt-8 lg:mt-0 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex justify-center lg:justify-start">
                    <img
                      src={solution.img}
                      alt={solution.title}
                      className="w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Real results from implementing our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 sm:p-8 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Modules */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Industry-Specific Modules
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Specialized solutions for different business sectors
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industryModules.map((module, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <module.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {module.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Streamline Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 mb-8 sm:mb-10">
              Let's discuss how CRM & ERP can transform your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 text-sm sm:text-base"
              >
                Schedule Consultation{" "}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPCRMPage;
