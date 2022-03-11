const controller = {};
const missionObjetivesModel = require("../models/missionsObjetives");

//Create Image
controller.createMissionObjetive = async (req, res) => {
  const { id_image, address } = req.body;
  const idImage = await missionObjetivesModel.findOne({ id: req.body.id_image });
  if (idImage) {
    try {
      const newUser = new missionObjetivesModel({ id_image, address });
      await newUser.save();
      res.json("Sucefully created.");
    } catch (error) {
      res.json("error.", error);
    }
  } else {
    res.json("data missing");
  }
};

//getAllimages
controller.getAllMissionObjetive = async (req, res) => {
  const images = await missionObjetivesModel.find();
  res.json({ images });
};

//getImage
controller.getMissionObjetive = async (req, res) => {
  const b = req.params.id_image;
  const image = await missionObjetivesModel.find({ _id: b });
  res.json({ image });
};

//deleteImage
controller.deleteMissionObjetive = async (req, res) => {
  const filter = { _id: req.params.id_image };
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
