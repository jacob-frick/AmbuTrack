const React = require('react')
const Html = require('./layouts/default.jsx')

const CreateAccount = props => {
  return (
    <Html>
      <h1 className="display-4 accountCreateTitle">AMBUTRACK</h1>
      <div className="container outerContainer">
        <div className="row">
          <div className="jumbotron col-md-12">
            <h1>Create Account</h1>
            <span className="gridContents">
              <img className="loginLifeStarImg" src="images/lifeStar.png"></img>
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
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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