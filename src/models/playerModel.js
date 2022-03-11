const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : String,
    last_login: Date,
    password : String,
    username : String,
    }
  );


module.exports = mongoose.model('playerData',userSchema);