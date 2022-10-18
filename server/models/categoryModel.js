const {Schema,model} = require('mongoose')


const categorySchema = new Schema({
    name:{
        type: String,
        required:true,
        trim: true,
    },
    slug:{
        type: String,
        trim: true,
        unique: true,
    },
    categoryImage:{type: String,
    default:"https://res.cloudinary.com/dqpeu3u6i/image/upload/v1664501937/category/no-img_siozrf.jpg"},
    parentId:{
        type: String,
      
    },
  
},
{
    timestamps: true
   })
   const Categories = model("Category",categorySchema)
   module.exports = Categories
   