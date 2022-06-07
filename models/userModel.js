const { text } = require('express')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        default:""
    },
    address:{
        type: String,
        default:""
    },
    about:{
        type: String,
        default:""
    },
    profile:{
        type: String,
        default:""

    },
    role: {
        type: Number,
        default: 0
    },
    country:{
        type: String,
        default: ""

    },
    saved: {
        type: Array,
        default: []
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)