const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ordersModel= require ('./ordersModel')


const usersSchema = schema({
  name:{type:String},
  email:{type:String, required:true},
  phone:{type:String},
  password:{type:String, required:true},
    avatar: { 
      public_id:{type:String}, 
      url:{type:String}
    },
    orders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "order"
    }],
    lastSeen:{type:Date, default:Date.now},
  },{ timestamps: true });
  const userModel = mongoose.model("user", usersSchema);

  module.exports = userModel