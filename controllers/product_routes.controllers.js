const controller = {};
const mongoose = require('mongoose');
const productModel = require('../models/productModel');

//Create User
controller.newProduct = async(req,res)=> {
   const {id,name,price} = req.body
   const idUser = await productModel.findOne({id: req.body.id})
   console.log(id,name,price)
   if(id != undefined && name != undefined && price != undefined){
    try {
        const newUser = new productModel({id,name,price})
        await newUser.save();
        res.json("Sucefully created.")
       } catch (error) {
        res.json("error." , error)
       }
   }else{
    res.json("data missingu")
     
       
   }
   
}

//getAllUsers
controller.getAllProducts = async(req,res)=>{
    const products = await productModel.find()
    console.log(products);
    res.json({products})
}

//getUser
controller.getProduct = async(req,res)=>{
    const b = req.params.id_product
    console.log(b)
    const product = await productModel.find({_id : b})
    res.json({product})
}

//updateUser
controller.updateProduct = async(req,res)=>{
    const {id,name,price} = req.body
    const filter = {_id : req.params.id_product}
    console.log(filter)
    const update = {id,name,price}
    if (id =! undefined && name != undefined && username != undefined) {
        try {
            const idUser = await productModel.findOneAndUpdate(filter,update,{new: true})
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
    const filter = {_id : req.params.id_product}
    console.log(filter)
    try {
        const idUser = await productModel.find(filter).remove().exec();
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