const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/reservations')

// add routes
// Index /api/reservations
router.get('/', dataController.index, apiController.index)
// Delete /api/reservations/:id
router.delete('/:id', dataController.destroy, apiController.show)
// Update /api/reservations/:id
router.put('/:id', dataController.update, apiController.show)
// Create /api/reservations
router.post('/', dataController.create, apiController.show)
// Show /api/reservations/:id
router.get('/:id', dataController.show, apiController.show)


module.exports = router