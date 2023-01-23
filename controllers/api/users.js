require('dotenv').config()

const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const signUp = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.locals.data.user = user
        res.locals.data.token = token
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email }).populate()
        if (!user) throw new Error('user not found, email was invalid')
        const password = crypto.createHmac('sha256', process.env.SECRET).update(req.body.password).digest('hex').split('').reverse().join('')
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error('Password did not match')
        res.locals.data.user = user
        res.locals.data.token = createJWT(user)
        next()
    } catch(error){
        res.status(400).json({ msg: error.message})
    }
}

const getReservationsByUser = async(req, res, next) => {
    try{
        const user = await User.findOne({ email: res.locals.data.email })
        const reservation = user.reservations
        res.locals.data.reservations = reservation
        next()
    }catch(error){
        res.status(400).json({ msg: error.message })
    }
}

const respondWithToken = (req, res) => {
    res.json(res.locals.data.token)
}

const respondWithUser = (req, res) => {
    res.json(res.locals.data.user)
}

const respondWithReservations = (req, res) => {
    res.json(res.locals.data.reservations)
}

function createJWT(user){
    return jwt.sign({ user }, process.env.SECRET, {expiresIn:'48h', allowInsecureKeySizes:true})
}

module.exports =  {
    signUp, 
    login, 
    getReservationsByUser, 
    respondWithToken, 
    respondWithReservations,
    respondWithUser
}