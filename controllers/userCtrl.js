const Users = require('../models/userModel')
// const Payments = require('../models/paymentModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//const client=require("twilio")(process.env.acountSID,process.env.authToken)



const userCtrl = {
   register: async (req, res) =>{
        try {
            console.log(req.body)
            const {name, email, role, password} = req.body;

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg: "The email already exists."})

            if(password.length < 6) 
                return res.status(400).json({msg: "Password is at least 6 characters long."})

            // Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({
                name, email, role, password: passwordHash
            })

            // Save mongodb
            await newUser.save(function(err) {
                if (err) {
                    console.log(error);
                } else {
                   return res.json({msg:"rul no.1 register success"})
                }
            })
              //res.status(201).json({msg:"Register Success!"})

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
            const user = await Users.findOne({email})
            if(!user) return res.status(400).json({msg: "User does not exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Incorrect password."})

            // If login success , create access token and refresh token
            const accesstoken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})
            const userrole = await Users.findById(user._id).select('role')
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
    logout: async (req, res) =>{
        try {
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: "Logged out"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    refreshToken: (req, res) =>{
        try {
            const rf_token = req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
                if(err) return res.status(400).json({msg: "Please Login or Register"})

                const accesstoken = createAccessToken({id: user.id})

                res.json({accesstoken})
                
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    getUser: async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    /*getOTP: async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id).select('phone')
            if(!user) return res.status(400).json({msg: "User does not exist."})
            console.log(user.phone)
            if (user.phone) {
                client
                .verify
                .services(process.env.serviceID)
                .verificationChecks
                .create({
                    to: `+${user.phone}`,
                    channel: 'sms' 
                })
                .then(data => {
                    res.status(200).send({
                        message: "Verification is sent!!",
                        phonenumber: user.phone,
                        data
                    })
                }) 
             } else {
                res.status(400).send({
                    message: "Wrong phone number :(",
                    phonenumber: user.phone,
                    data
                })
             }
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },*/






    About: async (req,res) =>{
        try{
            const user = await Users.findById(req.user.id)
            if(!user) return res.status(400).json({msg: "User does not exist."})

            await Users.findOneAndUpdate({_id: req.user.id}, {
                about: req.body.about,
                profile:req.body.profile
            })

            return res.json({msg: "Added to cart"})


        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    complete: async (req,res) =>{
        try{
            const user = await Users.findById(req.user.id)
            if(!user) return res.status(400).json({msg: "User does not exist."})

            await Users.findOneAndUpdate({_id: req.user.id}, {
                phone: req.body.phone,
                address:req.body.address,
                country:req.body.country
            })

            return res.json({msg: "Completed"})


        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    addSaved: async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id)
            if(!user) return res.status(400).json({msg: "User does not exist."})

            await Users.findOneAndUpdate({_id: req.user.id}, {
                cart: req.body.cart
            })

            return res.json({msg: "Added to cart"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
//     history: async(req, res) =>{
//         try {
//             const history = await Payments.find({user_id: req.user.id})

//             res.json(history)
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     }
//  }

}
const createAccessToken = (user) =>{
     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
 }
const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}


module.exports = userCtrl