import mongoose from "mongoose";

const mongo_db_url = "mongodb://localhost:27017/transaction-db-v2"

export const connectMongo = () => {
  try {
    const connect = mongoose.connect(mongo_db_url)
    if(connect) {
      console.log("Database conected");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}