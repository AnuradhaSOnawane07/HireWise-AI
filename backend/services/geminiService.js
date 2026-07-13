const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeResume(resumeText) {

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    });

    const prompt = `
You are an ATS Resume Reviewer.

Analyze this resume.

Return ONLY JSON.

{
"summary":"",
"strengths":[],
"weaknesses":[],
"suggestions":[],
"atsScore":0
}

Resume:

${resumeText}
`;

    const result = await model.generateContent(prompt);

    return result.response.text();

}

module.exports = analyzeResume;