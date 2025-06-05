import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// ROUTE 1: GET /api/products
// Desc: Showcase all the products (No login reqiured)
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ROUTE 2: GET /api/products/:id
// Desc: Fetch single product by ID (No login reqiured)
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  try {
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: 'Product not found!' });
  }
});

export default router;