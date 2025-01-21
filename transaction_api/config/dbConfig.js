import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();
const mongo_db_url = process.env.DB_CONNECT_URL;

export const connectMongo = () => {
  try {
    const connect = mongoose.connect(mongo_db_url);
    if (connect) {
      console.log("Database conected");
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
