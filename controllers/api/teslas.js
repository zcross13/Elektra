const Teslas = require('../../models/tesla')

const dataController = {
    // Index,
    index(req, res, next) {
        Teslas.find({}, (err, allTeslas) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.teslas = allTeslas
                next()
            }
        })
    },
    // Destroy
    destroy(req, res, next) {
        Teslas.findByIdAndDelete(req.params.id, (err, deletedTesla) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.tesla = deletedTesla
                next()
            }
        })
    },
    // Update
    update(req, res, next) {
        Teslas.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.tesla = updatedTesla
                next()
            }
        })
    },
    // Create
    create(req, res, next) {
        Teslas.create(req.body, (err, createdTesla) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.tesla = createdTesla
                next()
            }
        })
    },
    // Edit
    // Show
    show(req, res, next) {
        Teslas.findById(req.params.id, (err, foundTesla) => {
            if (err) {
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a Tesla with that ID'
                })
            } else {
                res.locals.data.tesla = foundTesla
                next()
            }
        })
    }
}

const apiController = {
    index(req, res, next) {
        res.json(res.locals.data.teslas)
    },
    show(req, res, next) {
        res.json(res.locals.data.tesla)
    }
}

module.exports = { dataController, apiController }