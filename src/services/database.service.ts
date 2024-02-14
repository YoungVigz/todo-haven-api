import mongoose from "mongoose";
import * as dotenv from "dotenv";

export async function connectToDatabase () {
    dotenv.config();

    const client = await mongoose.connect(process.env.DB_CONN_STRING || "")
    console.log(`Successfully connected to database`);
}