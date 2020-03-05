const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')

const Profile = props => {
  return (
    <Html>
      <Navbar uid={props.id} />
      <h1>Profile</h1>
      <h3>User Id: {props.uid}</h3>
      <h3>User Name: {props.username}</h3>
    </Html>
  )
}

module.exports = Profile