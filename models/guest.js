const {Schema, model} = require('mongoose')


const profileSchema = new Schema({
    firstName: { type: String, require: true }, 
    lastName: { type: String, require: true }, 
    email: { type: String, require: true },
    dob: { type: Date, require: true }, 
    age: { type: String, require: true },  
    driverLicense: { type: String, require: true }, 
    reservations: 
        {
            type: mongoose.Schema.Types.ObjectId,           
            ref:'Reservation'
        }, 
})


const Profile = model('Profile', profileSchema)

module.exports= Profile