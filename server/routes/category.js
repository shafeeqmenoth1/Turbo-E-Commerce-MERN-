
const router = require('express').Router();
const  categoryController  = require('../controllers/categoryController');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');
const {multerUploads} = require('../middleware/multer');



router.post('/category/create',multerUploads.single("categoryImage"),categoryController.create)
router.get('/category/getCategories',categoryController.getCategories)



module.exports = router