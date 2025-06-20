const express = require('express');
const router = express.Router();
const CircleModel=require('../models/CircleModel')
const asyncHandler = require('express-async-handler');

router.get('/',asyncHandler(async(req,res)=>{
    const circles=await CircleModel.find();
    res.json(circles);
})
)

router.get('/:id',asyncHandler(async(req,res)=>{
    const circle=await CircleModel.findById(req.params.id);
    res.json(circle);
}))

router.post('/',asyncHandler(async(req,res)=>{
    const { title, category, description, rules, bannerImageUrl } = req.body;
    const newCircle=new CircleModel({
        title,
      category,
      description,
      rules,
      bannerImageUrl,
      membersCount: 0
    })
    const savedCircle = await newCircle.save();
    res.status(201).json(savedCircle);

}))

module.exports = router;