import dotenv from 'dotenv' 
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: "./.env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server Running on port ${process.env.PORT}`);
        
    })
})
.catch((error) =>{
    console.log("MongoDB Connectionn failed: ",error);   
})



