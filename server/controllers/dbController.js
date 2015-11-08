module.exports = function() {
  var config = require('../config/db')();
  var mongoose = require('mongoose');

  //Create a database connection
  mongoose.connect(config.DB.URI);

  // CONNECTION EVENTS
  mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to ' + config.DB.URI);
  });

  mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
  });

  mongoose.connection.on('disconnected', function() {
    console.log('Mongoose default connection disconnected.');
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      console.log('Mongoose default connection disconnected through server termination.');
      process.exit(0);
    });
  });
}
