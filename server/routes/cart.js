
const router = require('express').Router();
const auth = require('../middleware/auth');
const  cartController  = require('../controllers/cartController');

router.post('/cart/add-to-cart',auth,cartController.addToCart);


//router.get('/category/getCategories',categoryController.getCategories)



module.exports = router