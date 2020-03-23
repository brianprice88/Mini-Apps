const Item = require('./index.js');

var models = {

  create: function (item, quantity, callback) {
    Item.create({ Item: item, Quantity: quantity })
      .then((data => callback(null, data)
      ))
  },

  read: function (callback) {
    Item.findAll()
      .then(data => (
        callback(null, data)
      ))
      .catch(err => (
        console.error(err)
      ))
  },

  update: function (item, quantity, callback) {
    Item.update({
      Quantity: quantity
    }, {
      where: {
        Item: item
      }
    })
      .then(data => (
        callback(null, data)
      )
      )
  },

  delete: function (item, callback) {
    Item.destroy({
      where: {
        Item: item
      }
    })
      .then(data => (
        callback(null, data)
      ))
  }
}

module.exports = models;
