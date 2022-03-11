const controller = {};
const missionsModel = require("../models/missionsModel");

//Create mission
controller.newMission = async (req, res) => {
  const {
    id_mission,
    name,
    description,
    level_reward,
    level_requirement,
    quest_giver_character,
  } = req.body;
  if (id) {
    try {
      const newUser = new missionsModel({
        id_mission,
        name,
        description,
        level_reward,
        level_requirement,
        quest_giver_character,
      });
      await newUser.save();
      res.json("Sucefully created.");
    } catch (error) {
      res.json("error.", error);
    }
  } else {
    res.json("data missingu");
  }
};

//getAllMission
controller.getAllMissions = async (req, res) => {
  const missions = await missionsModel.find();
  res.json({ missions });
};

//getMission
controller.getMission = async (req, res) => {
  const ID = req.params.id_missions;
  console.log(ID);
  const mission = await missionsModel.find({ _id: ID });
  res.json({ mission });
};

//updateMission
controller.updateMission = async (req, res) => {
  const {
    id_mission,
    name,
    description,
    level_reward,
    level_requirement,
    quest_giver_character,
  } = req.body;
  const filter = { _id: req.params.id_mission };
  console.log(filter);
  const update = {
    id_mission,
    name,
    description,
    level_reward,
    level_requirement,
    quest_giver_character,
  };
  if (
    ((id_mission = !undefined && name != undefined && description != undefined),
    level_reward != undefined,
    level_requirement != undefined,
    quest_giver_character != undefined)
  ) {
    try {
      const idUser = await missionsModel.findOneAndUpdate(filter, update, {
        new: true,
      });
      if (idUser != undefined) {
        res.json("updated");
      } else {
        res.json("missing id");
      }
    } catch (error) {
      res.json("error.", error);
    }
  } else {
    res.json("data missing");
  }
};

//deleteMission
controller.deleteMission = async (req, res) => {
  const filter = { _id: req.params.id_mission };
  try {
    const idUser = await missionsModel.find(filter).remove().exec();
    if (idUser != undefined) {
      res.json("Delete sucefully");
    } else {
      res.json("id missing");
    }
  } catch (error) {
    res.json("error.", error);
  }
};

module.exports = controller;
