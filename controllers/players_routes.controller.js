const controller = {};
const mongoose = require('mongoose');
const playersModel = require('../models/playersModel');

//Create Player
controller.newPlayer = async(req,res)=> {
   const {id,name,last_login,password,username} = req.body
   const idPlayer = await playersModel.findOne({id: req.body.id})
   console.log(id,name,last_login,password,username)
   if(id != undefined && name != undefined && last_login != undefined && password != undefined && username != undefined){
    try {
        const newPlayer = new playersModel({id,name,last_login,password,username})
        await newPlayer.save();
        res.json("Sucefully created.")
       } catch (error) {
        res.json("error." , error)
       }
   }else{
    res.json("data missing")
     
       
   }
   
}

//getAllPlayers
controller.getAllPlayers = async(req,res)=>{
    const players = await playersModel.find()
    console.log(players);
    res.json({players})
}

//getPlayer
controller.getPlayer = async(req,res)=>{
    const b = req.params.id_player
    console.log(b)
    const player = await playersModel.find({_id : b})
    res.json({player})
}

//updatePlayer
controller.updatePlayer = async(req,res)=>{
    const {id,name,last_login,password,username} = req.body
    const filter = {_id : req.params.id_player}
    console.log(filter)
    const update = {id,name,last_login,password,username}
    if (id != undefined && name != undefined && last_login != undefined && password != undefined && username != undefined) {
        try {
            const idPlayer = await playersModel.findOneAndUpdate(filter,update,{new: true})
            if (idPlayer != undefined) {
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

//deletePlayer
controller.deletePlayer = async(req,res)=>{
    const filter = {_id : req.params.id_player}
    console.log(filter)
    try {
        const idPlayer = await playersModel.find(filter).remove().exec();
        if (idPlayer != undefined) {
            res.json("Delete sucefully")
        } else {
            res.json("id missing")
        }
       
    } catch (error) {
         res.json("error." , error)
    }

}

module.exports = controller;