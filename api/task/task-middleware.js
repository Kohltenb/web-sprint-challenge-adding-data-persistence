const db = require('../../data/dbConfig')

const validateTask = async (err, req, res, next) => {
    try {
        const td = req.body
        const validProjId = db('projects').where('project_id', td.project_id)
        if(td.task_description === undefined || td.project_id === undefined || td.project_id !== validProjId) {
            res.json({
                status: 400,
                CustomMessage: 'please provide all required fields',
                message: err.message
            })
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    validateTask,
}