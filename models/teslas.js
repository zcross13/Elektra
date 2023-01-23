const { Schema, model } = require('mongoose')

const teslaSchema = new Schema({
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
    features: {
        type: [String], 
        required: true
    },
    rating:{
        type:Number, 
        min:0, 
        max:5,
    }, 
})


module.exports = model('Tesla', teslaSchema)