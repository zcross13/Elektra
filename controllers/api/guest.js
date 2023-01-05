const Guest = require("../../models/guest")

const dataController = {
    // Index,
    index(req, res, next) {
        Profiles.find({}, (err, allProfiles) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.profiles = allProfiles 
                next()
            }
        })
    },
    // Destroy
    destroy(req, res, next) {
        Profiles.findByIdAndDelete(req.params.id, (err, deletedProfiles) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.profile = deletedProfiles
                next()
            }
        })
    },
    // Update
    update(req, res, next) {
        Profiles.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProfiles) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.profiles = updatedProfiles
                next()
            }
        })
    },
    // Create
    create(req, res, next) {
        Profiles.create(req.body, (err, createdProfiles) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.profile = createdProfiles
                next()
            }
        })
    },
    // Edit
    // Show
    show(req, res, next) {
        Profiles.findById(req.params.id, (err, foundProfiles) => {
            if (err) {
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a reservation with that ID'
                })
            } else {
                res.locals.data.profiles = foundProfiles
                next()
            }
        })
    }
}

const apiController = {
    index(req, res, next) {
        res.json(res.locals.data.profiles)
    },
    show(req, res, next) {
        res.json(res.locals.data.profile)
    }
}

module.exports = { dataController, apiController }