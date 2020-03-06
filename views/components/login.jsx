const React = require('react')
const Login = () => {
  return (
    <div className="container outerContainer">
      <div className="row">
        <h1 className="display-4 headerAmbutrack">AMBUTRACK</h1>
        <div className="jumbotron col-md-12">
          <span className="gridContents">
            <img className="loginLifeStarImg" src="images/lifeStar.png"></img>
          </span>
          <p id="message" className="lead loginLeadMessage">This application helps EMTs log their daily activities and hours and to compare against other days. Data such as hours worked, calls taken, arrival time, etc can be recorded.</p>
          <p className="loginSecondaryMessage">Login to View Dashboard</p>
          <hr className="my-4"></hr>
          <form>
            <div className="form-group loginInputWidth">
              <label htmlFor='username'>Username</label>
              <input type="text" className="row col form-control loginInputWidth" id="userName"></input>
              <label htmlFor='email'>Email Address</label>
              <input type="email" className="row col form-control loginInputWidth" id="email"></input>
              <button id="signIn" type="button" className="btn blue-gradient ctrl-standard fx-bubbleDown loginBtn">Sign In</button>
              <a href="/createAccount"> <button id="goToCreateUserView" type="button" className="btn peach-gradient ctrl-standard fx-bubbleDown float-right loginCreateAcctBtn">Create Account</button></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
module.exports = Login