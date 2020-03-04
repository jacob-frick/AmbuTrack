const React = require('react')
const Html = require('./layouts/default.jsx')

const Profile = props => {
    return (
      <Html>
        <h1>Profile</h1>
        <h3>Userid: {props.uid}</h3>
      </Html>
    )
  }
  
module.exports = Profile