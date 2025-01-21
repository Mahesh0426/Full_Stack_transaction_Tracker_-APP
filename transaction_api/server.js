import "dotenv/config";
import express from "express";
import { connectMongo } from "./config/dbConfig.js";
import cors from "cors";

import userRouter from "./router/userRouter.js";
import transactionRouter from "./router/transactionRouter.js";

const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(cors());

//static servering
import path from "path";
const __dirname = path.resolve();

//server the static file from node
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Connect To Database
connectMongo();

// Router | API Endpoints
app.use("/api/user", userRouter);
app.use("/api/transaction", transactionRouter);

// Start a server
app.listen(PORT, (error) => {
  error ? console.log("Error", error) : console.log("Server is Running");
});
