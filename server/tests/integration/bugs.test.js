const request = require('supertest');
const app = require('../../app');

describe('GET /api/bugs', () => {
  it('should return 200 and an array of bugs', async () => {
  const res = await request(app).get('/api/bugs');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
}, 10000); // ⏱️ 10s timeout
});