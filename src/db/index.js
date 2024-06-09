import mongoose from "mongoose";
import { DB_NAME } from "../constants";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`); 
        console.log(`MongoDB Connected: DB host: ${conn.connection.host}`);
    } catch (error) {
        console.error(`mongoDB connection Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;