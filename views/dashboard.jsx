const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')

const Dashboard = props => {
    return (
        <Html>
            <Navbar uid={props.id}/>
            <h1>Dashboard</h1>
            <h3>Userid: {props.firstName}</h3>
        </Html>
    )
}

module.exports = Dashboard