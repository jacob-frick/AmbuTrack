const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SideBar = require('./components/sidebar.jsx')
const Profile = props => {
  return (
    <Html>
      <Navbar user={props.userData} />
      <SideBar user={props.userData}>
        

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Profile</h1>
            <hr/>
            <h3>User name: {`${props.userData.firstName} ${props.userData.lastName}`}</h3>
            <h3>User Id: {props.userData.id}</h3>
            <h3>Username: {props.userData.username}</h3>
            <h3>Email: {props.userData.email}</h3>
            {/* <h3>Total logs: {props.}</h3> */}
          </div>
        </div>
      </SideBar>


    </Html>
  )
}

module.exports = Profile