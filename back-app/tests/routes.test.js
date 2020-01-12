const request = require('supertest')
const app = require('../server')

const formData = {
  id : 21,
  firstname : 'greg',
  lastname : 'max',
  email : 'max@steve.sydney'
}

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/clients')
      .send(formData)
    expect(res.statusCode).toEqual(201)
    expect(typeof res.body).toBe('object');
    expect(res.body.data).toHaveProperty('firstname')
    expect(res.body.data).toHaveProperty('lastname')
    expect(res.body.data).toHaveProperty('email')
    expect(res.body.data).toHaveProperty('id')
  })
})
