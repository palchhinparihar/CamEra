import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// ROUTE 1: GET /api/products
// Desc: Showcase all the products (No login required)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// ROUTE 2: GET /api/products/:id
// Desc: Fetch single product by ID (No login required)
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found!' });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
