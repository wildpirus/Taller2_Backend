const { Router } = require('express');
const router = Router();
const {newModel_3d,getAllModels_3d, getModel_3d, updateModel_3d,deleteModel_3d} = require('../controllers/models_3d_routes.controllers')

router.route('/')
      .get((req,res) => {
            res.json(
            {message: 'Bep, Bop! I am an API developed by Jaime Sierra'})})


//CREATE
router.route('/newModel_3d/')
      .post(newModel_3d)

//READ
router.route('/getAllModels_3d')
      .get(getAllModels_3d)

router.route('/getModel_3d/:id_model_3d')
      .get(getModel_3d)

//UPDATE
router.route('/updateModel_3d/:id_model_3d')
      .patch(updateModel_3d)

//DELETE
router.route('/deleteModel_3d/:id_model_3d')
      .delete(deleteModel_3d)

module.exports = router;