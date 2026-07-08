const Resume = require("../models/Resume");
const analyzeResume = require("../services/geminiService");

exports.analyzeResumeAI = async (req, res) => {
  try {
    const { resumeId } = req.body;

    const resume = await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    const analysis = await analyzeResume(resume.extractedText);

    const updatedResume = await Resume.findByIdAndUpdate(
  resumeId,
  {
    $set: {
      aiAnalysis: analysis,
    },
  },
  {
    new: true,
    runValidators: true,
  }
);

console.log("Updated Resume:", updatedResume.aiAnalysis);

    res.json({
      success: true,
      analysis,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};