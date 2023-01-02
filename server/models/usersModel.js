const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ordersModel= require ('./ordersModel')


const usersSchema = schema({
  name:{type:String, required:true},
  email:{type:String, required:true},
  phone:{type:String, required:true},
  password:{type:String, required:true},
    avatar: { 
      public_id:{type:String, required:true}, 
      url:{type:String, required:true}
    },
    orders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "order"
    }],
    createdAt:{type:Date, default:Date.now},
    lastSeen:{type:Date, default:Date.now},
  });
  const userModel = mongoose.model("user", usersSchema);

  module.exports = userModel