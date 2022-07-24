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

router.post('/', validateProject, async (req, res, next) => {
   try {
    const project = req.body
   const newProject = await Project.insert(project)
    res.json(newProject) 
   // if(newProject.project_completed === 0) {
    //     res.json({
    //         ...newProject,
    //         project_completed: newProject.project_completed = false
    //     })
    // } else {
    //     res.json({
    //         ...newProject,
    //         project_completed: newProject.project_completed = true
    //     })
    // }
   } catch (err) {
    next(err)
   }
     
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'Something is broken in PROJECT router KOHLTEN',
        message: err.message
    })
})

module.exports = router