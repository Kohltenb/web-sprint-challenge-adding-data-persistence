// build your `/api/projects` router here
const router = require('express').Router()
const { validateProject } = require('./project-middleware')
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(project => {
            res.json(project)
        })
        .catch(next)
})

router.post('/', validateProject, (req, res, next) => {
    const newProject = req.body
    Project.add(newProject)
    .then(newProject => {
        res.status(200).json(newProject)
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