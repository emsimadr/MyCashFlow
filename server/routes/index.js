var express = require('express');
var router = express.Router();

var controllers = require('../controllers/index');

router.post('/login', controllers.auth.login);

router.get('/api/v1/transactions', controllers.transactions.getAll);
router.get('/api/v1/transaction/:id', controllers.transactions.getOne);
router.post('/api/v1/transaction/', controllers.transactions.create);
router.put('/api/v1/transaction/:id', controllers.transactions.update);
router.delete('/api/v1/transaction/:id', controllers.transactions.delete);

//router.get('/api/v1/admin/users', users.getAll);
//router.get('/api/v1/admin/user/:id', users.getOne);
//router.post('/api/v1/admin/user', users.create);
//router.put('/api/v1/admin/user/:id', users.update);
//router.delete('/api/v1/admin/user/:id', users.delete);

module.exports = router;
