const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    id_missions: Number,
    name : String,
    description: String,
    level_reward : Number,
    level_requirement: Number,
    quest_giver_character: String
    }
  );


module.exports = mongoose.model('missionsData',userSchema);