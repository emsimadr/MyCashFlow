var constants = require('../lib/constants');
var mongoose = require('mongoose');
var transactions = require('../models').transactions;

var transactionsController = {
  getAll: function(req, res) {
    transactions.find({}, function(err, docs) {
      console.log('bla');
      if (!err) {
        console.log('bla1');
        res.json(docs);
        console.log('bla2');
      } else {
        res.status(500);
      }
    });
  },
  getOne: function(req, res) {
    var reqId = req.params.id;
    transactions.find({_id: reqId}, function(err, doc) {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500);
      }
    });
  },
  create: function(req, res) {
    var transaction = req.body;
    transactions.create(transaction, function(err){
      console.log(err);
    });
    res.json(transaction);
  },
  update: function(req, res) {
    var transaction = req.body;
    var reqId = req.params.id;
    transactions.update({_id: reqId}, transaction, function(err, raw) {
      if (err) {
        res.status(500);
      }
    });
  },
  delete: function(req, res) {
    var id = req.params.id;
    data.splice(id, 1);
    res.json(true);
  }
};

var data = [{
  id: '1',
  type: constants.TransactionType.PLUS,
  date: '11-09-2015',
  description: 'Salary',
  amount: '$1,000.00'
}, {
  id: '2',
  type: constants.TransactionType.MINUS,
  date: '11-01-2015',
  description: 'Rent',
  amount: '$2,000.00'
}, {
  id: '3',
  type: constants.TransactionType.MINUS,
  date: '11-17-2015',
  description: 'Citi',
  amount: '$1,200.00'
}, {
  id: '4',
  type: constants.TransactionType.MINUS,
  date: '11-20-2015',
  description: 'Utilities',
  amount: '$300.00'
}];
module.exports = transactionsController;
