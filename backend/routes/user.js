import express from 'express';
import fetchuser from '../middleware/fetchuser.js';
import User from '../models/User.js';

const router = express.Router();

// ROUTE 1: GET /api/auth/profile
// Desc: Get loggedIn user's details via the jwt token (Login required)
router.get('/profile', fetchuser, async (req, res) => {
  try {
    // Fetch the user's details except password using the id
    const user = await User.findById(req.user.id).select("-password");
    res.json({ success: true, user })
  } catch (err) {
    // Catch the error
    console.log(err.message);
    return res.status(500).json({ success: false, error: 'Interal Server Error', message: err.message });
  }
});

export default router;