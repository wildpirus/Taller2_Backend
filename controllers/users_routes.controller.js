const controller = {};
const mongoose = require('mongoose');
const userModel = require('../models/userModel');

//Create User
controller.createUser = async(req,res)=> {
   const {id,name,username} = req.body
   const idUser = await userModel.findOne({id: req.body.id})
   if(id != undefined && name != undefined && username != undefined){
    try {
        const newUser = new userModel({id,name,username})
        await newUser.save();
        res.json("Sucefully created.")
       } catch (error) {
        res.json("error." , error)
       }
   }else{
    res.json("data missing")
     
       
   }
   
}

//getAllUsers
controller.getAllUsers = async(req,res)=>{
    const users = await userModel.find()
    console.log(users);
    res.json({users})
}

//getUser
controller.getUser = async(req,res)=>{
    const b = req.params.id_user
    console.log(b)
    const user = await userModel.find({_id : b})
    res.json({user})
}

//updateUser
controller.updateUser = async(req,res)=>{
    const {id,name,username} = req.body
    const filter = {_id : req.params.id_user}
    console.log(filter)
    const update = {id,name,username}
    if (id =! undefined && name != undefined && username != undefined) {
        try {
            const idUser = await userModel.findOneAndUpdate(filter,update,{new: true})
            if (idUser != undefined) {
                res.json("updated")
            } else {
                res.json("missing id")
            }
           
        } catch (error) {
             res.json("error." , error)
        }
    } else {
        res.json("data missing")
    }
    
}

//deleteUser
controller.deleteUser = async(req,res)=>{
    const filter = {_id : req.params.id_user}
    console.log(filter)
    try {
        const idUser = await userModel.find(filter).remove().exec();
        if (idUser != undefined) {
            res.json("Delete sucefully")
        } else {
            res.json("id missing")
        }
       
    } catch (error) {
         res.json("error." , error)
    }

}

module.exports = controller;