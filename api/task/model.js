// build your `Task` model here
const db = require('../../data/dbConfig')


function getTasks () {
    return db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select('project_name', 'project_description','task_notes', 'task_description', 'task_completed')
}

function add(task) {
    return db('tasks').insert(task)
    .then(([task_id]) => {
        return db('tasks').where('task_id', task_id).first()
    })
}

module.exports = { getTasks, add }