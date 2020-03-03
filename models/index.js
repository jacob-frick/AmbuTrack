const User = require('./Log.js')
const Post = require('./User.js')

// User.hasMany(Post)
// Post.belongsTo(User)

module.exports = { Log, User }