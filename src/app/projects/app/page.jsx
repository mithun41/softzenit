"use client";

import { useState } from "react";
import { X, Figma } from "lucide-react";

const projects = [
  {
    id: 1,
    image: "/assets/img/images/app4.jpeg",
    title: "ShopZen Seller Center",
    description:
      "A seller companion app focused on secure onboarding and authentication. Includes inventory control, analytics, and seller tools.",
    figmaUrl:
      "https://www.figma.com/design/gn09sY6vzGMtGCAxodR4ma/Office---ShopZen-%E2%80%93-E-Commerce-App",
    category: "E-commerce",
    tags: ["Onboarding", "Admin", "Auth"],
  },
  {
    id: 2,
    image: "/assets/img/images/app5.jpeg",
    title: "ShopZen Consumer App",
    description:
      "A multivendor shopping app designed for clarity, speed, and higher conversions.",
    figmaUrl:
      "https://www.figma.com/design/py0wkvLk8DgbVnopW5v9ja/Office---ShopZen-Seller-Center",
    category: "E-commerce",
    tags: ["B2C", "Cart", "Checkout"],
  },
  {
    id: 3,
    image: "/assets/img/images/app6.jpeg",
    title: "SoftRide",
    description:
      "A ride-sharing app with real-time tracking, pricing clarity, and smooth booking flows.",
    figmaUrl:
      "https://www.figma.com/design/GZkY7PekiVLwGGr2M7zTJk/Office---SoftRide",
    category: "Ride Sharing",
    tags: ["Maps", "Wallet", "Tracking"],
  },
];

const categories = ["All", "Ride Sharing", "E-commerce"];

export default function MobileAppProjectsPage() {
  const [activeImage, setActiveImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-12 sm:py-16 px-4 text-center border-b">
        <p className="text-emerald-600 font-semibold uppercase text-xs sm:text-sm">
          App Design Projects
        </p>
        <h1 className="text-2xl sm:text-4xl font-extrabold mt-3">
          Mobile App Designs
        </h1>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
          Carefully crafted mobile experiences focused on usability and clarity.
        </p>
      </section>

      {/* Filter */}
      <div className="sticky top-0 bg-white/90 backdrop-blur border-b z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-4">
        {filtered.map((project, i) => (
          <div
            key={project.id}
            className={`py-12 sm:py-16 flex flex-col gap-8 lg:gap-16 ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div
              className="w-full lg:w-1/2 order-1 cursor-zoom-in"
              onClick={() => setActiveImage(project.image)}
            >
              <div className="aspect-[4/3] sm:aspect-[16/10] rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-4 order-2">
              <span className="text-xs font-semibold text-emerald-600 uppercase">
                {project.category}
              </span>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                {project.title}
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition"
                >
                  View Design <Figma size={16} />
                </a>
                <button
                  onClick={() => setActiveImage(project.image)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border text-gray-700 font-semibold"
                >
                  Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white"
          >
            <X size={28} />
          </button>
          <img
            src={activeImage}
            className="max-h-[85vh] max-w-full object-contain rounded-lg"
            alt="Preview"
          />
        </div>
      )}
    </div>
  );
}
