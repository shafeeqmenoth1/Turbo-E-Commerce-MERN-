

const  productController  = require('../controllers/productController');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');
const router = require('express').Router();
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
     
      cb(null, shortid.generate()+'-'+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })




router.post('/product/create',auth,authAdmin,upload.array('productPicture'),productController.create)


//router.get('/product/getCategories',productController.getCategories)



module.exports = router