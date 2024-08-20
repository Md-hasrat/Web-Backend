import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';


const connectDB = async () =>{
    try {
      const connectonInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
      console.log(`\n MongoDB connected || DB Host: ${connectonInstance.connection.host}`);
      
    } catch (error) {
        console.log("MONGODB connection Faild",error);
        process.exit(1)
    }
} 

export default connectDB