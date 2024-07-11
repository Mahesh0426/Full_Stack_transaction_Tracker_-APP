import express from "express"
import { connectMongo } from "./config/dbConfig.js"
import cors from "cors"
import userRouter from "./router/userRouter.js"
import transactionRouter from "./router/transactionRouter.js"

const app = express()
const PORT = process.env.PORT || 8000

// Middlewares
app.use(express.json())
app.use(cors())

// Connect To Database
connectMongo()


// Router | API Endpoints
app.use("/api/user", userRouter)
app.use("/api/transaction", transactionRouter)

// Start a server
app.listen(PORT, (error) => {
  error ? console.log("Error", error) : console.log("Server is Running")
})