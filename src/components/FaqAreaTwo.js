"use client";
import { useState } from "react";
import { Plus, Minus, ChevronRight } from "lucide-react";

export default function FaqAreaTwo() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "What services do you offer?",
      a: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, search for 'lorem ipsum' will uncover.",
    },
    {
      q: "How experienced is your team?",
      a: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, search for 'lorem ipsum' will uncover.",
    },
    {
      q: "Can you provide examples of past projects?",
      a: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, search for 'lorem ipsum' will uncover.",
    },
  ];

  const handleToggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <div className="py-10 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT (FAQ) */}
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <div className="inline-block mb-3 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  YOUR ANSWER
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
                  Have Any{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Questions
                  </span>{" "}
                  Please?
                </h2>
                <p className="text-gray-600 text-lg">
                  Find answers to commonly asked questions about our services
                  and processes.
                </p>
              </div>

              <div className="space-y-4">
                {faqs.map((item, i) => {
                  const active = open === i;

                  return (
                    <div
                      key={i}
                      className={`
                        bg-white rounded-2xl shadow-md overflow-hidden
                        transition-all duration-300 ease-in-out
                        ${
                          active
                            ? "shadow-xl ring-2 ring-blue-500/20"
                            : "hover:shadow-lg"
                        }
                      `}
                    >
                      <button
                        className="flex items-center justify-between w-full text-left p-6 group"
                        onClick={() => handleToggle(i)}
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <div
                            className={`
                              mt-0.5 flex-shrink-0 w-10 h-10 flex items-center justify-center 
                              rounded-xl text-white transition-all duration-300
                              ${
                                active
                                  ? "bg-gradient-to-br from-blue-600 to-purple-600 rotate-180 scale-110"
                                  : "bg-gradient-to-br from-blue-500 to-blue-600 group-hover:scale-110"
                              }
                            `}
                          >
                            {active ? (
                              <Minus className="w-5 h-5" />
                            ) : (
                              <Plus className="w-5 h-5" />
                            )}
                          </div>

                          <span
                            className={`
                              text-lg font-bold transition-colors duration-300 pr-4
                              ${
                                active
                                  ? "text-blue-600"
                                  : "text-gray-800 group-hover:text-blue-600"
                              }
                            `}
                          >
                            {item.q}
                          </span>
                        </div>

                        <ChevronRight
                          className={`
                            w-5 h-5 text-gray-400 transition-all duration-300 flex-shrink-0
                            ${
                              active
                                ? "rotate-90 text-blue-600"
                                : "group-hover:text-blue-600 group-hover:translate-x-1"
                            }
                          `}
                        />
                      </button>

                      {/* Answer with smooth animation */}
                      <div
                        className={`
                          grid transition-all duration-500 ease-in-out
                          ${
                            active
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <div className="px-6 pb-6 pl-[4.5rem]">
                            <div className="pt-2 border-t border-gray-100">
                              <p className="text-gray-600 leading-relaxed pt-3">
                                {item.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img
                  src="/assets/img/images/faq.png"
                  alt="FAQ illustration"
                  className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>
              </div>

              {/* Stats or badges */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-xs text-gray-600 mt-1">
                    Happy Clients
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-xs text-gray-600 mt-1">Support</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md text-center">
                  <div className="text-2xl font-bold text-emerald-600">98%</div>
                  <div className="text-xs text-gray-600 mt-1">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
