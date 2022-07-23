// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resource => {
            res.json(resource)
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