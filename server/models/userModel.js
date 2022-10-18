const {Schema,model} = require('mongoose')


const userSchema = new Schema({
    name:{
        type: String,
    
        trim: true,
    },
    email:{
        type: String,
        trim: true,
       
    },
    password:{
        type: String,
        required: [true,"please enter your password!"],
    },
    mobile:{
        type: String,
        unique: true,
        required: [true,"please enter your Mobile number!"],
    },
    role:{
        type: Number,
        default:0
    },
    avatar:{
        type: String,
        default:"https://res.cloudinary.com/dqpeu3u6i/image/upload/v1661239670/avatar/avatar-pro_kpcn0i.jpg",
    },
  

},
{
    timestamps: true
   })
   const Users = model("User",userSchema)
   module.exports = Users
   