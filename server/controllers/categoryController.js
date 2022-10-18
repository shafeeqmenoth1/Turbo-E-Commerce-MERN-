const Categories = require ("../models/categoryModel")
const {uploader} = require('../config/cloudinaryConfig')
const {dataUri} = require('../middleware/multer')
const slugify = require('slugify');



function createCategory (categories,parentId = null){
    
    const categoryList = []
    let category;

    if(parentId == null){
        category =  categories.filter(cat => cat.parentId == undefined)
    }else{
        category =  categories.filter(cat => cat.parentId == parentId)
    }

    for(let cate of category){
        categoryList.push({
            _id: cate._id,
            name:cate.name,
            categoryImage:cate.categoryImage,
            slug:cate.slug,
            children : createCategory(categories,cate._id)
        })
    }

    return categoryList;
}




 const categoryController = {
    create : async(req,res)=>{
      
   try {
   

    let categoryImg;

    if(req.file){
        const file = dataUri(req);
      
        const img = await uploader.upload(file,{
            folder:'category',width:150, height:150,crop:"fill"
        })

            categoryImg = img.url;
            console.log(categoryImg);
     
    }

    const categoryobj = {
        name: req.body.name,
        slug:slugify(req.body.name),
        categoryImage:categoryImg
    }

    if(req.body.parentId){
        categoryobj.parentId = req.body.parentId;
    }

    const cat = new Categories(categoryobj)

    cat.save((error,category)=>{
        if(error) return res.status(400).json({ message:error});

        return res.status(201).json({category})
    })
    
   } catch (error) {
         return res.status(500).json({message: error});
   }
    },
    getCategories:(req,res)=>{
        try {

            Categories.find({})

            .exec((error,categories)=>{
                if(error) return res.status(400).json({message:error})
                if(categories) {
                    const categoryList = createCategory(categories)

                    res.status(200).json({categoryList})
                }
               
            })
            
        } catch (error) {
            return res.status(500).json({message: error});
        }
    }
}



module.exports = categoryController