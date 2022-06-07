require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname + "/public")))
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({useTempFiles:true}))

app.use('/user',require('./routes/userRoutes'))

app.use('/admin',require('./routes/proRoutes'),(req, res)=>{
    req.files.avatar
    return res.status(200).json({msg:"while"})
})


// Connect to mongodb

const URI = process.env.MONGODB_URL
mongoose.connect(URI,{
},err=>{
    if(err) throw err;
    console.log("Connected to mongoDB")
})


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('server is running on port', PORT)
})