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
                      <input id="accountCreateFirstName" type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col">
                      <input id="accountCreateLastName" type="text" className="form-control" placeholder="Last Name" />
                    </div>
                  </div>
                </form>
                <label htmlFor="accountCreateEmail">Email Address</label>
                <input type="email" className="form-control" id="accountCreateEmail" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We will share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="accountCreateUserName">Username</label>
                <input type="Username" className="form-control" id="accountCreateUserName" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Html>
  )
}
module.exports = CreateAccount
