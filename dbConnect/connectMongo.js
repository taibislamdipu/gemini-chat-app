import mongoose from "mongoose";

export async function connectMongo() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB ✅");
    return conn;
  } catch (error) {
    console.log(error);
  }
}
