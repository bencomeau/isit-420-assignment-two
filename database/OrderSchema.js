const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  CdID: {
    type: Number,
    required: true,
  },
  HourPurch: {
    type: Number,
    required: true,
    min: 0,
    max: 23,
  },
  DayPurch: {
    type: Number,
    required: true,
    min: 0,
    max: 356,
  },
  StoreID: {
    type: Number,
    required: true,
  },
  PricePaid: {
    type: Number,
    required: true,
    min: 5,
    max: 15,
  },
  SalesPersonID: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Order', OrderSchema);
