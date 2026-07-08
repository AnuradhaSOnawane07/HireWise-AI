const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { analyzeResumeAI } = require("../controllers/aiController");

router.post(
  "/analyze-resume",
  authMiddleware,
  analyzeResumeAI
);

module.exports = router;