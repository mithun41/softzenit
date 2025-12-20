"use client";

import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  Target,
  Mail,
  BarChart3,
  Globe,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Award,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const DigitalMarketingPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    document.title = "Digital Marketing | Softzen IT";
  }, []);

  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Rank higher on Google and drive organic traffic with proven SEO strategies",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Link Building",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Paid Advertising",
      description:
        "Maximize ROI with targeted Google Ads, Facebook Ads, and LinkedIn campaigns",
      features: [
        "Google Ads",
        "Meta Ads",
        "Retargeting",
        "Budget Optimization",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description:
        "Build engaged communities and grow your brand across all social platforms",
      features: [
        "Content Strategy",
        "Community Management",
        "Paid Social",
        "Influencer Marketing",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Convert leads into customers with personalized email automation",
      features: [
        "Email Automation",
        "Newsletter Design",
        "Lead Nurturing",
        "Campaign Analytics",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Track, measure, and optimize every marketing dollar you spend",
      features: [
        "Google Analytics",
        "Custom Dashboards",
        "ROI Tracking",
        "Performance Reports",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Globe,
      title: "Content Marketing",
      description:
        "Engage your audience with compelling content that drives conversions",
      features: [
        "Blog Writing",
        "Video Content",
        "Infographics",
        "Content Strategy",
      ],
      color: "from-pink-500 to-rose-500",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "300%", label: "Average ROI Increase" },
    { icon: Users, value: "50K+", label: "Leads Generated" },
    { icon: Award, value: "98%", label: "Client Satisfaction" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      desc: "We analyze your business, audience, and competitors",
    },
    {
      step: "02",
      title: "Strategy",
      desc: "Custom marketing plan tailored to your goals",
    },
    {
      step: "03",
      title: "Execution",
      desc: "Launch campaigns across multiple channels",
    },
    {
      step: "04",
      title: "Optimization",
      desc: "Continuous testing and improvement for better results",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
              <Zap className="text-yellow-300 w-5 h-5" />
              <span className="text-white text-sm font-semibold">
                Digital Marketing Excellence
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Grow Your Brand
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                Online
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform your digital presence with data-driven marketing
              strategies that deliver real, measurable results for your
              business.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
              {/* <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                View Our Work
              </button> */}
            </div>

            <div className="mt-12 flex gap-8">
              {stats.slice(0, 3).map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-50" />
              <img
                src="/assets/img/images/digital1.jpg"
                alt="Digital Marketing"
                className="relative rounded-3xl shadow-2xl w-full max-w-2xl border-4 border-white/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to boost your online presence and drive
              measurable growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black mb-4">Our Proven Process</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              A systematic approach to digital marketing success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-6xl font-black text-white/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 text-white/40" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Results That Speak
            </h2>
            <p className="text-xl text-gray-600">
              Real campaigns, real growth, real success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img
                src="/assets/img/images/gro.jpg"
                alt="Growth Marketing"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Growth Marketing
                  </h3>
                  <p className="text-white/90">
                    Scaling businesses through data-driven strategies
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img
                src="/assets/img/images/marketing.jpg"
                alt="Marketing Strategy"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Smart Marketing
                  </h3>
                  <p className="text-white/90">
                    Intelligent campaigns that convert
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-2xl text-white/90 mb-10">
              Let's create a winning strategy for your brand
            </p>
            <Link
              href="/contact"
              className="px-12 py-5 bg-white text-purple-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
            >
              Get Your Free Marketing Audit
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
