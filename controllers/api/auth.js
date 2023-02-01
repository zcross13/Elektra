const User = require('../../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
        })

        await newUser.save()
        res.status(200).send('User has been created')
    } catch (err) {
        next(err)
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return next(createError(404, "User not found"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, 'Wrong Password or username'))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET)

        const { password, isAdmin, ...otherDetails } = user._doc
        res.cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json({ ...otherDetails })

    } catch (err) {
        next(err)
    }
}

module.exports = { register, login }


// // /controllers/api/users.js

// const User = require('../../models/user')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')


// const checkToken = (req, res) => {
//   console.log('req.user', req.user)
//   res.json(req.exp)
// }

// const dataController = {
//   async create (req, res, next) {
//     try {
//       const user = await User.create(req.body)
//       // token will be a string
//       const token = createJWT(user)
//       // send back the token as a string
//       // which we need to account for
//       // in the client
//       res.locals.data.user = user
//       res.locals.data.token = token
//       next()
//     } catch (e) {
//       res.status(400).json(e)
//     }
//   },
//   async login (req, res, next) {
//     try {
//       const user = await User.findOne({ email: req.body.email })
//       if (!user) throw new Error()
//       const match = await bcrypt.compare(req.body.password, user.password)
//       if (!match) throw new Error()
//       res.locals.data.user = user
//       res.locals.data.token = createJWT(user)
//       next()
//     } catch{
//       res.status(400).json('Bad Credentials')
//     }
//   }
// }

// const apiController = {
//   auth (req, res) {
//     res.json(res.locals.data.token)
//   }
// }

// module.exports = {
//   checkToken,
//   dataController,
//   apiController
// }

// /* -- Helper Functions -- */

// function createJWT (user) {
//   return jwt.sign(
//     // data payload
//     { id:user._id, isAdmin: user.isAdmin },
//     process.env.SECRET,
//     { expiresIn: '24h' }
//   )
// }