'use strict';
module.exports = function(app) {
  var smartiiController = require('./controllers/BookSmartController');
  var path = require('path');
  var express = require('express');
  
  //add folder to serve static content
  app.use(express.static('app'))

  // todoList Routes
  app.route('/smartiies')
    .get(smartiiController.list_all_smartiies)
    .post(smartiiController.create_a_smartii);


  app.route('/smartiies/:smartiiId')
    .get(smartiiController.get_a_smartii)
    .put(smartiiController.update_a_smartii)
    .delete(smartiiController.delete_a_smartii);
  
  //serve an splash for the root of the app
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../app/default.html'));
  });
};