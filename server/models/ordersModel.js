const mongoose = require("mongoose");
const schema = mongoose.Schema;
const lawyersModel= require ('./lawyersModel')
const usersModel= require ('./usersModel')

const ordersSchema = schema({
  orderNum: { type: String, required: true },
  lawyer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "lawyer",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  date: { type: Date, default: Date.now() },
  profit: { type: Number},
});
const orderModel = mongoose.model("order", ordersSchema);

module.exports = orderModel