const React = require('react')
const Html = require('./layouts/default.jsx')

const Dashboard = props => {
    return (
      <Html>
        <h1>Dashboard</h1>
        <h3>Userid: {props.uid}</h3>
      </Html>
    )
  }
  
  module.exports = Dashboard