const request = require('supertest')
const app = require('../server')

const formData = {
  firstname : 'greg',
  lastname : 'max',
  email : 'max@steve.sydney'
}

const newFormData = {
  firstname : 'Louis',
  lastname : 'max',
  email : 'max@louis.sydney'
}

// TEST POST
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
        expect(typeof res.body.data.createdAt).toBe('string'); // ATTENTION
  }, 90000)
})

// TEST GET
describe('List of clients', () => {
 it('should return a validated list of clients /', async () => {
   const response = await request(app)
   .get('/api/clients');
    expect(response.statusCode).toEqual(200);
    expect(response.body.statusType).toEqual('success');
    expect(typeof response.body.data).toBe('object');
    expect(response.body.data[0]).toHaveProperty('firstname');
 });
});

// TEST UPDATE
describe("Update /clients/:id", () => {
  it("should responds with an updated client", async () => {
    const newClient = await request(app)
      .post("/api/clients")
      .send(formData);
    const updatedClient = await request(app)
      .put(`/api/clients/${newClient.body.data.id}`)
      .send(newFormData);
      // expect(updatedClient.body.data[19].firstname).toBe('Louise');
      expect(updatedClient.body.data).toHaveProperty('id');
      expect(updatedClient.statusCode).toEqual(200);
      //  add expects
  });
});

// TEST DELETE
describe("DELETE /clients/:id", () => {
  test("It should responds with a message of Deleted", async () => {
    const newClient = await request(app)
      .post("/api/clients")
      .send(newFormData);
    const removedCLient = await request(app)
      .delete(`/api/clients/${newClient.body.data.id}`);
      expect(removedCLient.body.message).toEqual('client deleted successfully');
      expect(removedCLient.statusCode).toEqual(200);
      //  add expects
  });
});
