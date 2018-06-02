'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SmartiiSchema = new Schema({
  bookmark: {
    type: String,
    required: 'Bookmark is required'
  },
  keywords: [{
    type: String
  }],
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Smartii', SmartiiSchema);