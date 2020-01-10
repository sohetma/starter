module.exports = (router) => {
  const clientController = require('../controllers').clients

  router.post('/clients', clientController.create);
  router.get('/clients', clientController.list);
  router.get('/clients/:clientId', clientController.getClientDetails);
  router.put('/clients/:clientId', clientController.update);
  router.delete('/clients/:clientId', clientController.destroy);
}
