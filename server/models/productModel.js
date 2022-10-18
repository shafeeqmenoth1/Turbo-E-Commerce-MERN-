const {Schema,model, default: mongoose} = require('mongoose')


const productSchema = new Schema({
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
   price:{
    type:Number,
    required:true,
   },
   description:{
    type: String,
    required:true,
   },
   offer:{type:Number},
   quantity:{type:Number, required:true},
   productPictures:[
    {
        img:{type:String}
    }
   ],
   reviews:[
    {
        userId: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
        review:String
    }
   ],
   category:{type: mongoose.Schema.Types.ObjectId, ref:'Category',required:true},

   createdBy:{type: mongoose.Schema.Types.ObjectId, ref:'User',required:true},
   updatedAt: Date,
},
    {
    timestamps: true
   })
   const Product = model("Product",productSchema)
   module.exports = Product
   