const Resume = require("../models/Resume");
const parseResume = require("../services/resumeParser");
const extractResumeData = require("../services/resumeExtractor");
const calculateATSScore = require("../services/atsScoreService");
const matchResumeWithJD = require("../services/jobMatchService");
const analyzeResumeAI = require("../services/geminiService");

const aiResult = await analyzeResumeAI(extractedText);

resume.aiAnalysis = aiResult;
exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const resume = await Resume.create({
      user: req.user.id,
      fileName: req.file.filename,
      originalName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
    });

    // Parse PDF
    const extractedText = await parseResume(req.file.path);

    // Extract Resume Details
    const parsedData = extractResumeData(extractedText);

    resume.extractedText = extractedText;
    resume.email = parsedData.email;
    resume.phone = parsedData.phone;
    resume.skills = parsedData.skills;
    resume.name = parsedData.name;
resume.education = parsedData.education;
resume.projects = parsedData.projects;
resume.experience = parsedData.experience;
const ats = calculateATSScore(resume);

resume.atsScore = ats.total;

await resume.save();

   

    res.status(201).json({
    success: true,
    message: "Resume uploaded successfully",

    atsScore: ats.total,

    scoreBreakdown: ats.breakdown,

    resume
});
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.matchJobDescription = async (req, res) => {
  try {
    console.log(req.body);
    const { resumeId, jobDescription } = req.body;

    const resume = await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    

    const result = matchResumeWithJD(
      resume.skills,
      jobDescription
    );

    resume.jobDescription = jobDescription;
    resume.jobMatchScore = result.matchScore;
    resume.matchedSkills = result.matchedSkills;
    resume.missingSkills = result.missingSkills;
    resume.recommendations = result.recommendations;

    await resume.save();

    res.json({
      success: true,
      ...result,
    });

  } catch (error) {
  console.error("Match Job Error:", error);

  res.status(500).json({
    success: false,
    message: error.message,
  });

  res.json({

    success:true,

    atsScore: ats.total,

    resume,

    aiAnalysis: JSON.parse(aiResult)

});
}
};