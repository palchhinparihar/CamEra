import express from 'express';
import { body, validationResult } from 'express-validator';
import fetchuser from '../middleware/fetchuser.js';
import User from '../models/User.js';

const router = express.Router();

// ROUTE 1: GET /api/auth/profile
// Desc: Get loggedIn user's details via the jwt token (Login required)
router.get('/profile', fetchuser, async (req, res) => {
  try {
    // Fetch the user's details except password using the id
    const user = await User.findById(req.user.id).select("-password");
    res.json({ success: true, user });
  } catch (err) {
    // Catch the error
    console.log(err.message);
    return res.status(500).json({ success: false, error: 'Interal Server Error', message: err.message });
  }
});

let checkers = [
  body('name', 'Enter a valid name').optional().isLength({ min: 3 }).notEmpty().trim(),
  body('address', 'Enter a valid address').optional().isLength({ min: 6 }).notEmpty().trim(),
  body('phone', 'Enter a valid phone number').optional().isMobilePhone('any').isLength({ min: 10 }).notEmpty().trim(),
]

// ROUTE 2: PUT /api/auth/profile
// Desc: Update the existing user (Login required)
router.put('/profile', checkers, fetchuser, async (req, res) => {
  // Check if there are any errors or not
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return a bad request
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  const { name, address, phone } = req.body;

  const updateFields = {};
  if (name) {
    updateFields.name = name.replace(/\b\w/g, char => char.toUpperCase());
  }
  if (address) updateFields.address = address;
  if (phone) updateFields.phone = phone;

  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, { $set: updateFields }, { new: true });
    res.json({ success: true, user: updatedUser });
  } catch (err) {
    // Catch the error
    console.log(err.message);
    return res.status(500).json({ success: false, error: 'Interal Server Error', message: err.message });
  }
});

export default router;