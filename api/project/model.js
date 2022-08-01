// build your `Project` model here
const db = require('../../data/dbConfig')

// const getProjects = () => {
//     return db('projects')
// }
function getProjects() {
    return db('projects')
        .then((projects) =>
            projects.map((proj) => ({
                ...proj,
                project_completed: proj.project_completed ? true : false,
            }))
        )
}

function insert(project) {
   return db('projects').insert(project, 'project_id')
        .then(([project_id]) => db('projects').where({ project_id }))
        .then((projects) =>
            projects.map((proj) => ({
                project_completed: proj.project_completed ? true : false,
                project_description: proj.project_description,
                project_name: proj.project_name
            }))
            
        )
}

// .then((projects) => 
// projects.reduce((acc, proj) => ({
//     ...proj,
//     project_completed: proj.project_completed ? true : false,
// }), {})
// )



// .then((projects) => 
//     projects.map((proj) => ({
//         ...proj,
//         project_completed: proj.project_completed ? true : false,
//     }))
//     )

module.exports = { getProjects, insert }