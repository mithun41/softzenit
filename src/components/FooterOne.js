import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FooterOne = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className="footer-area bg-black bg-cover pb-10">
        <div className="footer-subscribe">
          <div className="container">
            <div
              className="footer-subscribe-inner bg-cover relative py-8"
              style={{ backgroundImage: 'url("./assets/img/bg/6.png")' }}
            >
              {/* Content Container - Centered and Spaced */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
                {/* Left Column: Text Content */}
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0 text-left">
                  <p className="text-white text-lg font-medium">
                    Need Any Consultations ?
                  </p>
                  {/* Smaller h2 text size */}
                  <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
                    We’re Ready to Growth IT Business
                  </h2>
                </div>

                {/* Right Column: Hotline */}
                <div className="w-full lg:w-auto flex justify-start lg:justify-end">
                  <div className="flex gap-4 items-center">
                    {/* Phone Icon Section - Smaller h-14 w-14 */}
                    <div>
                      {/* Placeholder for FaPhone */}
                      <div className="text-blue-600 bg-white p-3 rounded-full shadow-lg flex items-center justify-center h-14 w-14">
                        {/* <span className="text-blue-600 text-2xl">📞</span> */}
                        <FaPhone size={24} />
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col justify-center">
                      <p className="text-white text-base">Hotline</p>
                      {/* Smaller h3 text size */}
                      <h3 className="text-white text-xl sm:text-2xl font-semibold leading-none">
                        +880 1797 933 772
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img src="assets/img/logo-two.png" alt="img" />
                </div>
                <div className="details">
                  <p>
                    SoftZen IT delivers innovative tech solutions that help
                    businesses grow and succeed.
                  </p>

                  <ul className="social-media">
                    <li>
                      <Link href="https://www.facebook.com/softzenit/">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/company/softzen-it">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/softzen.it/">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/@soft.zen_it">
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">
                  Our Service
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent rounded-full" />
                </h4>
                <ul>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details/app-development">
                      <FaArrowRight /> App development
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details/erp-crm">
                      <FaArrowRight /> ERP & CRM Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details/marketing">
                      <FaArrowRight /> Marketing Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">
                  Resources
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent rounded-full" />
                </h4>
                <ul>
                  <li>
                    <Link href="/about">
                      <FaArrowRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaArrowRight /> Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaArrowRight /> Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FaArrowRight /> Help & Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div>
                <h4 className="text-white font-semibold mb-5 relative inline-block">
                  Contact Us
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent rounded-full" />
                </h4>

                <ul className="space-y-4 text-sm text-gray-400">
                  <li className="flex gap-3">
                    <FaEnvelope className="mt-1" />
                    support@softzenit.com
                  </li>
                  <li className="flex gap-3">
                    <FaPhoneAlt className="mt-1" />
                    +880 1797 933 772
                  </li>
                  <li className="flex gap-3">
                    <FaMapMarkerAlt className="mt-1" />
                    Dhaka, Bangladesh
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                <p className="text-center md:text-left">
                  © {new Date().getFullYear()}{" "}
                  <span className="font-medium text-green-400">SoftZen IT</span>
                  . All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
