const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/users')
const {verifyToken, verifyUser,verifyAdmin } = require("../../utils/verifyToken")



// router.get('/checktoken',verifyToken, (req,res,next) => {
//     res.send('hello user, you are logged on')
// })

// router.get('/checkuser/:id',verifyUser, (req,res,next) => {
//     res.send('hello user, you are logged in and you can delete your account')
// })

// router.get('/checkadmin/:id',verifyAdmin, (req,res,next) => {
//     res.send('hello Admin, you are logged in and you can delete all account')
// })
// Delete /api/users/:id
router.delete('/:id', verifyUser, dataController.destroy, apiController.show)
// Update /api/users/:id
router.put('/:id', verifyUser, dataController.update, apiController.show)
// Show /api/users/:id
router.get('/:id', verifyUser, dataController.show, apiController.show)
// GET ALL User
router.get('/', verifyAdmin, dataController.index, apiController.index )


module.exports = router