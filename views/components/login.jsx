const React = require('react')
const Login = () => {
  return (
    <div className="container outerContainer">
      <div className="row">
        <div className="jumbotron col-md-12">
          <span className="gridContents">
            <h1 className="display-4">AMBUTRACK</h1>
            <img className="loginLifeStarImg" src="images/lifeStar.png"></img>
          </span>
          <p id="message" className="lead loginLeadMessage">This application helps EMTs log their daily activities and hours and to compare against other days. Data such as hours worked, calls taken, arrival time, etc can be recorded.</p>
          <p className="loginSecondaryMessage">Login to View Dashboard</p>
          <hr className="my-4"></hr>
          <form>
            <div className="form-group ">
              <label htmlFor='username'>Username</label>
              <input type="text" className="row col form-control" id="username"></input>
              <label htmlFor='email'>Email Address</label>
              <input type="email" className="row col form-control" id="email"></input>
            </div>
            <button id="signIn" type="submit" className="btn btn-primary">Sign In</button>
            <button id="createUser" type="submit" className="btn btn-success float-right">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}
module.exports = Login