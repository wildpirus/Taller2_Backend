const { Router } = require('express');
const router = Router();
const {newPlayer,getAllPlayers, getPlayer, updatePlayer,deletePlayer} = require('../controllers/players_routes.controllers')

router.route('/')
      .get((req,res) => {
            res.json(
            {message: 'Bep, Bop! I am an API developed by Jaime Sierra'})})


//CREATE
router.route('/newPlayer/')
      .post(newPlayer)

//READ
router.route('/getAllPlayers')
      .get(getAllPlayers)

router.route('/getPlayer/:id_player')
      .get(getPlayer)

//UPDATE
router.route('/updatePlayer/:id_player')
      .patch(updatePlayer)

//DELETE
router.route('/deletePlayer/:id_player')
      .delete(deletePlayer)

module.exports = router;