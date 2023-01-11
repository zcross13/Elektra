const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/teslas')
const {verifyAdmin } = require("../../utils/verifyToken")

// add routes
// Index /api/teslas/
router.get('/', dataController.index, apiController.index)
// Delete /api/teslas/:id
router.delete('/:id', verifyAdmin, dataController.destroy, apiController.show)
// Update /api/teslas/:id
router.put('/:id', verifyAdmin, dataController.update, apiController.show)
// Create /api/teslas/
router.post('/', verifyAdmin, dataController.create, apiController.show)
// Show /api/teslas/:id
router.get('/:id', dataController.show, apiController.show)


module.exports = router