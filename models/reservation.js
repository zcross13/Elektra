const {Schema, model} = require('mongoose')

const reservationSchema = new Schema({
    pickupDate: { 
        type: Date, 
        require: true 
    }, 
    returnDate: {
        type: Date, 
        require: true
    }, 
    pickupLocation:{
        type: String, 
        require: true, 
    }, 
    returnLocation: {
        type:String
    },
    totalPrice: {
        type: String, 
        require: true 
    }, 
    tesla: {type: Schema.Types.ObjectId, ref: 'Tesla' }
})


module.exports = model('Reservation', reservationSchema)