const controller = require('../controllers').clients

module.exports = (router) => {
  router.route('/clients')
    .post(controller.create)
    .get(controller.list);

  router.route('/clients/:id')
    .get(controller.show)
    .put(controller.update)
    .delete(controller.destroy);
};
