const Sequelize = require('sequelize');
const sequelize = new Sequelize('grocerylist', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

var Item = sequelize.define('groceries', {
 Item: Sequelize.STRING,
 Quantity: Sequelize.INTEGER
}, {
  timestamps: false
}
)

module.exports = Item;