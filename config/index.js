const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:Starfish1@localhost:3306/something_db')

module.exports = sequelize
