import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = `${process.env.DB_URI}`;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to Database successfully!");
  } catch (error) {
    console.log("Couldn't connect to Database!", error);
  }
}

export default connectToMongo;