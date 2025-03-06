const mongoose = require('mongoose');

const EnergySchema = new mongoose.Schema({
  device: String,
  value: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EnergyData', EnergySchema);

