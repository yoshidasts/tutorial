var express = require('express');
var router = express.Router();

/* Connecting to collection.
   It uses "tutorial" db and "users" collection, please create them to your mongoDB */
var mongoose = require('mongoose');
var schema = mongoose.Schema({ data: mongoose.Schema.Types.Mixed});  // Empty schema
var User = mongoose.model('users', schema);                  // User class using empty schema.
mongoose.connect('mongodb://localhost/tutorial');

/* Create addUser function which is called by other programms */
module.exports.addUser = function(user, callback){
     var doc = new User({ data: user });
     doc.save(function(err){
         callback(err);
      });
}
