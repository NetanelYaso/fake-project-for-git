const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reviewsSchema = schema({
  name:{type:String, required:true},
  rating:{type:Number, required:true},
  coment:{type:String, required:true},
  }, { timestamps: true });
  const reviewModel = mongoose.model("review", reviewsSchema);

  module.exports = reviewModel