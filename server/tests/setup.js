require('dotenv').config({ path: './.env.test' });
const connectTestDb = require('../src/config/testDb');

beforeAll(async () => {
  await connectTestDb();
});

afterAll(async () => {
  const mongoose = require('mongoose');
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});