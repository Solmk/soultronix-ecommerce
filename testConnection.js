import mongoose from "mongoose";

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB!");
    await mongoose.disconnect();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

testConnection();