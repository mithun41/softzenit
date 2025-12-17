"use client";
import Link from "next/link";
import {
  FaHome,
  FaWhatsapp,
  FaMapMarkedAlt,
  FaLaptop,
  FaMobileAlt,
} from "react-icons/fa";

const MobileBottomNav = () => {
  return (
    <div className="fixed  bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-inner lg:hidden">
      <div className="flex justify-around items-center py-2">
        <Link
          href="/"
          className="flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <FaHome size={20} />
          <span className="text-xs">Home</span>
        </Link>
        <a
          href="https://wa.me/01622049579"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-gray-600 hover:text-green-600"
        >
          <FaWhatsapp size={20} />
          <span className="text-xs">WhatsApp</span>
        </a>
        <Link
          href="/map"
          className="flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <FaMapMarkedAlt size={20} />
          <span className="text-xs">Map</span>
        </Link>
        <Link
          href="/service"
          className="flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <FaLaptop size={20} />
          <span className="text-xs">Web</span>
        </Link>
        <Link
          href="/service-details/app-development"
          className="flex flex-col items-center text-gray-600 hover:text-blue-600"
        >
          <FaMobileAlt size={20} />
          <span className="text-xs">App</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomNav;
