import mongoose from "mongoose";
import envs from "./env.config.js";

async function connectDB() {
  try {
    await mongoose.connect(envs.MONGODB_URL);
    console.log("Mongo DB Connected Successfully ...");
  } catch (error) {
    console.log("error in connecting DB", error);
  }
}

export default connectDB