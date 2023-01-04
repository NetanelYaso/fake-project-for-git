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
  profit: { type: Number},
}, { timestamps: true });
const orderModel = mongoose.model("order", ordersSchema);

module.exports = orderModel