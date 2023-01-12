const jwt = require('jsonwebtoken')
const {createError} = require('./error')

const error = createError(401, "Your are not autheticated!")

const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token; 
    if(!token){
        return res.status(error.status).json({msg: error.message})
    }

    jwt.verify(token,process.env.SECRET, (err, user) =>{
        if(err) return res.status(error.status).json({msg: error.message})
        req.user = user
        next()
    })
    
}

const verifyUser = (req,res,next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            return res.status(error.status).json({msg: error.message})
        }
    })
}

const verifyAdmin = (req,res,next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next()
        }else{
            return next(createError(403, "You are not authorized!"))
        }
    })
}



module.exports = {verifyToken, verifyUser, verifyAdmin}