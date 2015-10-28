var mongoose = require('mongoose');
var TransactionType = require('../lib/constants').TransactionType;

var transcationSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  transactionType: {
    type: TransactionType,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    min: 0,
    required: true
  }
});

module.exports = transcactionSchema;
