"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Partner = () => {
  // আপনার ইমেজগুলোর নাম অনুযায়ী এখানে লিস্ট তৈরি করুন
  const partners = [
    { id: 1, img: "/assets/img/images/partner1.png", alt: "Partner 1" },
    { id: 2, img: "/assets/img/images/partner2.png", alt: "Partner 2" },
    { id: 3, img: "/assets/img/images/partner3.png", alt: "Partner 3" },
    { id: 4, img: "/assets/img/images/partner4.png", alt: "Partner 4" },
    { id: 5, img: "/assets/img/images/partner5.png", alt: "Partner 5" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <div className="mb-12">
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            Global Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a3a] mt-2">
            World Wide Partners
          </h2>
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-8 bg-[#f8f9fa] rounded-lg border border-transparent hover:border-blue-100 hover:shadow-sm transition-all duration-300"
            >
              <Image
                src={partner.img}
                alt={partner.alt}
                width={140}
                height={60}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
