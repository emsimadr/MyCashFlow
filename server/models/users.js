var mongoose = require('mongoose');
var UserType = require('../lib/constants').UserType;

var usersSchema = new mongoose.Schema({
  name: {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      index: { unique: true }
    }
  },
  email: {
    type: String,
    required: true,
    index: { unique: true }
  },
  role: {
    type: String,
    enum: [UserType.ADMIN, UserType.USER],
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Users', usersSchema);
