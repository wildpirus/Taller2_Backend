const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id_image: Number,
  address: String,
});

module.exports = mongoose.model("images2dData", userSchema);
