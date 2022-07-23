const projects = [
    { project_name: 'sprint test', project_description: 'foobar', project_completed: false},
    { project_name: 'sprint foo', project_description: 'foo foo', project_completed: false},
    { project_name: 'sprint bar', project_description: 'bar bar', project_completed: false},
    { project_name: 'sprint baz', project_description: 'baz baz', project_completed: false}
]

const resources = [
    {resource_name: 'yoda', resource_description: 'jedi council green guy leader'},
    {resource_name: 'Mace Windu', resource_description: 'only guy with purple lightsaber'},
]

const tasks = [
    {task_description: 'fight the sith', task_notes: 'use the force', task_completed: true, project_id: 1},
    {task_description: 'kick butt', task_notes: 'with lightsabers', task_completed: true, project_id: 3},
    {task_description: 'take names', task_notes: 'lots of names', task_completed: true, project_id: 4},
    {task_description: 'eat ice cream', task_notes: 'vanilla is best', task_completed: true, project_id: 2},
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
}