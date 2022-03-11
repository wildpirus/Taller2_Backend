const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    id_player : String,
    name: String,
    last_login: Date,
    passwprd : String,
    username: String
    }
  );


module.exports = mongoose.model('playersData',userSchema);