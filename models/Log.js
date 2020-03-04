const {Model, STRING, INTEGER} = require('sequelize')
const sequelize = require('./../config')

class Log extends Model{}

Log.init({
    date: {
        type: STRING,
        allowNull: false 
    },
    holdWall: {
        type: INTEGER,
        allowNull: false
    },
    bls: {
        type: INTEGER,
        allowNull: false
    },
    als: {
        type: INTEGER,
        allowNull: false
    },
    calls: {
        type: INTEGER,
        allowNull: false
    },
    cancels: {
        type: INTEGER,
        allowNull: false
    }
}, {sequelize, modelName:'log'})

module.exports = Log