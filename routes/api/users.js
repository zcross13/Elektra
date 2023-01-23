const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// api/users
// Signup
router.post('/', userCtrl.signUp, userCtrl.respondWithToken)

// api/users/login
// Login 
router.post('/login', userCtrl.login, userCtrl.respondWithToken)

// api/users/reservations
router.get('/reservations', checkToken, ensureLoggedIn, userCtrl.getReservationsByUser, userCtrl.respondWithReservations)

module.exports = router 