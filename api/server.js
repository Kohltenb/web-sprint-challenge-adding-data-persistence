// build your server here and require it from index.js
const express = require('express')
const ProjectRouter = require('./project/router')
const server = express()

server.use(express.json()) //below this line or cannot parce!!!

server.use('/api/projects', ProjectRouter)

server.use('*', (req, res) => {
    res.json({
        message: 'BROKEN KOHLTEN SERVER.JS'
    })
})

module.exports = server