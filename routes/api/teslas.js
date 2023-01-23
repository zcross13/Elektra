const router = require('express').Router()
const {dataController, apiController} = require('../../controllers/api/teslas')



// api/tesla
// Index
router.get('/', dataController.index, apiController.index)

// api/tesla
router.post('/', dataController.create, apiController.show)

// api/tesla/:id
// Show

router.get('/:id', dataController.show, apiController.show)

module.exports = router 
