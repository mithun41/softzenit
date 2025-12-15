"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

const NavbarFour = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // lock body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navClass = (path) => {
    if (!mounted) return "text-gray-800";

    return pathname === path || pathname.startsWith(path + "/")
      ? "text-green-600 font-semibold"
      : "text-gray-800 hover:text-blue-600";
  };

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" onClick={closeMenu}>
              <img src="/assets/img/logo-two.png" alt="Logo" className="h-10" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className={navClass("/")}>
                Home
              </Link>
              <Link href="/service" className={navClass("/service")}>
                Web
              </Link>
              <Link
                href="/service-details/app-development"
                className={navClass("/service-details/app-development")}
              >
                App
              </Link>
              <Link
                href="/service-details/erp-crm"
                className={navClass("/service-details/erp-crm")}
              >
                ERP & CRM
              </Link>
              <Link
                href="/service-details/marketing"
                className={navClass("/service-details/marketing")}
              >
                Marketing
              </Link>
              <Link href="/about" className={navClass("/about")}>
                About
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Contact Us
                <FaArrowRight />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col gap-1.5 z-50"
            >
              <span
                className={`w-6 h-0.5 bg-gray-800 transition ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gray-800 transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-gray-800 transition ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-20 left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-6 px-6 py-8">
            <Link onClick={closeMenu} href="/" className={navClass("/")}>
              Home
            </Link>
            <Link
              onClick={closeMenu}
              href="/service"
              className={navClass("/service")}
            >
              Web
            </Link>
            <Link
              onClick={closeMenu}
              href="/service-details/app-development"
              className={navClass("/service-details/app-development")}
            >
              App
            </Link>
            <Link
              onClick={closeMenu}
              href="/service-details/erp-crm"
              className={navClass("/service-details/erp-crm")}
            >
              ERP & CRM
            </Link>
            <Link
              onClick={closeMenu}
              href="/service-details/marketing"
              className={navClass("/service-details/marketing")}
            >
              Marketing
            </Link>
            <Link
              onClick={closeMenu}
              href="/about"
              className={navClass("/about")}
            >
              About
            </Link>

            <Link
              onClick={closeMenu}
              href="/contact"
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              Contact Us
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default NavbarFour;
