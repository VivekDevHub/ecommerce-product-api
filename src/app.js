import express from "express";
import connectDB from "./config/db.config.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

await connectDB();

app.use(errorMiddleware)



export default app;