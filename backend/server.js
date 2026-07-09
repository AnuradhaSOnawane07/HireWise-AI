require("dotenv").config();

console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);
console.log("MONGODB_URI value:", process.env.MONGODB_URI ? "FOUND" : "NOT FOUND");
console.log("PORT:", process.env.PORT);