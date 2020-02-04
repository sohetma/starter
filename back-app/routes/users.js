const controller = require('../controllers').users

module.exports = (router) => {
  router.route('/users')
    .post(controller.create)
    .get(controller.list);

  router.route('/users/:id')
    .get(controller.show)
    .put(controller.update)
    .delete(controller.destroy);
};
