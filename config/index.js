const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.JAWSDB_URL)
module.exports = sequelize
