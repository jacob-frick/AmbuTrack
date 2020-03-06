const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')

const Dashboard = props => {
    return (
        <Html>
            <Navbar uid={props.id} />
            <h1>Dashboard</h1>
            <h3>User: {props.firstName}</h3>
            <script src="./scripts/dashboard.js"></script>
        </Html>
    )
}

module.exports = Dashboard