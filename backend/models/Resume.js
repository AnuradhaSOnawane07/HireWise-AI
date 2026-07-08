const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // File Information
    fileName: {
      type: String,
      required: true,
    },

    originalName: {
      type: String,
      required: true,
    },

    filePath: {
      type: String,
      required: true,
    },

    fileType: {
      type: String,
      required: true,
    },

    fileSize: {
      type: Number,
      required: true,
    },

    // Parsed Resume Data
    extractedText: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    skills: [{
      type: String,
    }],

    education: [{
      type: String,
    }],

    experience: [{
      type: String,
    }],

    projects: [{
      type: String,
    }],

    certifications: [{
      type: String,
    }],

    // AI Scores
    atsScore: {
      type: Number,
      default: 0,
    },

    jobMatchScore: {
      type: Number,
      default: 0,
    },

    aiSuggestions: [{
      type: String,
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);