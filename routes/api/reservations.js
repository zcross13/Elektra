const router = require('express').Router()
const reservationCrtl = require('../../controllers/api/reservations')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// api/reservations/:id
// Delete/ destroy bookmark

router.delete('/:id', checkToken, ensureLoggedIn, reservationCrtl.destroyReservation, reservationCrtl.respondWithReservation)

// api/reservations/:id
// Put /  update bookmark 
router.put('/:id', checkToken, ensureLoggedIn, reservationCrtl.updateReservation, reservationCrtl.respondWithReservation)

// api/reservations
// Post / create bookmark 
router.post('/', checkToken, ensureLoggedIn, reservationCrtl.createReservation, reservationCrtl.respondWithReservation)

module.exports = router 