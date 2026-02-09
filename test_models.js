const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = "AIzaSyA0g64SEnZLuhWFlc--E7ICN4HqMcoccpI";

async function test() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent("Hello");
        console.log("SUCCESS: gemini-pro works");
    } catch (e) {
        console.log("FAIL: gemini-pro error: " + e.message);
    }
}

test();
