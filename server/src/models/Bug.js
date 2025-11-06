const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('Bug', bugSchema);