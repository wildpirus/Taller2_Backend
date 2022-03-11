const { Router } = require('express');
const router = Router();
const {newMission, getAllMissions, getMission,updateMission,deleteMission} = require('../controllers/missions_routes.controller')

router.route('/')
      .get((req,res) => {
            res.json(
            {message: 'Bep, Bop! I am an API developed by Jaime Sierra'})})

//CREATE
router.route('/newMission/')
      .post(newMission)

//READ
router.route('/getAllMissions')
      .get(getAllMissions)

router.route('/getMission/:id_user')
      .get(getMission)

//UPDATE
router.route('/updateMission/:id_mission')
      .patch(updateMission)

//DELETE
router.route('/deleteMission/:id_mission')
      .delete(deleteMission)

module.exports = router;