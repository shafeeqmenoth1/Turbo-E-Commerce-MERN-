require('dotenv').config()
const express = require('express');  
const mongoose = require('mongoose');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const {cloudinaryConfig} = require('./config/cloudinaryConfig')
const bodyParser = require('body-parser');

const app = express()

app.use(express.json())

app.use(cors())
app.use(cookieParser())

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("DB Connected");
}).on('error',err=>{
    console.log("DB failed");
})

app.use('*', cloudinaryConfig);
app.use('/user',require("./routes/userRouter"))
app.use('/api',require("./routes/upload"))
app.use('/api',require("./routes/category"))
app.use('/api',require("./routes/product"))
app.use('/api',require("./routes/cart"))

const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log("Server Running on Port",PORT);
})