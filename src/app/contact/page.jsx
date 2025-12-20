"use client";

import { useEffect, useState } from "react";
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

    // EmailJS Template variables matching
    const templateParams = {
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_n7aww7o", // EmailJS Service ID
        "template_n25qnlm", // EmailJS Template ID
        templateParams, // Pass the object here
        "7tay_Xfi1kEOyn_Kp" // EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thanks for reaching out. We’ll get back to you shortly.",
            confirmButtonColor: "#ef4444",
          });

          // Reset form
          setFormData({
            fullName: "",
            phoneNumber: "",
            email: "",
            message: "",
          });
          setLoading(false);
        },
        (err) => {
          console.error("FAILED...", err);
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong. Please try again.",
            confirmButtonColor: "#ef4444",
          });
          setLoading(false);
        }
      );
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
  useEffect(() => {
    document.title = "Contact | Softzen IT";
  }, []);

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
          {/* Top-left decorative icon */}
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center shadow-lg">
            <Bell className="w-6 h-6 text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* --- LEFT SIDE: FORM --- */}
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Contact Seniors
              </span>

              <h1 className="text-4xl lg:text-5xl font-extrabold mt-2 mb-6 text-gray-900">
                Get In Touch With Us
              </h1>

              <p className="text-gray-600 mb-8 max-w-md">
                We’re happy to answer your questions and discuss your project.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none transition duration-200"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none transition duration-200"
                    />
                  </div>
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none transition duration-200"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md resize-none focus:ring-2 focus:ring-red-500 focus:outline-none transition duration-200"
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center gap-2 px-8 py-3 bg-red-500 text-white rounded-full font-bold shadow-lg transition duration-300 ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-red-600"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowRight className="w-5 h-5" />}
                </motion.button>
              </form>
            </div>

            {/* --- RIGHT SIDE: CONTACT INFO --- */}
            <div className="lg:col-span-2 border-l border-gray-100 pl-8">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Need Consultation?
              </span>

              <h2 className="text-3xl font-extrabold mt-2 mb-8 text-gray-900">
                Have a project? Let’s talk.
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-50 transition-colors">
                      <item.icon className="w-5 h-5 text-gray-600 group-hover:text-red-500" />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative background element */}
              <div className="mt-12 p-6 bg-red-50 rounded-2xl">
                <p className="text-red-800 text-sm font-medium">
                  Available for new projects and collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
