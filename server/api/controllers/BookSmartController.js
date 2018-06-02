'use strict';


var mongoose = require('mongoose'),
  Smartii = mongoose.model('Smartii');

exports.list_all_smartiies = function(req, res) {
  Smartii.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_smartii = function(req, res) {
  setTimeout(function(){
    var new_task = new Smartii(req.body);
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  }, 3000);
  
};


exports.get_a_smartii = function(req, res) {
  Smartii.findById(req.params.smartiiId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_smartii = function(req, res) {
  Smartii.findOneAndUpdate({_id: req.params.smartiiId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_smartii = function(req, res) {


  Smartii.remove({
    _id: req.params.smartiiId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Smartii is ded' });
  });
};