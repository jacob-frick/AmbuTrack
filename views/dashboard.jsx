const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SideBar = require('./components/sidebar.jsx')
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
                            <div className="card w-75">

                                <a className="" data-toggle="collapse" href={`#collapse${index}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            {elem.date}{elem.location}
                                        </h5>
                                    </div>
                                </a>
                                <div id={`collapse${index}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-action">Time spent holding the wall: {elem.holdWall}</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-action">BLS Count: {elem.bls}</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-action">ALS Count: {elem.als}</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-action">Canceled calls: {elem.cancels}</a>
                                        <a href="#" class="list-group-item list-group-item-action list-group-item-action">Total calls: {elem.bls + elem.als + elem.cancels}</a>
                                        <a href="#" class="btn btn-danger btn-xsm float-right mt-3 mb-3" type="submit">Delete</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </SideBar >
        </Html >
    )
}

module.exports = Dashboard