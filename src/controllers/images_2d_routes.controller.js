const controller = {};
const imageModel = require("../models/images_2d");

//Create Image
controller.createImage = async (req, res) => {
  const { id_image, address } = req.body;
  const idImage = await imageModel.findOne({ id: req.body.id_image });
  if (idImage) {
    try {
      const newUser = new imageModel({ id_image, address });
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
controller.getAllImages = async (req, res) => {
  const images = await imageModel.find();
  res.json({ images });
};

//getImage
controller.getImage = async (req, res) => {
  const b = req.params.id_image;
  const image = await imageModel.find({ _id: b });
  res.json({ image });
};

//deleteImage
controller.deleteImage = async (req, res) => {
  const filter = { _id: req.params.id_image };
  try {
    const idImage = await imageModel.find(filter).remove().exec();
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
