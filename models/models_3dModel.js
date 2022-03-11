const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    id_model_3d : String,
    address: String
    }
  );


module.exports = mongoose.model('models_3dData',userSchema);