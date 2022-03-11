const controller = {};
const mongoose = require('mongoose');
const models_3dModel = require('../models/models_3dModel');

//Create Model_3d
controller.newModel_3d = async(req,res)=> {
   const {id,address} = req.body
   const idModel_3d = await models_3dModel.findOne({id: req.body.id})
   console.log(id,address)
   if(id != undefined && address != undefined){
    try {
        const newModel_3d = new models_3dModel({id,address})
        await newModel_3d.save();
        res.json("Sucefully created.")
       } catch (error) {
        res.json("error." , error)
       }
   }else{
    res.json("data missing")
     
       
   }
   
}

//getAllModels_3d
controller.getAllModels_3d = async(req,res)=>{
    const models_3d = await models_3dModel.find()
    console.log(models_3d);
    res.json({models_3d})
}

//getModel_3d
controller.getModel_3d = async(req,res)=>{
    const b = req.params.id_model_3d
    console.log(b)
    const model_3d = await models_3dModel.find({_id : b})
    res.json({model_3d})
}

//updateModel_3d
controller.updateModel_3d = async(req,res)=>{
    const {id,address} = req.body
    const filter = {_id : req.params.id_model_3d}
    console.log(filter)
    const update = {id,address}
    if (id != undefined && address != undefined) {
        try {
            const idModel_3d = await models_3dModel.findOneAndUpdate(filter,update,{new: true})
            if (idModel_3d != undefined) {
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

//deleteModel_3d
controller.deleteModel_3d = async(req,res)=>{
    const filter = {_id : req.params.id_model_3d}
    console.log(filter)
    try {
        const idModel_3d = await models_3dModel.find(filter).remove().exec();
        if (idModel_3d != undefined) {
            res.json("Delete sucefully")
        } else {
            res.json("id missing")
        }
       
    } catch (error) {
         res.json("error." , error)
    }

}

module.exports = controller;