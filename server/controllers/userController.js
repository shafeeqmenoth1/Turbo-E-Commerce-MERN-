
const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const SendmailTransport = require('nodemailer/lib/sendmail-transport')
const sendMail= require('./sendMail')
const jwtDecode = require("jwt-decode")
const CLIENT_URL = process.env.CLIENT_URL
const client = require('twilio')(process.env.TWILIO_ACCOUNT_ID,process.env.TWILIO_AUTH_ID)

 const userController = {
    register:async (req,res)=> {
        try {
           const {name,email,mobile,password} = req.body
           if(!name || !email || !mobile || !password)
            return res.status(404).json({message:"Please fill in all fields"})
            if(!validateEmail(email))
            return res.status(404).json({message:"Invalid Email"})
            const user = await Users.findOne({email})
            if(user){
                
                return res.status(404).json({message:"This email already exists."})
            }
          
            if(password.length < 6)
            return res.status(404).json({message:"Password must be at least 6 characters."})

            const hashedPassword = await bcrypt.hash(password,12)
            const newUser = {name,email,mobile,password:hashedPassword}

            const activation_token = createActivationToken(newUser)

            const url = `${CLIENT_URL}/user/activate/${activation_token}`
            
            sendMail(email,url,"Verify your email address")
              
            res.status(200).json({message: 'To Complete registration, Please Check your email to verify.'});
            
        } catch (error) {
           
            return res.status(500).json({message:error.message});
        }
    },
    activationEmail:async (req,res)=>{
        try {
            const {activation_token} = req.body
            const user = jwt.verify(activation_token,process.env.SECRET_KEY)
            const {email,name,password,mobile} = user

            const check = await Users.findOne({email})

            if(check) return res.status(400).json({message:"This Email is already exists."});
            const newUser = new Users({email,name,password,mobile})

            await newUser.save()
            res.json({message:"Account has been activated!"});


        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    login: async (req,res)=>{
      
        try {
              console.log(req.body);
            const {password} = req.body

            const cred = req.body.email
               
            const user = await Users.findOne({email:cred}) || await Users.findOne({mobile:cred}) 
    
            if(!user) return res.status(400).json({message:"This Email doesn't exist.."});
    
            const isMatch = await bcrypt.compare(password,user.password)
            if(!isMatch) return res.status(400).json({message:"Password is incorrect."})
            
            const refresh_token = createRefreshToken({id:user._id})
            res.cookie('refreshtoken',refresh_token,{
                httpOnly: true, 
                path:'http://localhost:5000/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7 days
            })
          
            return res.json({message:"Login Success"})
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
       

    },
    getAccessToken:(req,res)=>{
       
        try {
          
            const rf_token = req.cookies.refreshtoken
       
            if(!rf_token) return res.status(400).json({message:"Please Login now!"});
            jwt.verify(rf_token,process.env.SECRET_KEY,(err,user)=>{
                if(err) return res.status(400).json({message:"Please Login now!"})
               const access_token    = createAccessToken({id:user.id})
               
               res.json({access_token})
            })
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    forgotPassword: async (req,res)=>{
        try {
        
         const {email} = req.body
         const user = await Users.findOne({email});
         if(!user) return res.status(400).json({message:"This Email doesn't exist.."});

         const access_token = createAccessToken({id:user._id})

         const url = `${CLIENT_URL}/user/reset/${access_token}`

         sendMail(email,url,"Reset your password")
         res.json({message:"Resend your password,please check your email."})
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    resetPassword: async (req,res)=>{
        try {
         const {password} = req.body
         console.log(password);
         const hashedPassword = await bcrypt.hash(password,12)
            console.log(req.user);
         await Users.findOneAndUpdate({_id:req.user.id},{password:hashedPassword})
         res.json({message:"Password succeesfully changed."})
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    getUserInfo: async (req,res)=>{
        try {
            const user = await Users.findById(req.user.id).select('-password')

            res.json(user)
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    getAllUserInfo: async (req,res)=>{
        try {
            const users = await Users.find().select('-password')

            res.json(users)
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    logout: async (req,res)=>{
        try {
            res.clearCookie("refreshtoken", {path:'/user/refresh_token'})
            return res.json({message:"Logged out."})

           
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    updateUser: async (req,res)=>{
        try {
           
            const {name,avatar} = req.body
            console.log(req.user);
            await Users.findOneAndUpdate({_id:req.user.id},{name,avatar})
            res.json({message:"Updated"})
        
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    updateAllUser: async (req,res)=>{
        try {
           console.log(req.params.id);
            const id = req.params.id
            const {name,avatar,role,mobile} = req.body
        
            await Users.findOneAndUpdate({_id:id},{name,avatar,role,mobile})
            res.json({message:"Updated"})
        
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    deleteUser: async (req,res)=>{
        try {
       
            const id = req.params.id
           
        
            await Users.findByIdAndDelete(id)

            res.json({message:"Deleted"})
        
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
    },
    googleLogin: async (req,res)=>{

        try {

            const {tokenId} = req.body
            const decodedToken = jwtDecode(tokenId)
          
            const {email,email_verified,name,picture} = decodedToken

            const user = await Users.findOne({email})
    
            if(user) {
                const refresh_token = createRefreshToken({id:user._id})
                res.cookie('refreshtoken',refresh_token,{
                    httpOnly: true, 
                    path:'/user/refresh_token',
                    maxAge: 7*24*60*60*1000 // 7 days
                })
            }else{
                const newUser = new Users({
                    email,name,avatar:picture
                })
                newUser.save()

            }
        
            return res.status(200).json({message:"Login Success"})
        } catch (error) {
            return res.status(500).json({message:error.message});
        }
       

    },

    otpSend: async (req,res)=>{
        try {
            const {mobile} = req.body
            const user = await Users.findOne({mobile})

            if(user) return res.status(404).json({message:"This Mobile no. already registered!"}) 

                
            

             const resp =  await client.verify.services(process.env.TWILIO_SERVICE_ID)
            .verifications.create({
                to: `+91${mobile}`,
                channel: "sms"
            })
            res.json(resp)
        } catch (error) {
            res.json(`Error,${error}`)
        }
    },
    verifyOtp: async (req,res)=>{
        try {
            const {otp,password,mobile} = req.body
      const resp =  await client.verify.services(process.env.TWILIO_SERVICE_ID)
            .verificationChecks.create({
                to:`+91${mobile}`,
                code: otp
            })
        console.log(resp)
            const hashedPassword = await bcrypt.hash(password,12)
            const validCode = resp.valid

            if(!validCode) return("Invalid Otp, enter currect one!")
          
            const newUser = new Users({mobile,password:hashedPassword})

            await newUser.save()
            res.json({message:"Account has been activated!"});

        } catch (error) {
            res.json(`Error,${error}`)
        }
    },
 }

 const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const createActivationToken = (payload)=>{
    return jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"5m"})
  }
  const createAccessToken = (payload)=>{
    return jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"15m"})
  }
  const createRefreshToken = (payload)=>{
    return jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"7d"})
  }

 module.exports = userController