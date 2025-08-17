import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully 😍");
  } catch (error) {
    console.log("Error while connecting Database 😢");
    process.exit(1);
  }
};
