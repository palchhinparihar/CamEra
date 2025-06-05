import express from "express";
import { body, validationResult } from 'express-validator';
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Validation rules for user input
let checkers = [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Enter a valid password').isLength({ min: 5 }),
];

// ROUTE 1: POST /api/auth/register
// Desc: Create a new user (No login required)
router.post('/register', checkers, async (req, res) => {
  // Check if there are any errors or not
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return a bad request
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
    if (user) {
      // Return a bad request
      return res.status(400).json({ success: false, error: "Sorry, a user with this email already exists." });
    }

    // Hashing the password with salt
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Save the data into "users" table/connection in the db
    user = await User.create({ name, email, password: hashPassword });

    // Prepare payload for JWT
    const payloadData = { user: { id: user.id } };

    // Generate auth token
    const authToken = jwt.sign(payloadData, process.env.JWT_SECRET);
    res.json({ success: true, authToken });
  } catch (err) {
    // Catch the error
    console.log(err.message);
    res.status(500).json({ success: false, error: 'Interal Server Error', message: err.message });
  }
});

export default router;