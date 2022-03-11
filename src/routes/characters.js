const { Router } = require('express');
const router = Router();
const {newCharacter,getAllCharacters, getCharacter, updateCharacter,deleteCharacter} = require('../controllers/characters_routes.controllers')

router.route('/')
      .get((req,res) => {
            res.json(
            {message: 'Bep, Bop! I am an API developed by Jaime Sierra'})})


//CREATE
router.route('/newCharacter/')
      .post(newCharacter)

//READ
router.route('/getAllCharacters')
      .get(getAllCharacters)

router.route('/getCharacter/:id_character')
      .get(getCharacter)

//UPDATE
router.route('/updateCharacter/:id_character')
      .patch(updateCharacter)

//DELETE
router.route('/deleteCharacter/:id_character')
      .delete(deleteCharacter)

module.exports = router;