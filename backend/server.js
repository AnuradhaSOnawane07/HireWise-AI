const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/uploads", express.static("uploads"));

// MongoDB Connection
const connectDB = require("./config/db");

connectDB();

app.get("/", (req, res) => {
  res.send("🚀 HireWise AI Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});