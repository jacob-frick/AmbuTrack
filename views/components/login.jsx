const React = require('react')
const Login = () => {
  return (
    <div className="container outerContainer">
      <div className="row">
        {/* <h1 className="display-4 headerAmbutrack">AmbuTrack</h1> */}
        <img className="ambutrackHeaderLogo" src="images/customLogoOne.png"></img>
        <div className="jumbotron col-md-12">
          <span className="gridContents">
          </span>
          <p id="message" className="lead loginLeadMessage">This application helps EMTs log their daily activities and hours and to compare against other days. Data such as hours worked, calls taken, arrival time, etc can be recorded.</p>
          <p className="loginSecondaryMessage">Login to View Dashboard</p>
          <hr className="my-4"></hr>
          <form>
            <div className="form-group loginInputWidth">
              <label htmlFor='username'>Username</label>
              <input type="text" className="row col form-control loginInputWidth" id="username"></input>
              <label htmlFor='email'>Email Address</label>
              <input type="email" className="row col form-control loginInputWidth" id="email"></input>
              <button id="signIn" type="button" className="btn btn-hover blue-gradient loginBtn">Sign In</button>
              <a href="/createAccount"><button id="goToCreateUserView" type="button" className="btn btn-hover peach-gradient float-right loginCreateAcctBtn">Create Account</button></a>
            </div>
          </form>
        </div>
      </div>
      <script src="./scripts/login.js"></script>
    </div>
  )
}
module.exports = Login