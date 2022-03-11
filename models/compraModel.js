const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    id_compra : String,
    id_user: String,
    id_product : String,
    }
  );


module.exports = mongoose.model('comprasdatas',userSchema);