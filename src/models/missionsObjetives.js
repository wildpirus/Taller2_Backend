const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id_mission_objetive: Number,
  name: String,
  description: String,
  count: Number,
  mission: String,
});

module.exports = mongoose.model("missionsObjetivesData", userSchema);
