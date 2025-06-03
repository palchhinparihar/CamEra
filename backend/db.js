import mongoose from "mongoose";
import dotenv from 'dotenv';
import Product from './models/Product.js';
import products from './data/products.js';

dotenv.config();

const mongoURI = `${process.env.DB_URI}`;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to Database successfully!");

    await Product.deleteMany();
    await Product.insertMany(products); 
    console.log("Products inserted!");
    process.exit();

  } catch (error) {
    console.log("Couldn't connect to Database!", error);
    process.exit(1);
  }
}

export default connectToMongo;