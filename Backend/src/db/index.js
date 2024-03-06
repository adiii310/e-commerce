import mongoose from "mongoose";
import { DATABASE_NAME } from "../constant.js";

const connectDB = async () => {
    try {
       const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
        console.log("Mongodb connection sucessful :: ", connect.connection.host)
        
    } catch (error) {
        console.log("Mongodb Connection ERROR :: ", error.message);
        process.exit(1)
    }
};

export default connectDB;
