// build your `Project` model here
const db = require('../../data/dbConfig')

// const getProjects = () => {
//     return db('projects')
// }
function getProjects () {
    return db('projects')
}



module.exports = { getProjects }