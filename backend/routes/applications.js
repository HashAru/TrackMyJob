const express = require('express');
const Application = require('../models/Application');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, async (req, res) => {
  try {
    const app = await Application.create({ ...req.body, user: req.user._id });
    res.json(app);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.get('/', protect, async (req, res) => {
  try {
    const apps = await Application.find({ user: req.user._id }).sort({ dateApplied: -1 });
    res.json(apps);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
