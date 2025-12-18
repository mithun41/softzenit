// components/ContactPage.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, Bell } from "lucide-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_38xzohk", // EmailJS Service ID
        "template_3zbqkcs", // EmailJS Template ID
        {
          fullName: formData.fullName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          message: formData.message,
        },
        "OSwSmUOraKLBMUpj0" // EmailJS Public Key
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks for reaching out. We’ll get back to you shortly.",
          confirmButtonColor: "#ef4444",
        });

        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          message: "",
        });
        setLoading(false);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          confirmButtonColor: "#ef4444",
        });
        setLoading(false);
      });
  };

  const contactInfo = [
    {
      icon: MapPin,
      text: "House 41, Road 13, Block D, Banani, Dhaka 1213",
    },
    {
      icon: Mail,
      text: "support@softzenit.com",
    },
    {
      icon: Phone,
      text: "+880 1797 933 772",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-100 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl mx-auto px-4"
      >
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          {/* Top-left icon */}
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center shadow-lg">
            <Bell className="w-6 h-6 text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* FORM */}
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold text-gray-500 uppercase">
                Contact Seniors
              </span>

              <h1 className="text-4xl lg:text-5xl font-extrabold mt-2 mb-6">
                Get In Touch With Us
              </h1>

              <p className="text-gray-600 mb-8 max-w-md">
                We’re happy to answer your questions and discuss your project.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="p-3 border rounded-md focus:ring-red-500 focus:border-red-500 transition duration-200"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="p-3 border rounded-md focus:ring-red-500 focus:border-red-500 transition duration-200"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md focus:ring-red-500 focus:border-red-500 transition duration-200"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md resize-none focus:ring-red-500 focus:border-red-500 transition duration-200"
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-red-500 text-white rounded-full font-bold shadow-lg transition duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </div>

            {/* CONTACT INFO */}
            <div className="lg:col-span-2 border-l pl-8">
              <span className="text-sm font-semibold text-gray-500 uppercase">
                Need Consultation?
              </span>

              <h2 className="text-3xl font-extrabold mt-2 mb-8">
                Have a project? Let’s talk.
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
