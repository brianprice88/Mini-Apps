const controllers = require('./controllers.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  controllers.read(req, res);
})

router.post('/', (req, res) => {
  controllers.create(req, res);
})

router.put('/', (req, res) => {
  controllers.update(req, res);
})

router.delete('/', (req, res) => {
  controllers.delete(req, res);
})

module.exports = router