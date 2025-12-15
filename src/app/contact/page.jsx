// components/ContactPage.js

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, Bell } from "lucide-react";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here (e.g., API call)
    alert("Message Sent!");
  };

  // --- আপডেট করা কন্টাক্ট তথ্য ---
  const contactInfo = [
    {
      icon: MapPin,
      text: "House 41, Road 13, Block D, Banani Dhaka 1213", // আপডেট করা হয়েছে
    },
    {
      icon: Mail,
      text: "support@softzenit.com", // আপডেট করা হয়েছে
    },
    {
      icon: Phone,
      text: "+880 1797 933 772", // আপডেট করা হয়েছে
    },
  ];
  // ---------------------------------

  // Animation variants for the main container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-100 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* --- ডটেড ব্যাকগ্রাউন্ড প্যাটার্ন --- */}
      <div className="absolute top-0 w-full h-1/2 opacity-30 pointer-events-none">
        {/* A simple implementation of the dotted pattern seen in the image */}
        <div className="flex justify-center space-x-2 absolute top-10 left-1/2 transform -translate-x-1/2">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-400" />
          ))}
        </div>
      </div>
      {/* ---------------------------------- */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-7xl mx-auto px-4 relative z-10"
      >
        <div
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          style={{
            // গোলাপি শ্যাডো ইফেক্ট
            boxShadow:
              "0 20px 50px rgba(255, 100, 100, 0.15), 0 0 0 1px rgba(255, 100, 100, 0.2)",
          }}
        >
          {/* Header Icon (Top Left Corner - Orange Box) */}
          <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center shadow-lg">
            <Bell className="w-6 h-6 text-white" />
          </div>

          {/* Grid Layout (Left Form / Right Info) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* --------------------------------- */}
            {/* A) বাম কলাম: কন্টাক্ট ফর্ম (3/5 width) */}
            {/* --------------------------------- */}
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                Contact Seniors
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2 mb-6 leading-tight">
                Get In Touch With Us
              </h1>
              <p className="text-gray-600 mb-8 max-w-md">
                We are happy to answer any questions you may have. Feel free to
                reach out to us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Row 1: Full name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-200"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-200"
                  />
                </div>

                {/* Form Row 2: Email & Phone number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-200"
                  />
                  <input
                    type="tel"
                    name="phone2"
                    placeholder="Another Phone number (Optional)"
                    className="p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-200"
                  />
                </div>

                {/* Form Row 3: Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-200 resize-none"
                  />
                </div>

                {/* Submit Button (Orange/Red design from image) */}
                <div>
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 8px 15px rgba(255, 99, 71, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-bold text-white bg-red-500 rounded-full shadow-lg shadow-red-500/30 transition duration-300"
                  >
                    Send Message <ArrowRight className="w-5 h-5 ml-1" />
                  </motion.button>
                </div>
              </form>
            </div>

            {/* --------------------------------- */}
            {/* B) ডান কলাম: কন্টাক্ট ইনফো (2/5 width) */}
            {/* --------------------------------- */}
            <div className="lg:col-span-2 relative pl-6 lg:pl-10 border-l border-gray-200">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                Need Consultations ?
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-8 leading-snug">
                Have A Project? We Would Love To Hear From You.
              </h2>

              {/* কন্টাক্ট ডিটেইলস (তথ্য আপডেট করা হয়েছে) */}
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-red-500 transition duration-300">
                      <item.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition duration-300" />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-red-600 transition duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Connect Section (Image bottom right) */}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Page;
