const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug'); // adjust if your model is elsewhere
const requireAuth = require('../middleware/requireAuth');

router.post('/', requireAuth, async (req, res) => {
  // Only logged-in users can create bugs
});

// POST /api/bugs — create a new bug
router.post('/', async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/bugs — return all bugs
router.get('/', async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;