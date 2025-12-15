// app/services/marketing-solutions/page.js
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiCheck,
  FiArrowRight,
  FiTrendingUp,
  FiTarget,
  FiUsers,
  FiBarChart2,
  FiMail,
  FiSearch,
  FiGlobe,
  FiClock,
  FiAward,
} from "react-icons/fi";
import { AiOutlineThunderbolt } from "react-icons/ai";

/* ================= DATA ================= */

const features = [
  "Digital Marketing Strategy",
  "SEO & Content Marketing",
  "Social Media Campaigns",
  "Paid Ads Management",
  "Email Marketing Automation",
  "Analytics & Conversion Tracking",
];

const solutions = [
  {
    type: "Growth",
    icon: FiTrendingUp,
    img: "/assets/img/images/gro.jpg",
    title: "Growth Marketing",
    description:
      "Data-driven growth strategies focused on acquisition, activation, retention, and conversion to scale your business sustainably.",
    color: "from-pink-500 to-rose-500",
    modules: [
      "Funnel Optimization",
      "A/B Testing",
      "Conversion Rate Optimization",
      "Retention Strategy",
      "Customer Analytics",
      "Performance Tracking",
    ],
  },
  {
    type: "Digital",
    icon: FiGlobe,
    img: "/assets/img/images/digital1.jpg",
    title: "Digital Marketing",
    description:
      "Build brand visibility and attract high-quality leads through targeted digital campaigns across search, social, and content platforms.",
    color: "from-purple-600 to-indigo-600",
    modules: [
      "SEO Optimization",
      "Google Ads",
      "Social Media Marketing",
      "Content Strategy",
      "Email Campaigns",
      "Landing Pages",
    ],
  },
];

const industryModules = [
  {
    icon: FiSearch,
    title: "SEO & Content",
    description:
      "On-page SEO, technical SEO, keyword research, content planning, and long-term organic growth.",
  },
  {
    icon: FiUsers,
    title: "Social Media",
    description:
      "Platform-specific strategies, content creation, community management, and paid social ads.",
  },
  {
    icon: FiMail,
    title: "Email Marketing",
    description:
      "Automated email flows, newsletters, lead nurturing, and conversion-focused campaigns.",
  },
  {
    icon: FiBarChart2,
    title: "Analytics & Reporting",
    description:
      "Performance dashboards, conversion tracking, insights, and ROI-focused reporting.",
  },
  {
    icon: FiTarget,
    title: "Paid Advertising",
    description:
      "Google Ads, Meta Ads, remarketing campaigns, and budget-optimized ad strategies.",
  },
  {
    icon: FiTrendingUp,
    title: "Brand Growth",
    description:
      "Brand positioning, messaging, audience targeting, and long-term growth planning.",
  },
];

const benefits = [
  {
    icon: FiClock,
    title: "Faster Results",
    stat: "45%",
    description: "Reduced time to market",
  },
  {
    icon: FiTrendingUp,
    title: "Higher Conversions",
    stat: "60%",
    description: "Improved lead conversion",
  },
  {
    icon: FiTarget,
    title: "Better Targeting",
    stat: "3x",
    description: "More qualified leads",
  },
  {
    icon: FiAward,
    title: "Stronger Brand",
    stat: "70%",
    description: "Increase brand visibility",
  },
];

/* ================= COMPONENT ================= */

const MarketingPage = () => {
  const PRIMARY_GRADIENT = "from-pink-600 to-purple-700";
  const PRIMARY_BUTTON =
    "from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700";
  const ACCENT_COLOR = "text-pink-500";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section
        className={`relative pt-24 pb-24 bg-gradient-to-br ${PRIMARY_GRADIENT} text-white overflow-hidden`}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <AiOutlineThunderbolt className="w-5 h-5 text-pink-300" />
              <span className="text-sm font-semibold">Marketing Solutions</span>
            </div>

            <h1 className="text-white text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Grow Faster With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Smart Marketing
              </span>
            </h1>

            <p className="text-xl text-pink-100 mb-8">
              We help brands attract, convert, and retain customers using
              data-driven marketing strategies that actually work.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className={`px-8 py-4 rounded-xl bg-gradient-to-r ${PRIMARY_BUTTON} font-semibold shadow-lg hover:scale-105 transition`}
              >
                Get Free Strategy
              </Link>
              <a
                href="#solutions"
                className="px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition"
              >
                Explore Services
              </a>
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
                src="/assets/img/images/marketing.jpg"
                alt="Mobile App Preview"
                className="max-w-md lg:max-w-lg rounded-3xl shadow-2xl ml-12"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Marketing Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to attract traffic, convert leads, and scale
              revenue.
            </p>
          </div>

          <div className="space-y-20">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div
                    className={`inline-flex p-4 bg-gradient-to-br ${s.color} rounded-2xl mb-6`}
                  >
                    <s.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                  <p className="text-gray-600 mb-6">{s.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {s.modules.map((m, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm"
                      >
                        <FiCheck className={ACCENT_COLOR} />
                        <span className="text-sm">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <img
                    src={s.img}
                    alt="Mobile App Preview"
                    className="max-w-md lg:max-w-lg rounded-3xl shadow-2xl   "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-2xl text-center shadow-md"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${PRIMARY_GRADIENT} flex items-center justify-center`}
              >
                <b.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-extrabold mb-2">{b.stat}</div>
              <h4 className="font-bold mb-1">{b.title}</h4>
              <p className="text-gray-600 text-sm">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className={`py-24 bg-gradient-to-br ${PRIMARY_GRADIENT} text-white`}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-pink-100 mb-10">
            Let’s build a marketing strategy that drives real results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition"
          >
            Book Free Consultation <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MarketingPage;
