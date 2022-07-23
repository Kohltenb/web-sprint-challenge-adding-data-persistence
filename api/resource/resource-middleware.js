const db = require('../../data/dbConfig')

const validateResource = async (req, res, next) => {
 try{
    const resourceName = await db('resources').where('resource_name', req.body.resource_name)
    if(db('resources').where('resource_name') === resourceName) {
        res.json({
            status: 400,
            message: 'this resource name already exists'
        })
    } else {
        next()
    }
 } catch (err) {
    next(err)
 }
}

module.exports = {
    validateResource,
}
