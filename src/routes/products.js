const { Router } = require('express');
const router = Router();
const {newProduct,getAllProducts, getProduct, updateProduct,deleteUser} = require('../controllers/product_routes.controllers')

router.route('/')
      .get((req,res) => {
            res.json(
            {message: 'Bep, Bop! I am an API developed by Jaime Sierra, Victor Mendoza, Amstrong Monachello'})})


//CREATE
router.route('/newProduct/')
      .post(newProduct)

//READ
router.route('/getAllProducts')
      .get(getAllProducts)

router.route('/getProduct/:id_product')
      .get(getProduct)

//UPDATE
router.route('/updateProduct/:id_product')
      .patch(updateProduct)

//DELETE
router.route('/deleteProduct/:id_product')
      .delete(deleteUser)

module.exports = router;