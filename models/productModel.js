const { text } = require('express')
const mongoose = require('mongoose')

const BusSchema = new mongoose.Schema({
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
    role: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default:""
    },
    companyName: {
        type: String,
        default:""
    },

    brand:{
        type: String,
        default:""
    },
    type:{
        type: String,
        default:""
    },
    category: {
        type: Number,
        default:""
    },
    price: {
        type: String,
        default:""
    },
    Description: {
        type: String,
        default:""
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('ProUser', BusSchema)