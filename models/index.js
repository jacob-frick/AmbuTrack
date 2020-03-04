const Log = require('./Log.js')
const User = require('./User.js')

User.hasMany(Log)
Log.belongsTo(User)

module.exports = { Log, User }