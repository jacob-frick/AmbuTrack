const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SideBar = require('./components/sidebar.jsx')
const Profile = props => {
  return (
    <Html>
      <Navbar user={props.userData} current={props.current} />
      <SideBar user={props.userData}>
        <div className="row">
          <div className="h2 col-12">User details:</div>
          <div className="h4 col-12">{`First Name: ${props.userData.firstName}`}</div>
          <div className="h4 col-12">{`Last Name: ${props.userData.lastName}`}</div>
          <div className="h4 col-12">{`Employer: ${props.userData.employer}`}</div>
          <div className="h4 col-12">{`Email: ${props.userData.email}`}</div>
          <div className="h4 col-12">{`Username: ${props.userData.username}`}</div>
        </div>
      </SideBar>


    </Html>
  )
}

module.exports = Profile