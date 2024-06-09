const dotenv = require("dotenv");

import connectDB from "./db/index.js";

dotenv.config({ path: "./config.env" });

connectDB();








/*import express from "express";
const app = express()
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`); 
        console.log(`MongoDB Connected: DB host: ${conn.connection.host}`)
        app.on('error', console.error);
        app.listen(process.env.PORT, () => console.log(`server listening on port: ${process.env.PORT}`))
    }catch(error){
        console.error(`mongoDB connection Error: ${error.message}`)
        process.exit(1)
    }
}) */