import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import connectToMongo from './db.js';

// Routes
import productRoutes from './routes/products.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

connectToMongo();

app.get('/', (req, res) => {
  res.send('Welcome to CamEra!');
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`Backend listening on port http://localhost:${port}`);
});