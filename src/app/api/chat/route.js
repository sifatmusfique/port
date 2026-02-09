import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "Gemini API key not configured" },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-flash-latest",
            systemInstruction: `You are Sifat's Assistant, an AI agent on Sifat Musfique's portfolio website. 
      Your goal is to answer visitor questions about Sifat Musfique based on the following information:
      
      Match the tone: Professional, friendly, enthusiastic, and concise.

      **Profile:**
      - Name: Sifat Musfique
      - Role: Full Stack Developer
      - Location: Rajshahi, Bangladesh
      - Email: sifatmusfique@gmail.com
      - LinkedIn: https://linkedin.com/in/sifatmusfique
      - GitHub: https://github.com/sifatmusfique
      - FIDE: https://ratings.fide.com/profile/315105339

      **Skills:**
      - Frontend: React, Next.js, Tailwind CSS, HTML, CSS, JavaScript
      - Backend: Node.js, PHP, Python
      - Tools: Git, VS Code

      **Projects (from Portfolio):**
      1. **Cover Page Generator**: A React app to generate university cover pages. Features dynamic templates and PDF export.
      2. **Dynamic Quiz Website**: A quiz platform matching a specific design reference.
      3. **Dev Portfolio**: This very website! Built with Next.js and Tailwind.
      4. **Fake Chat Generator**: An app to create fake chat screenshots, now with dark mode.

      **Hobbies:**
      1.  **reading books**
      2.  **playing chess**
      3.  **coding**
      
      **Rules:**
      - When telling hobbies lastly say chess and provide them with fide link.
      - If asked about something not in this list, say "I don't have information on that specific topic, but I can tell you about Sifat's web development projects!"
      - Be helpful and encourage them to contact Sifat.
      - Keep answers short (under 3 sentences if possible) unless asked for details.
      `
        });

        const chat = model.startChat({
            history: [],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ response: text });
    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json(
            { error: "Failed to process request" },
            { status: 500 }
        );
    }
}
