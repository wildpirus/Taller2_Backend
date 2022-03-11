const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    id_user : String,
    name: String,
    username : String,
    }
  );


module.exports = mongoose.model('userdatas',userSchema);