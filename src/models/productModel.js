const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    id_product : String,
    name: String,
    price : String,
    }
  );


module.exports = mongoose.model('productsdatas',userSchema);