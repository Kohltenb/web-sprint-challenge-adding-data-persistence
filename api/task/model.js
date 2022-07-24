// build your `Task` model here
const db = require('../../data/dbConfig')


function getTasks () {
    return db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select('project_name', 'project_description','task_notes', 'task_description', 'task_completed')
    .then((tasks) => 
    tasks.map((task) => ({
        ...task,
        task_completed: task.task_completed ? true : false,
    }))
    )
}

function add(task) {
    return db('tasks').insert(task, 'task_id')
    .then(([task_id]) => db('tasks').where({ task_id }))
    .then((tasks) => 
   tasks.map((task) => ({
       ...task,
       task_completed: task.task_completed ? true : false,
   }))
   )
}

module.exports = { getTasks, add }