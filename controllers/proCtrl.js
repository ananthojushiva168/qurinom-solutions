const ProUser = require('../models/productModel')
const express = require("express")
const fileUpload = require("express-fileupload")
// const Payments = require('../models/paymentModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//const client=require("twilio")(process.env.acountSID,process.env.authToken)


const app = express()

app.use(fileUpload({useTempFiles:true}))
//Filter, sorting and paginating

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
       const queryObj = {...this.queryString} //queryString = req.query

       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const productCtrl = {
    getProducts: async(req, res) =>{
        try {
            const features = new APIfeatures(ProUser.find(), req.query)
            .filtering().sorting().paginating()

            const products = await features.query

            res.json({
                status: 'success',
                result: products.length,
                products: products
            })
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createProduct: async(req, res) =>{
        try {
          
            const { avatar, companyName, email,  brand, type, category, price, Description} = req.body;
             if(!avatar)return res.status(400).json({msg: "No image upload"}) 
            const product = await ProUser.findByIdAndUpdate(req.ProUser.id, req.body)
            if(product)
                return res.status(400).json({msg: "This product already exists."})

            const newProduct = new ProUser({
                avatar, companyName, email,  brand, type, category, price, Description
            })
            
            await newProduct.save()
            res.json({msg: "Created a product"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteProduct: async(req, res) =>{
        try {
            await ProUser.findByIdAndDelete(req.params.id)
            res.json({msg: "Deleted a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateProduct: async(req, res) =>{
        try {
            const {avatar, brand, type, category, price, Description} = req.body;
            // if(!avatar) return res.status(400).json({msg: "No image upload"})

            await ProUser.findOneAndUpdate({_id: req.params.id}, {
                avatar, brand, type, category, price, Description
            })

            res.json({msg: "Updated a Product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    register: async (req, res) =>{
        try {
            console.log(req.body)
            const {name, email, role, password} = req.body;

            const user = await ProUser.findOne({email})
            if(user) return res.status(400).json({msg: "The email already exists."})

            if(password.length < 6) 
                return res.status(400).json({msg: "Password is at least 6 characters long."})

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new ProUser({
                name, email, role, password: passwordHash
            })

            // Save mongodb
            await newUser.save(function(err) {
                if (err) {
                    console.log(error);
                } else {
                   return res.json({msg:"register success"})
                }
            })
              //res.json({msg:"Register Success!"})

           //Then create jsonwebtoken to authentication
           
            // const accesstoken = createAccessToken({id: newUser._id})
            // const refreshtoken = createRefreshToken({id: newUser._id})

            // res.cookie('refreshtoken', refreshtoken, {
            //     httpOnly: true,
            //     path: '/user/refresh_token',
            //     maxAge: 7*24*60*60*1000 // 7d
            // })

            // res.json({accesstoken})

         } catch (err) {
            
             return  res.status(500).json({message: err.message})
         }
    },
    login: async (req, res) =>{
        try {
            const {email, password} = req.body;
            const user = await ProUser.findOne({email})
            if(!user) return res.status(400).json({msg: "User does not exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Incorrect password."})

            // If login success , create access token and refresh token
            const accesstoken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})
            const userrole = await ProUser.findById(user._id).select('role')
            const val = userrole.role;
            res.cookie("accessToken", accesstoken, {
                httpOnly: true,
                path:'/user/access_token',
                maxAge: 7*24*60*60*1000 // 7d 
            })

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            })

            res.json({accesstoken,val})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}
const createRefreshToken = (user) =>{
   return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = productCtrl