const { Model, STRING, DECIMAL } = require('sequelize')
const sequelize = require('../config')

class User extends Model { }

User.init({
  firstName: {
    type: STRING,
    allowNull: false,
  },
  lastName: {
    type: STRING,
    allowNull: false
  },
  employer: {
    type: STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'user' })

module.exports = User
