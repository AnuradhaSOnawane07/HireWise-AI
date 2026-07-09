const connectDB = async () => {
  try {
    console.log("Connecting MongoDB...");

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Error:", err);
    process.exit(1);
  }
};