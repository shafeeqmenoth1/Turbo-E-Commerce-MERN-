const router = require('express').Router();
const uploadController = require('../controllers/uploadController');
const auth = require('../middleware/auth');
const uploadImage = require('../middleware/uploadImage')


router.post('/uploadAvatar',auth,uploadImage,uploadController.uploadAvatar)
//router.post('/uploadCategoryImage',auth,uploadImage,uploadController.uploadCategoryImage)



module.exports = router