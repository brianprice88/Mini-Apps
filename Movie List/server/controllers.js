const models = require('../db/models.js')

const controllers = {

    get: (req, res) => (
        models.get()
            .then(data => res.status(200).send(data))
            .catch(err => res.status(400).send(err))
    ),

    post: (req, res) => (
        models.post(req.body.title)
            .then(() => res.status(201).send('title added'))
            .catch(err => res.status(401).send(err))
    ),

    delete: (req, res) => (
        models.delete(req.params.title)
            .then(() => res.status(203).send('title deleted'))
            .catch(err => res.status(403).send(err))
    )

}





module.exports = controllers;