const controller = {};
const mongoose = require('mongoose');
const charactersModel = require('../models/charactersModel');

//Create Character
controller.newCharacter = async(req,res)=> {
   const {id,name,stats,level,title,model} = req.body
   const idCharacter = await charactersModel.findOne({id: req.body.id})
   console.log(id,name,stats,level,title,model)
   if(id != undefined && name != undefined && stats != undefined && level != undefined && title != undefined && model != undefined){
    try {
        const newCharacter = new charactersModel({id,name,stats,level,title,model})
        await newCharacter.save();
        res.json("Sucefully created.")
       } catch (error) {
        res.json("error." , error)
       }
   }else{
    res.json("data missing")
     
       
   }
   
}

//getAllCharacters
controller.getAllCharacters = async(req,res)=>{
    const characters = await charactersModel.find()
    console.log(characters);
    res.json({characters})
}

//getCharacter
controller.getCharacter = async(req,res)=>{
    const b = req.params.id_character
    console.log(b)
    const character = await charactersModel.find({_id : b})
    res.json({character})
}

//updateCharacter
controller.updateCharacter = async(req,res)=>{
    const {id,name,stats,level,title,model} = req.body
    const filter = {_id : req.params.id_character}
    console.log(filter)
    const update = {id,name,stats,level,title,model}
    if (id != undefined && name != undefined && stats != undefined && level != undefined && title != undefined && model != undefined) {
        try {
            const idCharacter = await charactersModel.findOneAndUpdate(filter,update,{new: true})
            if (idCharacter != undefined) {
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

//deleteCharacter
controller.deleteCharacter = async(req,res)=>{
    const filter = {_id : req.params.id_character}
    console.log(filter)
    try {
        const idCharacter = await charactersModel.find(filter).remove().exec();
        if (idCharacter != undefined) {
            res.json("Delete sucefully")
        } else {
            res.json("id missing")
        }
       
    } catch (error) {
         res.json("error." , error)
    }

}

module.exports = controller;