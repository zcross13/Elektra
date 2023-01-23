require('dotenv').config()
const Reservation = require('../../models/reservation')
const User = require('../../models/user')

const destroyReservation = async (req, res, next) => {
    try {
        const deletedReservation = await Reservation.findByIdAndDelete(req.params.id)
        res.locals.data.reservation = deletedReservation
        next()
    } catch(error){
        res.status(400).json({ msg: error.message})
    }
}

const updateReservation = async (req, res, next ) => {
    try{
        const updatedReservation = await Reservation.findByIdAndUpdate(req.parms.id, req.body, {new:true})
        res.locals.data.reservation = updatedReservation
        next()
    }catch(error){
        res.status(400).json({ msg: error.message})
    }
}

const createReservation = async (req, res, next) => {
    try{
        const createdReservation = await Reservation.create(req.body)
        const user = await User.findOne({ email: res.locals.data.email})
        user.reservations.addToSet(createdReservation)
        await user.save()
        res.locals.data.reservation = createdReservation
        next()
    }catch(error){
        res.status(400).json({msg: error.message})
    }
}

const respondWithReservation = (req, res) => {
    res.json(res.locals.data.reservation)
}

module.exports = {
    destroyReservation, 
    updateReservation,
    createReservation, 
    respondWithReservation
}