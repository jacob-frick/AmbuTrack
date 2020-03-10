const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SideBar = require('./components/sidebar.jsx')
const Profile = props => {
  return (
    <Html>
      <Navbar user={props.userData} current={props.current} />
      <SideBar user={props.userData}>
        

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Profile</h1>
            <hr/>
            <h5>Name:</h5>
            <h3>{`${props.userData.firstName} ${props.userData.lastName}`}</h3>
            <hr/>
            <h5>User Id:</h5>
            <h3>{props.userData.id}</h3>
            <hr/>
            <h5>Username:</h5>
            <h3>{props.userData.username}</h3>
            <hr/>
            <h5>Email:</h5>
            <h3>{props.userData.email}</h3>
            <hr/>
            <h5>Total Logs:</h5>
            <h3 id="totalLogs"></h3>
            
          </div>
        </div>
        <script defer src="/scripts/profile.js"></script>
      </SideBar>

      
    </Html>
  )
}

module.exports = Profile