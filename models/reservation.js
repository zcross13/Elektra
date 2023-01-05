const {Schema, model } = require('mongoose')

const reservationSchema = new Schema({
    tesla: 
        {
            type: Schema.Types.ObjectId,           
            ref:'Tesla', 
            required: true
        }, 
    pickupDate: 
        {
            type: Date,
            required: true
        } ,
    returnDate: {type: Date,required: true}, 
    firstName: { type: String, require: true }, 
    lastName: { type: String, require: true }, 
    email: { type: String, require: true },
    dob: { type: Date, require: true }, 
    age: { type: String, require: true },  
    driverLicense: { type: String, require: true }, 
})


const Reservation = model('Reservation', reservationSchema)

module.exports= Reservation



