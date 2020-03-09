const React = require('react')
const Login = () => {
  return (
    <div className="container outerContainer">
      <div className="row">
        <img className="ambutrackHeaderLogo" src="images/customLogoOne.png"></img>
        <div className="splashJumbotron col-md-12">
          <span className="gridContents"></span>
          <p id="message" className="lead loginLeadMessage">The Complete EMT Critical Data Log</p>
          <p className="loginSecondaryMessage">Login to View Dashboard</p>
          <br />
          <div id="logErrorMessage" className="errorMsg"></div>
          <hr className="my-4"></hr>
          <form>
            <div className="form-group loginInputWidth">
              <label htmlFor='username'>Username</label>
              <input type="text" className="row col form-control loginInputWidth" id="userName"></input>
              <label htmlFor='email'>Email Address</label>
              <input type="email" className="row col form-control loginInputWidth" id="email"></input>
              <button id="signIn" type="button" className="btn btn-hover blue-gradient loginBtn">Sign In</button>
              <a href="/createAccount"><button id="goToCreateUserView" type="button" className="btn btn-hover peach-gradient float-right loginCreateAcctBtn">Create Account</button></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
module.exports = Login