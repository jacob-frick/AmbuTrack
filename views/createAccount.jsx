const React = require('react')
const Html = require('./layouts/default.jsx')
const CreateAccount = props => {
  return (
    <Html>
      <div className="container outerContainer">
        <div className="row">
          <img className="ambutrackHeaderLogo" src="images/customLogoOne.png"></img>
          <div className="jumbotron col-md-12">
            <span className="gridContents">
            </span>
            <form>
              <div className="form-group">
                <form>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="firstName">First Name</label>
                      <input id="firstName" type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col">
                      <label htmlFor="lastName">Last Name</label>
                      <input id="lastName" type="text" className="form-control" placeholder="Last Name" />
                    </div>
                  </div>
                </form>
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We will share your email with everyone we can!!</small>
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" />
              </div>
              <div className="form-group">
                <label htmlFor="employer">Employer Name</label>
                <input type="text" className="form-control" id="employer" />
              </div>
              <a href="/"><button type="submit" className="btn btn-hover blue-gradient" id="btnCreateUser">Submit</button></a>
            </form>
          </div>
        </div>
      </div>
      <script src="./scripts/createUser.js"></script>
    </Html>

  )
}
module.exports = CreateAccount
