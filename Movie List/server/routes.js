const express = require('express')
const router = express.Router();
const controllers = require('./controllers.js')

router.route('/movies')
  .get(controllers.get)
  .post(controllers.post)

router.route('/movies/:title')
  .delete(controllers.delete)

module.exports = router;