const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SideBar = require('./components/sidebar.jsx')
const Accordion = require('./components/accordion.jsx')
const Dashboard = props => {
    return (
        <Html bclass=''>
            <Navbar user={props.userData} />
            <SideBar uid={props.userData}>
                <Accordion log={props.log} />
            </SideBar>
            <script defer src="/scripts/dashboard.js"></script>
        </Html >
    )
}

module.exports = Dashboard