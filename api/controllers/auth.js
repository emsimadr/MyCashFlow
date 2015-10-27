var jwt = require('jwt-simple');
var constants = require('../lib/constants');

var auth = {
  login: function(req, res) {
     var username = req.body.username || '';
     var password = req.body.password || '';

     console.log('u: '+username+' p: '+password);

     if (username == '' || password == '') {
       res.status(401);
       res.json({
         "status": constants.ERRORS.INVALID_CREDENTIALS.status,
         "message": constants.ERRORS.INVALID_CREDENTIALS.message
       });
       return;
     }

     var dbUserObj = auth.validate(username, password);

     if (!dbUserObj) {
       res.status(401);
       res.json({
         "status": constants.ERRORS.INVALID_CREDENTIALS.status,
         "message": constants.ERRORS.INVALID_CREDENTIALS.message
       });
       return;
     }

     if (dbUserObj) {
       res.json(genToken(dbUserObj));
     }
  },

  validate: function(username, password) {
    //Plugin Mongo here!!!
    var dbUserObj = {
      name: 'michael',
      role: 'admin',
      username: 'michael@simader.me'
    };

    return dbUserObj;
  },

  validateUser: function(username){
    var dbUserObj = {
      name: 'michael',
      role: 'admin',
      username: 'michael@simader.me'
    };

    return dbUserObj;
  }
}

function genToken(user) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.encode({
    exp: expires
  }, require('../config/secret')());

  return {
    token: token,
    expires: expires,
    user: user
  };
}

function expiresIn(days){
  var date = new Date();
  return date.setDate(date.getDate() + days);
}

module.exports = auth;
