const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  moneyTransfered: {
    type: Number,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
});

const Orders = mongoose.model("orders", userSchema);

module.exports = Orders;
