// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getAll()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'Something is broken in PROJECT router KOHLTEN',
        message: err.message
    })
})

module.exports = router