var express = require('express');
var router = express.Router();

var auth = require('../controllers/auth.js');
var transactions = require('../controllers/transactions.js');

router.post('/login', auth.login);

router.get('/api/v1/transactions', transactions.getAll);
router.get('/api/v1/transaction/:id', transactions.getOne);
router.post('/api/v1/transaction/', transactions.create);
router.put('/api/v1/transaction/:id', transactions.update);
router.delete('/api/v1/transaction/:id', transactions.delete);

//router.get('/api/v1/admin/users', users.getAll);
//router.get('/api/v1/admin/user/:id', users.getOne);
//router.post('/api/v1/admin/user', users.create);
//router.put('/api/v1/admin/user/:id', users.update);
//router.delete('/api/v1/admin/user/:id', users.delete);

module.exports = router;
