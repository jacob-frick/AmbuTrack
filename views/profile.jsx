const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SideBar = require('./components/sidebar.jsx')
const Profile = props => {
  return (
    <Html>
      <Navbar user={props.userData} />
      <SideBar user={props.userData}>
        <h1>Profile</h1>
        <h3>User Id: {props.userData.id}</h3>
        <h3>User Name: {props.userData.username}</h3>
      </SideBar>

    </Html>
  )
}

module.exports = Profile