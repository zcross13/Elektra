require('dotenv').config();
require('./config/database')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/teslas', require('./routes/api/teslas'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/reservations', require('./routes/api/reservations'))

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}`)
})