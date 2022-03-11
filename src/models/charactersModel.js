const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    id_character : String,
    name: String,
    stats: String,
    level : Number,
    title: String,
    model: String
    }
  );


module.exports = mongoose.model('charactersData',userSchema);