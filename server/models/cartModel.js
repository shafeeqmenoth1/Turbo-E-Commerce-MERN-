const {Schema,model, default: mongoose} = require('mongoose')


const cartSchema = new Schema({
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true},
    cartItems:[
        {
            product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product',required: true},
            price:{type:Number, required: true},
            quantity:{type:Number, default: 1}
        }
    ]

    },{
    timestamps: true
   })
   const Cart = model("Cart",cartSchema)
   module.exports = Cart
   