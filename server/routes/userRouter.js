
const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');





router.post('/register',userController.register)
router.post('/activate',userController.activationEmail)
router.post('/login',userController.login)
router.post('/refresh_token',userController.getAccessToken)
router.post('/forgotPassword',userController.forgotPassword)
router.post('/resetPassword',auth,userController.resetPassword)
router.get('/userInfo',auth,userController.getUserInfo)
router.get('/allUserInfo',auth,authAdmin,userController.getAllUserInfo)
router.get('/logout',userController.logout)
router.patch('/updateUser',auth,userController.updateUser)
router.patch('/updateAllUser/:id',auth,authAdmin,userController.updateAllUser)
router.delete('/deleteUser/:id',auth,authAdmin,userController.deleteUser)


// Google Login

router.post('/google_login',userController.googleLogin)


// Otp verification

router.post('/otp_send',userController.otpSend)
router.post('/verify_otp',userController.verifyOtp)


module.exports = router