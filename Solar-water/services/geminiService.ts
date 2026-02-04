
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an expert Solar Water Heater Technician specialized in Kailua, Hawaii. 
Your goal is to help customers troubleshoot issues like secondary panel leaks and circulation pump failures.
Provide helpful, professional, and safety-conscious advice.
Always remind users that for complex repairs involving electrical or plumbing systems, they should call a professional (Kailua Solar Repair at (844) 340-6413).
Focus on common Hawaii issues: salt air corrosion, high UV exposure, and heavy rain.
Keep responses concise and easy to read.
`;

export const getDiagnosticResponse = async (userInput: string) => {
  // Always use a named parameter for the API key as per SDK guidelines.
  // The API key is assumed to be available in process.env.API_KEY.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      // Use gemini-3-pro-preview for complex diagnostic and reasoning tasks.
      model: 'gemini-3-pro-preview',
      contents: userInput,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    
    // Access the text property directly from the response object.
    return response.text || "I'm sorry, I couldn't process that request. Please give us a call at (844) 340-6413 for immediate assistance.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our diagnostic tool is currently under maintenance. Please call us for emergency repairs!";
  }
};
