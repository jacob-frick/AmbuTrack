const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SideBar = require('./components/sidebar.jsx')
const LogCard = require('./components/logCard.jsx')
const Dashboard = props => {
    return (
        <Html>
            <Navbar uid={props.id} />
            <SideBar>
                <h1>Dashboard</h1>
                <h3>User: {props.firstName}</h3>
                <div id="accordion">
                    {props.log.map((elem, index) => {
                        return (
                            <LogCard elem={elem} index={index} />
                        )
                    })}
                </div>
            </SideBar >
        </Html >
    )
}

module.exports = Dashboard