const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use(express.json());
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/bugs', require('./src/routes/bugs')); // You can protect this later

// Connect to MongoDB only if not already connected
if (mongoose.connection.readyState === 0) {
  const dbUri = process.env.TEST_DB_URI || 'mongodb://localhost:27017/mern_bug_tracker_test';
  mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('✅ Connected to MongoDB');
  }).catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
  });
}

// Routes
// (duplicate route registration removed)

module.exports = app;