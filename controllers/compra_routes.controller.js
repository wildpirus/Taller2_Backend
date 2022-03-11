const controller = {};
const mongoose = require('mongoose');
const compraModel = require('../models/compraModel');

//Create User
controller.newCompra = async(req,res)=> {
   const {id,id_user,id_product} = req.body
   const idUser = await compraModel.findOne({id: req.body.id})
   console.log(id,id_user,id_product)
   if(id != undefined && id_user != undefined && id_product != undefined){
    try {
        const newUser = new compraModel({id,id_user,id_product})
        await newUser.save();
        res.json("Sucefully created.")
       } catch (error) {
        res.json("error." , error)
       }
   }else{
    res.json("data missing")
   }
   
}

//getAllcompras
controller.getAllCompras = async(req,res)=>{
    const compras = await compraModel.find()
    console.log(compras);
    res.json({compras})
}

//getUser
controller.getCompra = async(req,res)=>{
    const b = req.params.id_compra
    console.log(b)
    const compra = await compraModel.find({_id : b})
    res.json({compra})
}

//deleteUser
controller.deleteCompra = async(req,res)=>{
    const filter = {_id : req.params.id_compra}
    console.log(filter)
    try {
        const idUser = await compraModel.find(filter).remove().exec();
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