"use client";

import { useEffect, useState } from "react";
import { X, ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: "/assets/img/images/p1.png",
    title: "Noviqo Health Center",
    url: "https://noviqohealths.life/",
    category: "Healthcare",
    description:
      "Modern healthcare platform with appointment booking and patient management",
    tags: ["React", "Healthcare", "UI/UX"],
  },
  {
    id: 2,
    image: "/assets/img/images/p2.png",
    title: "E-Shop BD",
    url: "https://bdeshop.vercel.app/",
    category: "E-commerce",
    description: "Full-featured e-commerce platform with payment integration",
    tags: ["Next.js", "E-commerce", "Payment"],
  },
  {
    id: 3,
    image: "/assets/img/images/p3.png",
    title: "SkyVora Real-Estate",
    url: "https://skyvorapl.xyz/",
    category: "Real Estate",
    description:
      "Property listing and management platform for real estate professionals",
    tags: ["React", "Real Estate", "CRM"],
  },
  {
    id: 4,
    image: "/assets/img/images/p4.png",
    title: "Ship Nests Logistics",
    url: "https://shipnests.xyz/",
    category: "Logistics",
    description:
      "Logistics and shipping management system with tracking features",
    tags: ["Logistics", "Tracking", "Dashboard"],
  },
  {
    id: 5,
    image: "/assets/img/images/p5.png",
    title: "TrustPath Insurance",
    url: "https://trustpaths.digital/",
    category: "Insurance",
    description:
      "Insurance platform with quote generation and policy management",
    tags: ["Insurance", "Finance", "Forms"],
  },
  {
    id: 6,
    image: "/assets/img/images/p6.png",
    title: "Build Haven Architecture",
    url: "https://build-haven.site/",
    category: "Architecture",
    description: "Architecture portfolio and project showcase platform",
    tags: ["Portfolio", "Architecture", "Gallery"],
  },
];

const categories = [
  "All",
  "Healthcare",
  "E-commerce",
  "Real Estate",
  "Logistics",
  "Insurance",
  "Architecture",
];

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Web Development | Softzen IT";
  }, []);
  const [activeImage, setActiveImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Creative Web
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Projects
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore a collection of carefully crafted web solutions that blend
              innovative design with powerful functionality to deliver
              exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 sticky top-0 bg-white/80 backdrop-blur-lg z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
                  ${
                    selectedCategory === category
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    onClick={() => setActiveImage(project.image)}
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-semibold rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold hover:text-emerald-300 transition"
                    >
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    View Project <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Let's work together to bring your vision to life with cutting-edge
            web solutions
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-full hover:bg-gray-50 transition shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>

      {/* Image Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white hover:text-emerald-400 transition p-2 hover:rotate-90 duration-300"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative max-w-[90%] max-h-[90%]">
            <img
              src={activeImage}
              alt="Project Preview"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
