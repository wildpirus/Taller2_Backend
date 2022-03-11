const { Router } = require('express');
const router = Router();
const {newCompra,getAllCompras, getCompra,deleteCompra} = require('../controllers/compra_routes.controller')

router.route('/')
      .get((req,res) => {
            res.json(
            {message: 'Bep, Bop! I am an API developed by Jaime Sierra, Victor Mendoza, Amstrong Monachello'})})

//CREATE
router.route('/newCompra/')
      .post(newCompra)

//READ
router.route('/getAllCompras')
      .get(getAllCompras)

router.route('/getCompra/:id_compra')
      .get(getCompra)


//DELETE
router.route('/deleteCompra/:id_product')
      .delete(deleteCompra)

module.exports = router;