import express from "express";
import connectToMongo from './db.js';

const app = express();
const port = 3000;

connectToMongo();

app.get('/', (req, res) => {
  res.send('Welcome to CamEra!');
})

app.listen(port, () => {
  console.log(`Backend listening on port http://localhost:${port}`);
})