import express from "express";
import connectDB from "./config/db.config.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(errorMiddleware);
app.use(express.json());
app.use(cookieParser());

await connectDB();





export default app;