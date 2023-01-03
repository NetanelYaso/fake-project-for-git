const mongoose = require("mongoose");
const schema = mongoose.Schema;
const reviewsModel= require ('./reviewsModel')
const departmentsModel= require ('./departmentsModel')
const ordersModel= require ('./ordersModel')


const lawyersSchema = schema({
  name:{type:String, required:true},
  email:{type:String, required:true},
  phone:{type:String, required:true},
  experience:{type:Number, required:true},
    avatar: { 
      public_id:{type:String}, 
      url:{type:String}, 
    },
    reviews: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "review",
    }],
    departments:[{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "department",
    }],
    orders:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    }],
  });
  const lawyerModel = mongoose.model("lawyer", lawyersSchema);

  module.exports = lawyerModel