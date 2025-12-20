"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const erpCrmProjects = [
  {
    id: 1,
    title: "Retail ERP System",
    description:
      "Complete ERP solution for retail business including inventory, POS, sales reports, and supplier management.",
    image: "/assets/img/images/pos1.jpeg",
    tags: ["ERP", "Inventory", "POS"],
  },
  {
    id: 2,
    title: "Sales CRM Platform",
    description:
      "CRM system to manage leads, sales pipeline, follow-ups, and customer communication.",
    image: "/assets/img/images/pos2.jpeg",
    tags: ["CRM", "Leads", "Sales Automation"],
  },
  {
    id: 3,
    title: "HR & Payroll ERP",
    description:
      "Employee management, attendance tracking, payroll automation, and performance reports.",
    image: "/assets/img/images/pos3.jpeg",
    tags: ["ERP", "HR", "Payroll"],
  },
  {
    id: 4,
    title: "Retail ERP System",
    description:
      "Complete ERP solution for retail business including inventory, POS, sales reports, and supplier management.",
    image: "/assets/img/images/crm1.jpeg",
    tags: ["ERP", "Inventory", "POS"],
  },
  {
    id: 5,
    title: "Sales CRM Platform",
    description:
      "CRM system to manage leads, sales pipeline, follow-ups, and customer communication.",
    image: "/assets/img/images/crm2.jpeg",
    tags: ["CRM", "Leads", "Sales Automation"],
  },
  {
    id: 6,
    title: "HR & Payroll ERP",
    description:
      "Employee management, attendance tracking, payroll automation, and performance reports.",
    image: "/assets/img/images/crm3.jpeg",
    tags: ["ERP", "HR", "Payroll"],
  },
];

const ERPCRMProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ERP & CRM Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world ERP & CRM solutions designed and developed by Softzen IT
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {erpCrmProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-teal-100 text-teal-700 rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:underline"
                >
                  Request Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ERPCRMProjectsPage;
