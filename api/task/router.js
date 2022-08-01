// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')
const { validateTask } = require('./task-middleware')

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(Task => {
            res.json(Task)
        })
        .catch(next)
})

router.post('/', validateTask, (req, res, next) => {
    const td  = req.body

    Task.add(td)
    .then(newTask => {
        res.status(200).json(newTask[0])
    })
    .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'Something is broken in TASK router KOHLTEN',
        message: err.message
    })
})

module.exports = router