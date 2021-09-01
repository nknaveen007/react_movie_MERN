const express = require('express')
const error = require('../middleware/error')
const users = require('../routes/Users')
const auth = require('../routes/auth')
const home  = require('../routes/home')
const cors = require('cors')
const path = require('path')

module.exports = (app) => {
    app.use(express.json());
    app.use(cors())
    app.use('/',home)
    app.use('/api/users', users)
    app.use('/api/auth', auth) 
    app.use(error)
    }