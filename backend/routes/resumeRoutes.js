const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  uploadResume,
  matchJobDescription
} = require("../controllers/resumeController");

// Upload Resume
router.post(
  "/upload",
  authMiddleware,
  upload.single("resume"),
  uploadResume
);

// Match Resume with Job Description
router.post(
  "/match",
  authMiddleware,
  matchJobDescription
);

module.exports = router;