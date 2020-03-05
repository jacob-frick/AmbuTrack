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
<<<<<<< HEAD
                <label htmlFor="accountCreateEmail">Email Address</label>
                <input type="email" className="form-control" id="accountCreateEmail" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We will share your email with anyone else.</small>
=======
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
>>>>>>> a91310ed795380728aa926de5c06973e496b06ac
              </div>
              <div className="form-group">
                <label htmlFor="userName">Username</label>
                <input type="text" className="form-control" id="userName" />
              </div>
              <div className="form-group">
                <label htmlFor="employer">Employer Name</label>
                <input type="text" className="form-control" id="employer" />
              </div>
<<<<<<< HEAD
              <button type="submit" className="btn blue-gradient ctrl-standard fx-bubbleDown " id="createUser">Submit</button>
=======
              <button type="submit" className="btn blue-gradient ctrl-standard fx-bubbleDown" id="btnCreateUser">Submit</button>
>>>>>>> a91310ed795380728aa926de5c06973e496b06ac
            </form>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <script src="./scripts/createUser.js"></script>
=======
      <script src="../public/scripts/createUser.js"></script>
>>>>>>> a91310ed795380728aa926de5c06973e496b06ac
    </Html>
    
  )
}
module.exports = CreateAccount
