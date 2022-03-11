const { Router } = require('express');
const router = Router();
const {createUser,getAllUsers, getUser, updateUser,deleteUser} = require('../controllers/users_routes.controller')

router.route('/')
      .get((req,res) => {
            res.json(
            {message: 'Bep, Bop! I am an API developed by Jaime Sierra'})})

//CREATE
router.route('/newUser/')
      .post(createUser)

//READ
router.route('/getAllUsers')
      .get(getAllUsers)

router.route('/getUser/:id_user')
      .get(getUser)

//UPDATE
router.route('/updateUser/:id_user')
      .patch(updateUser)

//DELETE
router.route('/deleteUser/:id_user')
      .delete(deleteUser)

module.exports = router;