var constants = require('../lib/constants');

var transactions = {
  getAll: function(req, res) {
    var allTransactions = data;
    res.json(allTransactions);
  },
  getOne: function(req, res) {
    var id = req.params.id;
    var transaction = data[0]
    res.json(transaction);
  },
  create: function(req, res) {
    var newTransaction = req.body;
    data.push(newTransaction);
    res.json(newTransaction);
  },
  update: function(req, res) {
    var updateTransaction = req.body;
    var id = req.params.id;
    data[id] = updateTransaction;
    res.json(updateTransaction);
  },
  delete: function(req, res) {
    var id = req.params.id;
    data.splice(id, 1);
    res.json(true);
  }
};

var data = [{
  id: '1',
  type: constants.transactionType.PLUS,
  date: '11-09-2015',
  description: 'Salary',
  amount: '$1,000.00'
}, {
  id: '2',
  type: constants.transactionType.MINUS,
  date: '11-01-2015',
  description: 'Rent',
  amount: '$2,000.00'
}, {
  id: '3',
  type: constants.transactionType.MINUS,
  date: '11-17-2015',
  description: 'Citi',
  amount: '$1,200.00'
}, {
  id: '4',
  type: constants.transactionType.MINUS,
  date: '11-20-2015',
  description: 'Utilities',
  amount: '$300.00'
}];
module.exports = transactions;
