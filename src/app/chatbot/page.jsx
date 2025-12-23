"use client";
import { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, Sparkles } from "lucide-react";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showBlimp, setShowBlimp] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        role: "ai",
        text: "Hello! I am Softzen IT’s AI assistant. How can I help you today?",
      },
    ]);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", text: userText }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userText }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.text || "API error");
      }

      setMessages((prev) => [...prev, { role: "ai", text: data.text }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-32 right-5 z-[999] flex flex-col items-end gap-2">
          {showBlimp && (
            <div className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg animate-bounce">
              Chat with us 👋
            </div>
          )}

          <button
            onClick={() => {
              setIsOpen(true);
              setShowBlimp(false);
            }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white flex items-center justify-center shadow-xl"
          >
            <MessageCircle className="w-7 h-7" />
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-16 right-6 z-[999] w-80 h-[440px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 p-4 flex justify-between">
            <h3 className="text-white font-bold text-sm">Softzen AI</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="text-white w-4 h-4" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 p-4 space-y-3 overflow-y-auto bg-slate-50"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm ${
                    msg.role === "user"
                      ? "bg-indigo-500 text-white"
                      : "bg-white border"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-xs text-slate-400">AI is typing...</div>
            )}
          </div>

          <div className="p-3 border-t">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 px-4 py-2 rounded-xl bg-slate-100 text-sm"
                placeholder="Type your message"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
