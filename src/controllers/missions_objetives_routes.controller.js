const controller = {};
const missionObjetivesModel = require("../models/missionsObjetives");

//Create MissionObjetives
controller.createMissionObjetive = async (req, res) => {
  const { id_mission_objetive, name, description, count, mission } = req.body;
  const idImage = await missionObjetivesModel.findOne({
    id: req.body.id_mission_objetive,
  });
  if (idImage) {
    try {
      const newUser = new missionObjetivesModel({
        id_mission_objetive,
        name,
        description,
        count,
        mission,
      });
      await newUser.save();
      res.json("Sucefully created.");
    } catch (error) {
      res.json("error.", error);
    }
  } else {
    res.json("data missing");
  }
};

//getAllMissionsObjetives
controller.getAllMissionObjetive = async (req, res) => {
  const images = await missionObjetivesModel.find();
  res.json({ images });
};

//getMissionsObjetive
controller.getMissionObjetive = async (req, res) => {
  const b = req.params.id_mission_objetive;
  const mission = await missionObjetivesModel.find({ _id: b });
  res.json({ mission });
};

//UpdateMissionsObjetives
controller.updateMissionsObjetive = async (req, res) => {
  const { id_mission_objetive, name, description, count } = req.body;
  const filter = { _id: req.params.id_mission_objetive };
  const update = { id_mission_objetive, name, description, count };
  if (
    (id_mission_objetive =
      !undefined &&
      name != undefined &&
      description != undefined &&
      count != undefined)
  ) {
    try {
      const idUser = await missionObjetivesModel.findOneAndUpdate(
        filter,
        update,
        { new: true }
      );
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

//deleteMissionObjetive
controller.deleteMissionObjetive = async (req, res) => {
  const filter = { _id: req.params.id_mission_objetive };
  try {
    const idImage = await missionObjetivesModel.find(filter).remove().exec();
    if (idImage != undefined) {
      res.json("Delete sucefully");
    } else {
      res.json("id missing");
    }
  } catch (error) {
    res.json("error.", error);
  }
};

module.exports = controller;
