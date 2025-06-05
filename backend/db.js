import mongoose from "mongoose";
import Product from './models/Product.js';
import products from './data/products.js';

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to Database successfully!");

    await Product.deleteMany();
    await Product.insertMany(products); 
    console.log("Products inserted!");
  } catch (error) {
    console.log("Couldn't connect to Database!", error);
    process.exit(1);
  }
}

export default connectToMongo;