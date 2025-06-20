const mongoose = require("mongoose");

const CircleSchema=new mongoose.Schema({
  title: String,
  category: String, 
  description: String,
  likes:{type:Number,default:0},
  rules: [String],
  bannerImageUrl: String,
  membersCount: {type:Number,default:0},
  trending: String,
//   members:[ObjectId],
//   createdBy: ObjectId, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
})

module.exports=new mongoose.model('circle',CircleSchema);

