// components/ProjectSection.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: "assets/img/images/p1.png",
    title: "Noviqo Health Center",
    url: "https://noviqohealths.life/",
  },
  {
    id: 2,
    image: "assets/img/images/p2.png",
    title: "E-Shop BD",
    url: "https://bdeshop.vercel.app/",
  },
  {
    id: 3,
    image: "assets/img/images/p3.png",
    title: "SkyVora Real-Estate",
    url: "https://skyvorapl.xyz/",
  },
  {
    id: 4,
    image: "assets/img/images/p4.png",
    title: "Ship Nests Logistics",
    url: "https://shipnests.xyz/",
  },
  {
    id: 5,
    image: "assets/img/images/p5.png",
    title: "TrustPath Insurance",
    url: "https://trustpaths.digital/",
  },
  {
    id: 6,
    image: "assets/img/images/p6.png",
    title: "Build Haven Architecture",
    url: "https://build-haven.site/",
  },
];

const ProjectSection = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center max-w-2xl mb-16 mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Let’s Explore Our Creative Works
          </h2>
          <p className=" text-gray-600">
            A selection of projects where strategy, design, and technology work
            together to create real impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                onClick={() => setActiveImage(project.image)}
                className="h-72 w-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
              />

              {/* Glass title */}
              <div className="absolute bottom-4 left-4 right-4">
                <Link
                  href={project.url}
                  target="_blank"
                  className="
                    block rounded-xl px-4 py-3
                    bg-white/60 backdrop-blur-lg
                    border border-white/40
                    shadow-lg
                    transition hover:bg-white/80
                  "
                >
                  <h3 className="text-base font-semibold text-emerald-700">
                    {project.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            <FaTimes />
          </button>

          <img
            src={activeImage}
            alt="Project Preview"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
