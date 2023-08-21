import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = ()=>{
    
    const USERNAME = "pulak";
    const PASSWORD = "4zf8UQAHUiIumIrk";
  
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@notes-mern.jtltnu4.mongodb.net/`;

    mongoose.connect(MONGODB_URI,{useNewUrlParser:true});

    mongoose.connection.on('connected', ()=>{
        console.log("databases connected");
    });

    mongoose.connection.on('disconnected', ()=>{
        console.log("databases disconnected");
    });

    mongoose.connection.on('error', ()=>{
        console.log("Error while connecting", error.message);
    });

}   

export default Connection;
