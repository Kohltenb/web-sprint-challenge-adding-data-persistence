// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')
const { validateResource } = require('./resource-middleware')

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
})

router.post('/', validateResource, (req, res, next) => {
    const resource_name = req.body
    
    Resource.add(resource_name)
    .then(newResource => {
        res.status(200).json(newResource)
    })
    .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'Something is broken in RESOURCE router KOHLTEN',
        message: err.message
    })
})

module.exports = router