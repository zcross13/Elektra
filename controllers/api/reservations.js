const Reservations = require('../../models/reservation')
const Tesla = require('../../models/tesla')


const dataController = {
    // Index,
    index(req, res, next) {
        Reservations.find({}, (err, allReservations) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.reservations = allReservations
                next()
            }
        })
    },
    // Destroy
    destroy(req, res, next) {
        Reservations.findByIdAndDelete(req.params.id, (err, deletedReservation) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.reservation = deletedReservation
                next()
            }
        })
    },
    // Update
    update(req, res, next) {
        Reservations.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedReservation) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.reservation = updatedReservation
                next()
            }
        })
    },
    // Create
    create(req, res, next) {
        Reservations.create(req.body, (err, createdReservation) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.reservation = createdReservation
                next()
            }
        })
    },
    // Edit
    // Show
    show(req, res, next) {
        Reservations.findById(req.params.id, (err, foundReservation) => {
            if (err) {
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a reservation with that ID'
                })
            } else {
                res.locals.data.reservation = foundReservation
                next()
            }
        })
    }
}

const apiController = {
    index(req, res, next) {
        res.json(res.locals.data.reservations)
    },
    show(req, res, next) {
        res.json(res.locals.data.reservation)
    }
}

module.exports = { dataController, apiController }