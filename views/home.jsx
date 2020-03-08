const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const Login = require('./components/login.jsx')

const List = require('./components/list.jsx')
const Jumbotron = require('./components/account.jsx')

const Home = props => {
  return (
    <Html bclass='b-login'>
      <Login />
      <script src="./scripts/login.js"></script>
    </Html>
  )
}

module.exports = Home
