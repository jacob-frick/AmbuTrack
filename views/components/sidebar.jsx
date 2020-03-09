const React = require('react')

const SideBar = props => {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-sm-3 col-lg-2 d-none d-sm-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column mt-3">
                            <li className="nav-item"><a className="nav-link" href={`/dashboard/${props.user.id}`}>Dashboard</a></li>
                            <li className="nav-item"><a className="nav-link" href={`/profile/${props.user.id}`}>Profile</a></li>
                            <li className="nav-item"><a className="nav-link" href={`/createLog/${props.user.id}`}>Create Log</a></li>
                        </ul>
                    </div>
                </nav>
                <main role="main" className="col-sm-9 ml-auto col-lg-10 pt-3 px-4">
                        {props.children}
                </main>
            </div>
        </div>
    )
}
module.exports = SideBar