const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    life : int,
    power : int,
    magic: int,
    attribute_1 : int,
    attribute_2 : int,
    attribute_3 : int
    }
  );


module.exports = mongoose.model('characterStatsData',userSchema);