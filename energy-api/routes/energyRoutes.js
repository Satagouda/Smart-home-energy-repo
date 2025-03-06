const express = require('express');
const router = express.Router();
const EnergyData = require('../models/EnergyData');

router.post('/', async (req, res) => {
  try {
    const record = await EnergyData.create(req.body);
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await EnergyData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
