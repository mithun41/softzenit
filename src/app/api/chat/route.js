export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return Response.json({ text: "Message is required" }, { status: 400 });
    }

    if (!process.env.OPENROUTER_KEY) {
      throw new Error("OPENROUTER_KEY missing");
    }

    // Construct the prompt with your company info
    const prompt = `
You are Softzen IT's official AI assistant.

STRICT RULES:
- Answer ONLY using the information provided below
- Do NOT guess or hallucinate
- If information is not available, clearly say so
- Keep answers professional, concise, and helpful

COMPANY INFORMATION:
Name: Softzen IT
Location: House 41, Road 13, Block D, Banani, Dhaka 1213, Bangladesh

Mission:
Build clean, functional, modern software that helps clients achieve goals efficiently.

Services:
- Web Development: Custom websites, web apps, responsive UI, SEO-friendly, secure
- Mobile Applications: Native and cross-platform apps (iOS & Android)
- ERP & CRM Solutions: POS, CRM, ERP systems for business automation
- Admin Dashboards: Business monitoring and management dashboards
- Digital Marketing: Content, social media, paid campaigns, conversion optimization
- Technical Support & DevOps: CI/CD, hosting, monitoring, performance optimization

Process:
1. Discovery & Planning
2. Design & Development
3. Testing & Delivery

Contact:
Website: https://softzenit.com
Contact Page: https://softzenit.com/contact
Email: support@softzenit.com

USER QUESTION:
${message}
`;

    // Call OpenRouter.ai API
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`OpenRouter API error: ${res.status} - ${text}`);
    }

    const data = await res.json();

    // Return the assistant's reply
    return Response.json({
      text: data.choices?.[0]?.message?.content || "No response from AI.",
    });
  } catch (error) {
    console.error("CHAT API ERROR:", error);
    return Response.json(
      { text: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// for google gemini api key

// export const dynamic = "force-dynamic";
// export const runtime = "nodejs";

// export async function POST(req) {
//   try {
//     const { message } = await req.json();

//     if (!message) {
//       return Response.json({ text: "Message is required" }, { status: 400 });
//     }

//     if (!process.env.OPENROUTER_KEY) {
//       throw new Error("OPENROUTER_KEY missing");
//     }

//     // Construct the prompt with your company info
//     const prompt = `
// You are Softzen IT's official AI assistant.

// STRICT RULES:
// - Answer ONLY using the information provided below
// - Do NOT guess or hallucinate
// - If information is not available, clearly say so
// - Keep answers professional, concise, and helpful

// COMPANY INFORMATION:
// Name: Softzen IT
// Location: House 41, Road 13, Block D, Banani, Dhaka 1213, Bangladesh

// Mission:
// Build clean, functional, modern software that helps clients achieve goals efficiently.

// Services:
// - Web Development: Custom websites, web apps, responsive UI, SEO-friendly, secure
// - Mobile Applications: Native and cross-platform apps (iOS & Android)
// - ERP & CRM Solutions: POS, CRM, ERP systems for business automation
// - Admin Dashboards: Business monitoring and management dashboards
// - Digital Marketing: Content, social media, paid campaigns, conversion optimization
// - Technical Support & DevOps: CI/CD, hosting, monitoring, performance optimization

// Process:
// 1. Discovery & Planning
// 2. Design & Development
// 3. Testing & Delivery

// Contact:
// Website: https://softzenit.com
// Contact Page: https://softzenit.com/contact
// Email: support@softzenit.com

// USER QUESTION:
// ${message}
// `;

//     // Call OpenRouter.ai API
//     const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${process.env.OPENROUTER_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-4o-mini",
//         messages: [{ role: "user", content: prompt }],
//       }),
//     });

//     if (!res.ok) {
//       const text = await res.text();
//       throw new Error(`OpenRouter API error: ${res.status} - ${text}`);
//     }

//     const data = await res.json();

//     // Return the assistant's reply
//     return Response.json({
//       text: data.choices?.[0]?.message?.content || "No response from AI.",
//     });
//   } catch (error) {
//     console.error("CHAT API ERROR:", error);
//     return Response.json(
//       { text: "Something went wrong. Please try again." },
//       { status: 500 }
//     );
//   }
// }
