
const  slugify = require('slugify');
const Product = require('../models/productModel');




 const productController = {
    create:(req,res)=>{

            try {
                const {name,description,price,offer,category,quantity} = req.body

                let productPictures = [];
        
                if(req.files.length > 0) {
                    productPictures = req.files.map(file => {
                        return { img : file.filename}
                    })
                }
        
                const product = new Product({
                    name,
                    slug:slugify(name),
                    description,
                    price,
                    offer,
                    quantity,
                    productPictures,
                    category,
                    createdBy:req.user.id
        
                })
            
        
                product.save((error,product)=>{
                    if(error) return res.status(400).json({error});
                    if(product) return res.status(200).json({product})
                }
        )
            } catch (error) {
                return res.status(500).json({error});
            }
        
    }
 }

 module.exports = productController