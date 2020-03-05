const React = require('react')
const Html = require('./layouts/default.jsx')
const CreateAccount = props => {
  return (
    <Html>
      <div className="container outerContainer">
        <div className="row">
          <h1 className="display-4 headerAmbutrack">AMBUTRACK</h1>
          <div className="jumbotron col-md-12">
            <span className="gridContents">
              <h2>Create Account</h2>
              <img className="createAccountLifeStarImg" src="images/lifeStar.png"></img>
            </span>
            <form>
              <div className="form-group">
                <form>
                  <div className="row">
                    <div className="col">
                      <input id="firstName" type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col">
                      <input id="firstName" type="text" className="form-control" placeholder="Last Name" />
                    </div>
                  </div>
                </form>
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="userName">Username</label>
                <input type="text" className="form-control" id="userName" />
              </div>
              <div className="form-group">
                <label htmlFor="employer">Employer Name</label>
                <input type="text" className="form-control" id="employer" />
              </div>
              <button type="submit" className="btn blue-gradient ctrl-standard fx-bubbleDown" id="btnCreateUser">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <script src="../public/scripts/createUser.js"></script>
    </Html>
  )
}
module.exports = CreateAccount
