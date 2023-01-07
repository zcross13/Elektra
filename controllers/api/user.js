const Users = require("../../models/user")

const dataController = {
    // Index,
    index(req, res, next) {
        Users.find({}, (err, allUsers) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.users = allUsers
                next()
            }
        })
    },
    // Destroy
    destroy(req, res, next) {
        Users.findByIdAndDelete(req.params.id, (err, deletedUser) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.user = deletedUser
                next()
            }
        })
    },
    // Update
    update(req, res, next) {
        Users.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.users = updatedUser
                next()
            }
        })
    },
    // Create
    create(req, res, next) {
        Users.create(req.body, (err, createdUser) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.user = createdUser
                next()
            }
        })
    },
    // Edit
    // Show
    show(req, res, next) {
        Users.findById(req.params.id, (err, foundUser) => {
            if (err) {
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a user with that ID'
                })
            } else {
                res.locals.data.user = foundUser
                next()
            }
        })
    }
}

const apiController = {
    index(req, res, next) {
        res.json(res.locals.data.users)
    },
    show(req, res, next) {
        res.json(res.locals.data.user)
    }
}

module.exports = { dataController, apiController }