import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// আপনার API Key সেটআপ
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // মডেল সিলেক্ট করা (gemini-1.5-flash দ্রুত কাজ করে)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "কিছু একটা সমস্যা হয়েছে!" },
      { status: 500 }
    );
  }
}
