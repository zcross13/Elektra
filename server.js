require('dotenv').config();
require('./config/database')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const authRoute = require('./routes/api/auth')
const teslasRoute = require('./routes/api/teslas')
const usersRoute = require('./routes/api/users')
const cookieParser = require('cookie-parser')


const app = express()

app.use(cookieParser())
app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))
app.use(require('./config/checkToken'))



app.use('/api/users', usersRoute)
app.use('/api/teslas', teslasRoute)
app.use('/api/auth', authRoute)

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false, 
        status: errorStatus,
        message:errorMessage, 
        stack: err.stack, 
    })
})

/*
app.use('/api', routes) <====== Finish code once you got it
*/



app.get('/api/test', (req, res) => {
    res.json({'eureka': 'you have found it'})
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}`)
})