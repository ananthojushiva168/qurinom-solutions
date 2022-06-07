const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')
// const authAdmin = require('../middleware/authAdmin')

router.post('/register',userCtrl.register)


router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/infor', auth,  userCtrl.getUser)

//router.get('/getotp', auth,  userCtrl.getOTP)

// router.post('/checkotp', auth,  userCtrl.checkOTP)

router.patch('/personal',auth, userCtrl.About)

router.patch('/compdetail',auth, userCtrl.complete)

router.patch('/addcart', auth, userCtrl.addSaved)

// router.post('/videopost',auth,authAdmin,user)

// router.get('/history', auth, userCtrl.history)


module.exports = router