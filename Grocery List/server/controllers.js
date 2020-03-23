const models = require('../db/models.js')

var controllers = {
  create: function (req, res) {
    models.create(req.body.params[0], req.body.params[1], function (err, data) {
      if (err) { res.status(400) }
      else { res.status(200).send() }
    })
  },

  read: function (req, res) {
    models.read((err, data) => {
      if (err) { res.status(400) }
      else { res.status(200).json(data) }
    })
  },

  update: function (req, res) {
    models.update(req.body.params[0], req.body.params[1], function (err, data) {
      if (err) { res.status(400) }
      else { res.status(200).send() }
    })
  },

  delete: function (req, res) {
    models.delete(req.query['0'], function (err, data) {
      if (err) { res.status(400) }
      else { res.status(200).send() }
    })
  }

}




module.exports = controllers;