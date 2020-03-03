const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DB_CON_STRING)
module.exports = sequelize
