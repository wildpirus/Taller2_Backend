const { Router } = require('express');
const router = Router();
const {createImage, getAllImages, getImage, deleteImage} = require('../controllers/images_2d_routes.controller')

router.route('/')
      .get((req,res) => {
            res.json(
            {message: 'Bep, Bop! I am an API developed by Jaime Sierra, Victor Mendoza, Amstrong Monachello'})})

//CREATE
router.route('/newImage/')
      .post(createImage)

//READ
router.route('/getAllImages')
      .get(getAllImages)

router.route('/getImages/:id_image')
      .get(getImage)


//DELETE
router.route('/deleteImages/:id_image')
      .delete(deleteImage)

module.exports = router;