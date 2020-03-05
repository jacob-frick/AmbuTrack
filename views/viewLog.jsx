const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')

const ViewLog = props => {
  return (
    <Html>
      <Navbar uid={props.userId} />
        <h1>Location: {props.location}</h1>
        <h1>ALS Count: {props.als}</h1>
        <h1>BLS Count: {props.bls}</h1>
        <h1>Cancels: {props.cancels}</h1>
        <h1>Calls: {props.calls}</h1>
        <h1>Date: {props.date}</h1>
        <h1>Hold Wall: {props.holdWall}</h1>
    </Html>
  )
}

module.exports = ViewLog