const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

async function analyzeResume(resumeText) {
  const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the following resume.

Return ONLY valid JSON.

Format:

{
  "atsScore": number,
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "suggestions": []
}

Resume:

${resumeText}
`;

  const result = await model.generateContent(prompt);

  const response = result.response.text();

  const cleaned = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (error) {
    console.error("Gemini returned invalid JSON:", cleaned);

    return {
      atsScore: 0,
      strengths: [],
      weaknesses: [],
      missingSkills: [],
      suggestions: [
        "AI response could not be parsed. Please try again."
      ]
    };
  }
}

module.exports = analyzeResume;