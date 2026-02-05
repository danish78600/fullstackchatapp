import mongoose from 'mongoose';

export const connectDB=async()=>{
  try{
    const conn=await mongoose.connect(process.env.MONGODB_URI)
    console.log("Mongodb connected")
  }
  catch(err){
    console.log("Error in DB connection", err)
  }
}