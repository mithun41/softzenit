"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiUsers, FiTarget, FiStar, FiArrowRight } from "react-icons/fi";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useEffect } from "react";

/* ================= COLORS ================= */
const PRIMARY_GRADIENT = "from-teal-600 to-blue-700";
const PRIMARY_BUTTON =
  "from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700";
const ACCENT_TEXT = "text-teal-500";
const ACCENT_BADGE = "bg-teal-100 text-teal-700";

/* ================= DATA ================= */
const values = [
  {
    icon: FiTarget,
    title: "Clear Vision",
    desc: "We align technology with real business goals, not just features.",
  },
  {
    icon: FiStar,
    title: "Quality First",
    desc: "Clean code, scalable systems, and long-term reliability.",
  },
  {
    icon: FiUsers,
    title: "People Driven",
    desc: "Strong communication and transparent collaboration.",
  },
];

const teamMembers = [
  {
    name: "Md. Abdus Sattar",
    role: "Founder",
    image: "/assets/img/images/team1.jpg",
    bio: "Founder of SoftZen IT with 25+ years of experience in the garments accessories industry, bringing innovation and growth to technology solutions.",
    socials: {
      facebook: "https://www.facebook.com/abdus.sattar.165033",
      youtube: "https://www.youtube.com/@soft.zen_it",
      instagram: "https://www.instagram.com/softzen.it/",
      linkedin: "https://www.linkedin.com/company/softzen-it/",
    },
  },
  {
    name: "Md. Abdul Gaffar",
    role: "CEO",
    image: "/assets/img/images/team2.jpg",
    bio: "CEO of SoftZen IT and leader of Ocean Accessories Ltd. & R.K. Garments, with 25+ years of proven management and strategic vision experience.",
    socials: {
      facebook: "https://www.facebook.com/gaffar.khokon",
      youtube: "https://www.youtube.com/@soft.zen_it",
      instagram: "https://www.instagram.com/softzen.it/",
      linkedin: "https://www.linkedin.com/company/softzen-it/",
    },
  },
  {
    name: "Md. Nuruzzaman",
    role: "COO",
    image: "/assets/img/images/team3.jpg",
    bio: "COO of SoftZen IT, ensuring smooth operations and efficiency. Skilled in management with experience from leading garment accessory companies.",
    socials: {
      facebook: "https://www.facebook.com/nuruzzamanrubel07",
      youtube: "https://www.youtube.com/@soft.zen_it",
      instagram: "https://www.instagram.com/softzen.it/",
      linkedin: "https://www.linkedin.com/company/softzen-it/",
    },
  },
];

/* ================= PAGE ================= */
export default function AboutPage() {
  useEffect(() => {
    document.title = "About | Softzen IT";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section
        className={`relative pt-28 pb-28 bg-gradient-to-br ${PRIMARY_GRADIENT} text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-block px-4 py-2 rounded-full ${ACCENT_BADGE} mb-6 font-semibold`}
          >
            About Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-extrabold mb-6"
          >
            Building Systems That
            <span className="block text-teal-200">Power Real Businesses</span>
          </motion.h1>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-10">
            We design and develop CRM, ERP, web, and digital solutions that help
            companies scale with clarity and confidence.
          </p>

          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${PRIMARY_BUTTON} rounded-xl font-semibold transition hover:scale-105`}
          >
            Work With Us <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition"
              >
                <div
                  className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${PRIMARY_GRADIENT} flex items-center justify-center`}
                >
                  <v.icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-14">
            The people guiding our vision and execution.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-36 h-36 rounded-full mx-auto object-cover mb-6"
                />
                <h3 className="text-xl font-bold">{m.name}</h3>
                <p className={`${ACCENT_TEXT} font-semibold mb-4`}>{m.role}</p>
                <p className="text-gray-600 mb-6">{m.bio}</p>

                <div className="flex justify-center gap-3">
                  {m.socials.facebook && (
                    <Social Icon={FaFacebookF} href={m.socials.facebook} />
                  )}
                  {m.socials.youtube && (
                    <Social Icon={FaYoutube} href={m.socials.youtube} />
                  )}
                  {m.socials.instagram && (
                    <Social Icon={FaInstagram} href={m.socials.instagram} />
                  )}
                  {m.socials.linkedin && (
                    <Social Icon={FaLinkedinIn} href={m.socials.linkedin} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`py-24 bg-gradient-to-br ${PRIMARY_GRADIENT} text-white text-center`}
      >
        <h2 className="text-4xl font-extrabold mb-6">
          Let’s Build Something Powerful
        </h2>
        <p className="text-blue-200 mb-10">Ready to grow with smart systems?</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold hover:scale-105 transition"
        >
          Get Started <FiArrowRight />
        </Link>
      </section>
    </div>
  );
}

/* ================= SOCIAL ICON ================= */
function Social({ Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-br from-teal-500 to-blue-600 transition"
    >
      <Icon />
    </a>
  );
}
