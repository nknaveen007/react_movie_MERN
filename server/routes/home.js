const express = require('express')
const route = express()
const path = require('path')

route.use(express.static(path.join(__dirname,'../build')))

route.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../build','index.html'))
})

module.exports = route