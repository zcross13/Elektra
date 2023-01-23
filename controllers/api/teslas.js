const Teslas = require("../../models/teslas")

const dataController = {
    // Index,
    index(req, res, next) {
        Teslas.find({}, (err, allTeslas) => {
            if (err) {
                next(err)
            } else {
                res.locals.data.teslas = allTeslas
                next()
            }
        })
    },
    // getMintoMax(req, res, next){
    //     Teslas.find({ $and: [{pricePerDay:{$lte: req.query.max}},{pricePerDay:{$gte: req.query.min }}]}, (err, allTeslas) => {
    //         if(err){
    //             next(err)
    //         }else{
    //             res.locals.data.teslas = allTeslas
    //             next()
    //         }
    //     })
    // },
    // Destroy
    destroy(req, res, next) {
        Teslas.findByIdAndDelete(req.params.id, (err, deletedTesla) => {
            if (err) {
                next(err)
            } else {
                res.status(200).json('hotel has been deleted')
                next()
            }
        }) 
    },
    // Update
    update(req, res, next) {
        Teslas.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTesla) => {
            if (err) {
                next(err)
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
                next(err)
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
                next(err)
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