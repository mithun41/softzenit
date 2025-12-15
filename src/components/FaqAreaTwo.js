"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

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
      q: "Can you provide of past projects?",
      a: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, search for 'lorem ipsum' will uncover.",
    },
  ];

  const handleToggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <div className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT (FAQ) */}
          <div className="md:order-1">
            <h6 className="text-blue-600 font-semibold mb-2 text-sm uppercase">
              YOUR ANSWER
            </h6>
            <h2 className="text-4xl font-extrabold mb-8 text-gray-900 leading-tight">
              Have Any <span className="text-blue-600">Question</span> Please?
            </h2>

            <div className="space-y-4">
              {faqs.map((item, i) => {
                const active = open === i;

                return (
                  <div
                    key={i}
                    className="bg-white rounded-lg transition-all duration-300"
                  >
                    <button
                      className="flex items-start w-full text-left p-4 pr-6"
                      onClick={() => handleToggle(i)}
                    >
                      <div
                        className={`mt-1 flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-white mr-4 transition duration-300 ${
                          active ? "bg-blue-600" : "bg-blue-500"
                        }`}
                      >
                        {active ? (
                          <FaMinus className="w-3 h-3" />
                        ) : (
                          <FaPlus className="w-3 h-3" />
                        )}
                      </div>

                      <span
                        className={`text-lg font-semibold transition duration-300 ${
                          active
                            ? "text-blue-600"
                            : "text-gray-800 hover:text-blue-600"
                        }`}
                      >
                        {item.q}
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        active ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="pb-4 pr-6 pl-14 text-gray-600 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:order-2">
            <div className="relative rounded-xl overflow-hidden h-full md:mt-10 lg:mt-0">
              <img
                src="/assets/img/images/faq.png"
                alt="FAQ illustration"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
FaqAreaTwo;
