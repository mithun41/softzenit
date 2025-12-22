"use client";
import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Send, X, MessageCircle, Sparkles } from "lucide-react";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  const API_KEY = "AIzaSyD23q9QCc0UczUk5FNmlgC3KQkTz3dT4VE"; // replace with your API key
  const genAI = new GoogleGenerativeAI(API_KEY);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    setMessages([
      {
        role: "ai",
        text: "Hello! I am Softzen IT's AI assistant. How can I help you today?",
      },
    ]);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", text: userText }]);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });
      const result = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `You are Softzen IT's AI assistant. Answer all questions ONLY based on Softzen IT’s information. Do not provide information outside of this scope. Be professional, concise, and helpful.

Company Profile:
- Name: Softzen IT
- Location:House 41, Road 13, Block D, Banani Dhaka 1213, Bangladesh
- Mission: Build clean, functional, modern software that helps clients achieve their goals efficiently.
- Services:
    • Web Development: Custom websites and web applications with responsive UX/UI design, SEO-friendly architecture, and secure performance.
    • Mobile Applications: Native and cross-platform mobile apps for iOS and Android.
    • ERP & CRM Solutions: Point-of-sale systems, customer relationship management, and enterprise resource planning applications to streamline business operations.
    • Admin Dashboards: Modern dashboards for monitoring and managing business processes.
    • Digital Marketing: Content marketing, social media management, paid campaigns, and conversion optimization.
    • Technical Support & DevOps: CI/CD, hosting, compliance monitoring, and performance optimization.
- Approach & Process:
    1. Discovery & Planning: Understand requirements and define a project roadmap.
    2. Design & Development: Build intuitive interfaces and robust backend architectures.
    3. Testing & Delivery: Ensure high-quality output through QA testing before deployment.
- Contact Info:
    • Website: https://softzenit.com
    • Contact Page: https://softzenit.com/contact
    • Email: support@softzenit.com
- Team: Experienced developers, designers, and strategists focused on client success.
- Tone: Friendly, professional, helpful, and accurate.
- Instructions for AI:
    1. Always answer based on Softzen IT’s services and profile.
    2. Do not guess or provide unrelated information.
    3. Use a professional and concise tone.
    4. Provide URLs only if relevant and accurate.
    5. If unsure, politely state that you don't have the information.

Now, please answer the following question:
User Question: ${userText}`,
              },
            ],
          },
        ],
      });
      const text = result.response.text();
      setMessages((prev) => [...prev, { role: "ai", text }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Gemini error. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-32 right-5 z-[999] w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[999] w-72 md:w-96 h-[480px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm tracking-wide">
                  Softzen AI
                </h3>
                <p className="text-[10px] text-cyan-100 font-medium">
                  Online Now
                </p>
              </div>
            </div>
            {/* Improved Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-white bg-white/10 hover:bg-white/30 rounded-full p-2 transition-colors border border-white/20"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "ai" && (
                  <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0 mt-1 shadow-sm border border-indigo-200">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                  </div>
                )}

                <div
                  className={`relative max-w-[85%] px-4 py-3 rounded-2xl shadow-sm break-words ${
                    msg.role === "user"
                      ? "bg-blue-500 rounded-tr-none font-medium"
                      : "bg-white rounded-tl-none border border-slate-200"
                  }`}
                >
                  <p
                    className={`text-xs md:text-[13px] leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user" ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-200 flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && input.trim() && !loading)
                    sendMessage();
                }}
                placeholder="How can we help?"
                className="w-full pl-5 pr-12 py-3.5 bg-slate-100 rounded-2xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white border border-transparent focus:border-indigo-500 transition-all duration-300"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 shadow-md active:scale-90 transition-all duration-200 disabled:bg-slate-300 disabled:shadow-none disabled:active:scale-100"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 text-center">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                Softzen IT • AI Assistant
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
