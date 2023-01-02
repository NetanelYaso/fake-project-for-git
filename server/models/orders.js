const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  orderName:{type:String,required:true},
  orderNumber:{type:Number,required:true},
},
{
  timeStamps:true
})

module.exports = mongoose.model("order",OrderSchema)