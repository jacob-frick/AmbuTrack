const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const SideBar = require('./components/sidebar.jsx')
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const Dashboard = props => {
    return (
        <Html>
            <Navbar uid={props.id} />
            <SideBar>
                <h1>Dashboard</h1>
                <h3>User: {props.firstName}</h3>
                <div id="accordion">
                    {arr.map(elem => {
                        return (
                            <div className="card">
                                <a className="" data-toggle="collapse" href={`#collapse${elem}`} role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            Collapsible Group Item #1
                                </h5>
                                    </div>
                                </a>
                                <div id={`collapse${elem}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                            </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </SideBar>
        </Html>
    )
}

module.exports = Dashboard