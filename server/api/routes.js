'use strict';
module.exports = function(app) {
  var smartiiController = require('./controllers/BookSmartController');

  // todoList Routes
  app.route('/smartiies')
    .get(smartiiController.list_all_smartiies)
    .post(smartiiController.create_a_smartii);


  app.route('/smartiies/:smartiiId')
    .get(smartiiController.get_a_smartii)
    .put(smartiiController.update_a_smartii)
    .delete(smartiiController.delete_a_smartii);
};