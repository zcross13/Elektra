const mongoose = require('mongoose')
const {model } = require('mongoose')

const teslaSchema = new mongoose.Schema({
    model: { 
        type: String, 
        require: true 
    }, 
    pricePerDay: { 
        type: Number, 
        require: true 
    }, 
    images: { 
        type:[String], 
        require: true 
    }, 
    teslaDescription: {
        type: String, 
        required: true
    },
    teslaDetails: {
        type: String, 
        required: true
    },
    rating:{
        type:Number, 
        min:0, 
        max:5,
    }, 
    reservations:[{unavailableDates: {type: [Date]}}]
})


const Tesla= model('Tesla', teslaSchema)

module.exports= Tesla