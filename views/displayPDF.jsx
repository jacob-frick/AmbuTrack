const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SideBar = require('./components/sidebar.jsx')
const DisplayPDF = props => {
    return (
        <Html bclass=''>
            <Navbar user={props.userData} current={props.current} />
            <SideBar user={props.userData}>
                <iframe src={`/userGenPDFs/${props.userData.username}.pdf`}>
                </iframe>
            </SideBar>
        </Html >
    )
}

module.exports = DisplayPDF