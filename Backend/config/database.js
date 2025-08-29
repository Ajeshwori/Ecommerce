import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 
// Load environment variables from .env

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); 
    console.log(`MongoDB Connected: ${conn.connection.name}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB()
    .then(() => {
        console.log("Database connection established successfully.");
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });

export default connectDB;
