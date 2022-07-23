// build your `Project` model here
const db = require('../../data/dbConfig')

// const getProjects = () => {
//     return db('projects')
// }
function getProjects () {
    return db('projects')
    .select('project_name', 'project_description', 'project_completed')
}

function add(project) {
    return db('projects').insert(project)
    .then(([project_id]) => {
        return db('projects').where('project_id', project_id).first()
    })
}

module.exports = { getProjects, add }