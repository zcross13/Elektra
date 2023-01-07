const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/users')

// add routes
// Index /api/teslas/
router.get('/', dataController.index, apiController.index)
// Delete /api/teslas/:id
router.delete('/:id', dataController.destroy, apiController.show)
// Update /api/teslas/:id
router.put('/:id', dataController.update, apiController.show)
// Create /api/teslas/
router.post('/', dataController.create, apiController.show)
// Show /api/teslas/:id
router.get('/:id', dataController.show, apiController.show)


module.exports = router