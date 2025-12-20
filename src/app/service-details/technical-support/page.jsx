"use client";

import { useEffect, useState } from "react";
import {
  Headphones,
  Clock,
  Shield,
  Zap,
  Users,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Server,
  Settings,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

const TechnicalSupportPage = () => {
  useEffect(() => {
    document.title = "Technical Support | Softzen IT";
  }, []);
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description:
        "Round-the-clock support to address your technical issues anytime, anywhere.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Response",
      description:
        "Quick response times with average resolution under 2 hours for critical issues.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description:
        "Certified professionals with years of experience in diverse technologies.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description:
        "Secure remote access and compliance with industry security standards.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "System Monitoring",
      description:
        "Proactive monitoring to identify and resolve issues before they impact you.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom Solutions",
      description:
        "Tailored support packages designed to meet your specific business needs.",
    },
  ];

  const services = [
    {
      title: "Helpdesk Support",
      items: [
        "Technical troubleshooting",
        "Software installation & configuration",
        "User account management",
        "Password resets & access issues",
        "Hardware diagnostics",
      ],
    },
    {
      title: "System Maintenance",
      items: [
        "Regular system updates",
        "Performance optimization",
        "Backup & recovery solutions",
        "Security patch management",
        "Database maintenance",
      ],
    },
    {
      title: "Network Support",
      items: [
        "Network configuration",
        "Connectivity troubleshooting",
        "Firewall management",
        "VPN setup & support",
        "Bandwidth optimization",
      ],
    },
    {
      title: "Emergency Response",
      items: [
        "Critical system failures",
        "Data recovery services",
        "Security breach response",
        "Disaster recovery planning",
        "Business continuity support",
      ],
    },
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "<2hrs", label: "Avg Response Time" },
    { number: "500+", label: "Clients Supported" },
    { number: "24/7", label: "Support Available" },
  ];

  const faqs = [
    {
      question: "What are your support hours?",
      answer:
        "We provide 24/7 technical support, 365 days a year. Our expert team is always available to assist you with any technical issues, regardless of the time or day.",
    },
    {
      question: "How quickly can I expect a response?",
      answer:
        "For critical issues, we typically respond within 15-30 minutes. Standard support requests are addressed within 2 hours. Our average resolution time is under 2 hours for most technical issues.",
    },
    {
      question: "What types of systems do you support?",
      answer:
        "We support a wide range of systems including Windows, Linux, macOS, cloud infrastructure (AWS, Azure, Google Cloud), databases, networking equipment, and various enterprise software solutions.",
    },
    {
      question: "Do you offer remote support?",
      answer:
        "Yes, we provide secure remote support for most issues. Our technicians use encrypted connections to safely access and troubleshoot your systems remotely, ensuring quick resolution without on-site visits.",
    },
    {
      question: "Can you customize support packages?",
      answer:
        "Absolutely! We understand that every business has unique needs. We offer flexible, customized support packages tailored to your specific requirements, budget, and business objectives.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-emerald-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              <Headphones className="w-4 h-4" />
              Professional Technical Support
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Expert Technical Assistance
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                24/7 for Your Business
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              We provide reliable, expert technical assistance to keep your
              systems running smoothly and ensure minimal downtime for your
              business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl hover:scale-105 transform duration-300 flex items-center gap-2">
                  Get Support Now <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Why Choose Our Technical Support?
            </h2>
            <p className="text-lg text-gray-600">
              We combine expertise, speed, and reliability to deliver
              exceptional technical support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Comprehensive Support Services
            </h2>
            <p className="text-lg text-gray-600">
              From basic troubleshooting to complex system maintenance, we've
              got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              How We Support You
            </h2>
            <p className="text-lg text-gray-600">
              Our streamlined support process ensures quick resolution of your
              technical issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Report Issue",
                desc: "Contact us via phone, email, or chat with your technical issue",
              },
              {
                step: "02",
                title: "Rapid Assessment",
                desc: "Our experts quickly analyze and prioritize your request",
              },
              {
                step: "03",
                title: "Swift Resolution",
                desc: "We implement the solution using best practices and tools",
              },
              {
                step: "04",
                title: "Follow-up",
                desc: "We ensure everything works perfectly and document the solution",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our technical support
              services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalSupportPage;
