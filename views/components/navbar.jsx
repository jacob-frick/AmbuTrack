const React = require('react')
const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark flex-md-nowrap">
      <a className="navbar-brand" href="#">{props.user.firstName + ' ' + props.user.lastName}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav d-sm-none">
          <li className="nav-item active">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Create Log</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
module.exports = Navbar