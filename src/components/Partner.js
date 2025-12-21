"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Partner = () => {
  const partners = [
    { id: 1, img: "/assets/img/images/partner1.png", alt: "Partner 1" },
    { id: 2, img: "/assets/img/images/partner2.png", alt: "Partner 2" },
    { id: 3, img: "/assets/img/images/partner3.png", alt: "Partner 3" },
    { id: 4, img: "/assets/img/images/partner4.png", alt: "Partner 4" },
    { id: 5, img: "/assets/img/images/partner5.png", alt: "Partner 5" },
  ];

  // duplicate once is enough
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="mb-12">
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            Global Partners
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#1a1a3a]">
            World Wide Partners
          </h2>
        </div>

        {/* Infinite Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-[200px] md:w-[240px] flex items-center justify-center p-6 md:p-8 bg-[#f8f9fa] rounded-lg border border-transparent hover:border-blue-100 hover:shadow-sm transition-all duration-300 group"
              >
                <Image
                  src={partner.img}
                  alt={partner.alt}
                  width={140}
                  height={60}
                  unoptimized
                  className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
