const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : String,
    level: String,
    description : String,
    image : String,
    sell_price : int
    }
  );


module.exports = mongoose.model('itemsData',userSchema);