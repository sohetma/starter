module.exports = (router) => {
  const clientController = require('../controllers').clients

    // Create a new client
  router.post('/clients', clientController.create);

  // Retrieve all clients
  router.get('/clients', clientController.list);

  // Retrieve a single client with customerId
  router.get('/clients/:clientId', clientController.getClientDetails);

  // Update a client with clientId
  router.put('/clients/:clientId', clientController.update);

  // Delete a client with clientId
  router.delete('/clients/:clientId', clientController.destroy);
}
