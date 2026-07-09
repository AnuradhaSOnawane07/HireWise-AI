require("dotenv").config();

console.log("Step 1");

const express = require("express");
console.log("Step 2");

const mongoose = require("mongoose");
console.log("Step 3");

const cors = require("cors");
console.log("Step 4");

const app = express();

console.log("Step 5");

const connectDB = require("./config/db");

console.log("Step 6");

connectDB();

console.log("Step 7");

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started");
});