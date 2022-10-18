
const  slugify = require('slugify');
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');




 const cartController = {
    addToCart:  (req,res)=>{

            try {
               
            Cart.findOne({user:req.user.id})
                .exec(function(error,cart) {
                    if(error) return res.status(400).json({error});
                    if(cart){
                        //if cart already exists then update cart by quantity

                        const product = req.body.cartItems.product;
                        const item = cart.cartItems.find(c => c.product == product);

                        if(item){
                            Cart.findOneAndUpdate({"user":req.user.id, "cartItems.product":product},{
                                "$set":{"cartItems.$":{
                                    ...req.body.cartItems,
                                    quantity : item.quantity + 1
                                }}
                            }).exec((error,cart)=>{
                                if(error) return res.status(400).json({error});
                                if(cart) return res.status(201).json({cart})
                            })
                        }else{
                            Cart.findOneAndUpdate({user:req.user.id},{
                                "$push":{"cartItems":req.body.cartItems}
                            }).exec((error,cart)=>{
                                if(error) return res.status(400).json({error});
                                if(cart) return res.status(201).json({cart})
                            })
                        }

                     
                    }else{
                        //if cart didn't  exists then create new cart

                        const cart = new Cart({
                            user: req.user.id,
                            cartItems: [req.body.cartItems]
                        })
                       
                         cart.save((error,cart)=>{
                            if(error){ return res.status(400).json({error});}
                            if(cart) {return res.status(200).json({cart});}
                        })
                    }
                })
               
               
                
      
            } catch (error) {
                return res.status(500).json({error});
            }
        
    }
 }

 module.exports = cartController