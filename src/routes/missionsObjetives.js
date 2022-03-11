const { Router } = require("express");
const router = Router();
const {
  createMissionObjetive,
  getAllMissionObjetive,
  getMissionObjetive,
  updateMissionsObjetive,
  deleteMissionObjetive,
} = require("../controllers/missions_objetives_routes.controller");

router.route("/").get((req, res) => {
  res.json({ message: "Bep, Bop! I am an API developed by Jaime Sierra, Victor Mendoza, Amstrong Monachello" });
});

//CREATE
router.route("/newMissionObjetive/").post(createMissionObjetive);

//READ
router.route("/getAllMissionsObjetive").get(getAllMissionObjetive);

router.route("/getMissionObjetive/:id_mission").get(getMissionObjetive);

//UPDATE
router
  .route("/updateMissionObjetive/:id_mission")
  .patch(updateMissionsObjetive);

//DELETE
router
  .route("/deleteMissionObjetive/:id_mission")
  .delete(deleteMissionObjetive);

module.exports = router;
