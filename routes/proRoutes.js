const router = require('express').Router()
const productCtrl = require('../controllers/proCtrl')

const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route("/register") 
      .post(productCtrl.register)

router.route("/login") 
      .post(productCtrl.login)
router.route('/createproducts')
    .get(productCtrl.getProducts)
    .post(productCtrl.createProduct)


router.route('/products/:id')
    .delete(auth, authAdmin, productCtrl.deleteProduct)
    .patch(productCtrl.updateProduct)



module.exports = router