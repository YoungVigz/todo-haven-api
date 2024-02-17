import mongoose from "mongoose";
import * as dotenv from "dotenv";


export async function connectToDatabase () {
    dotenv.config();

    let url = process.env.DB_CONN_STRING || "" 

    if(process.env.NODE_ENV == "test")
        url = process.env.TEST_DB_CONN_STRING || ""

    let clinet = await mongoose.connect(url)
    console.log(`Successfully connected to database`);
}


export async function closeDatabaseConnection() {
    await mongoose.connection.dropCollection("users")
    await mongoose.disconnect()
}