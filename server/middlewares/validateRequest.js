var jwt = require('jwt-simple');
var validateUser = require('../controllers/authController').validateUser;
var constants = require('../lib/constants');

module.exports = function(req, res, next) {
  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
  var key = (req.body && req.body.x_key) || (req.query && req.query.x_key) || req.headers['x-key'];

  if (token || key) {
    try {
      var decoded = jwt.decode(token, require('../config/secret.js')());
      if (decoded.exp <= Date.now()) {
        res.status(constants.ERRORS.TOKEN_EXPIRED.status);
        res.json({
          "status": constants.ERRORS.TOKEN_EXPIRED.status,
          "message": constants.ERRORS.TOKEN_EXPIRED.message
        });
        return;
      }
      var user = validateUser(key);
      if (user) {
        if ((req.url.indexOf('admin') >= 0 && user.role == 'admin') || req.url.indexOf('admin') < 0 && req.url.indexOf('/api/v1') >= 0) {
          next();
        } else {
          res.status(constants.ERRORS.UNAUTHORIZED_USER.status);
          res.json({
            "status": constants.ERRORS.UNAUTHORIZED_USER.status,
            "message": constants.ERRORS.UNAUTHORIZED_USER.message
          });
          return;
        }
      } else {
        res.status(constants.ERRORS.INVALID_USER.status);
        res.json({
          "status": constants.ERRORS.INVALID_USER.status,
          "message": constants.ERRORS.INVALID_USER.message
        });
        return;
      }
    } catch(err) {
      res.status(constants.ERRORS.SYSTEM_ERROR.status);
      res.json({
        "status": constants.ERRORS.SYSTEM_ERROR.status,
        "message": constants.ERRORS.SYSTEM_ERROR.message,
        "error": err
      });
      console.log(err);
    }
  } else {
    res.status(constants.ERRORS.INVALID_TOKEN_KEY.status);
    res.json({
      "status": constants.ERRORS.INVALID_TOKEN_KEY.status,
      "message": constants.ERRORS.INVALID_TOKEN_KEY.message
    });
  }
};
