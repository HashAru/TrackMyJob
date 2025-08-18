const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const sign = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: 'User already exists' });
    const user = await User.create({ name, email, password });
    res.json({ _id: user._id, name: user.name, email: user.email, token: sign(user._id) });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const u = await User.findOne({ email });
    if (u && await u.matchPassword(password)) {
      return res.json({ _id: u._id, name: u.name, email: u.email, token: sign(u._id) });
    }
    res.status(401).json({ error: 'Invalid credentials' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
