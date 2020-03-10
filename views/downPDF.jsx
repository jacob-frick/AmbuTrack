const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SideBar = require('./components/sidebar.jsx')
const DownPDF = props => {
    return (
        <Html bclass=''>
            <Navbar user={props.userData} />
            <SideBar user={props.userData}>
                <div className="row">
                    <div className="col-12">
                        <h3>Mobile doesn't allow the viewing of PDFS :(</h3>
                        <h3>Please click the download button to view!</h3>
                    </div>
                    <div className="col-2 offset-3">
                        <button id="download-btn" className="btn btn-primary" value={props.userData}>Download</button>
                    </div>
                </div>
                <script defer src="/scripts/download.js"></script>

            </SideBar>
        </Html >
    )
}

module.exports = DownPDF