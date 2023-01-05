const {Schema, model } = require('mongoose')


const teslaSchema = new Schema({
    make: { type: String, require: true }, 
    model: { type: String, require: true }, 
    price: { type: String, require: true }, 
    images: { type: String, require: true }, 
    year: { type: String, require: true }, 
    miles: { type: String, require: true }, 
    fuelEconomy: { type: String, require: true }, 
    color: { type: String, require: true }, 
    drivetrain:{ type: String, require: true }, 
    engine: { type: String, require: true }, 
    vin:{ type: String, require: true }, 
    stockNumber: { type: String, require: true }, 
})


const Tesla= model('Tesla', teslaSchema)

module.exports= Tesla