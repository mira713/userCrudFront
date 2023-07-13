const express = require("express");
const userRouter = express.Router();
const {UserModel} = require('../model/userModel');
require('dotenv').config();

userRouter.get('/',async(req,res)=>{
    let data = await UserModel.find();
    res.send(data)
})
userRouter.post('/register',async(req,res)=>{
    const user = new UserModel(req.body)
    await user.save()
    res.send(user)
})
userRouter.get("/:id",async(req,res)=>{
    let id=req.params.id
    let data = await UserModel.find({_id:id})
    res.send(data)
})
userRouter.put('/:id',async(req,res)=>{
    let id = req.params.id
    let payload = req.body
    await UserModel.findByIdAndUpdate({_id:id},payload)
    res.send('data updated')
})
userRouter.delete('/:id',async(req,res)=>{
    let id = req.params.id
    await UserModel.findByIdAndDelete({_id:id})
    res.send('data deleted')
})
module.exports={
    userRouter
}