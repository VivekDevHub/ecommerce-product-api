import express from "express";
import connectDB from "./config/db.config.js";

await connectDB();


const app = express();

export default app;