const React = require('react')
const Html = require('./default.jsx')
const Navbar =require('./components/navbar.jsx')


const Home = props => {
  return (
    <Html>
      <Login/>
     <Navbar />  
      <html lang="en" style="background-color: #759dd9;">
<head>
  <meta charSet="UTF-8">
  <link type="image/x-icon" rel="shortcut icon"
    href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Star_of_life2.svg/1200px-Star_of_life2.svg.png">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous">
</head>

<body>
  <div className="container" style="
    margin-top: 5rem;
    margin-bottom: 2rem;">
    <div className="row">
      <h1 className="display-4">AMBU-TRACK</h1>
      <div className="jumbotron col-md-12">
        <span style="display: grid;">
        </span><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Star_of_life2.svg/1200px-Star_of_life2.svg.png"style="width: 59px; margin-top: -142px; float: right;">
        <p id="message" className="lead" style="margin-top: -4rem">This application helps EMTs log their daily activities and hours and to compare against  other days. Data such as
             hours worked, calls taken, arrival time, etc can be recorded.</p><br>
        <p style="margin-top: -2rem !important">Login to View Dashboard</p>
        <hr className="my-4">
        <form>
          <div className="form-group ">
            <label for="username">Username</label>
            <input type="text" className="row col form-control" id="username">
            <label for="password">Password</label>
            <input type="password" className="row col form-control" id="password">
          </div>
          <button id="signIn" type="submit" className="btn btn-primary">Sign In</button>
          <button id="signOut" type="submit" className="bt btn btn-danger" disabled="" style="display: none">Sign Out</button>
          <button id="createUser" type="submit" className="btn btn-success float-right">Create Account</button>
        </form>
      </div>
    </div>
    <div className="row" style="display: none;">
      <div className="col-md-6">
        <form>
          <div className="form-group" style="width: auto;">
            <label for="item">Activity Description:</label>
            <input type="text" className="form-control" id="item" style="width: 100%;">
          </div>
          <button id="createItem" type="submit" className="btn btn-primary">Add Item</button>
        </form>
      </div>
      <div className="col-md-6">
        <ul id="list" className="list-group">
          <li className="list-group-item">No items to display. Not signed in yet.</li>
        </ul>
      </div>
    </div>
  </div>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
    integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
    crossOrigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossOrigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj03uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" 
    crossOrigin="anonymous"></script>
  <script src=""></script>
</body>

</html>
    </Html>
  )
}

{/* module.exports = Home */}
