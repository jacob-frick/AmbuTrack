const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const FormItem = require('./components/formItem.jsx')
const SideBar = require('./components/sidebar.jsx')
const CreateLog = props => {
    return (
        <Html>
            <Navbar user={props.userData} />
            <SideBar user={props.userData}>
                <div className="container">
                    <form id="logForm">
                        <div id="logCreationMessage" className="logMessage"></div>
                        <label>Enter date</label>
                        <input type="date" className="form-control" id='date'></input>
                        <FormItem title='Minutes Holding Wall' id='holdWall' forItem='holdWall' desc='minsHoldWall'/>
                        <FormItem title='Enter times BLS (Basic Life Support)' id='bls' forItem='bls' desc='blsInput' />
                        <FormItem title='Enter times ALS (Avanced Life Support)' id='als' forItem='als' desc='alsInput' />
                        <FormItem title='Enter cancel times' id='cancels' forItem='cancels' desc='cancelsInput' />
                        <FormItem title='Enter location' id='location' forItem='location' desc='cancelsInput' />
                        <button id="createLog" type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <script src="/scripts/createLog.js"></script>
            </SideBar>
        </Html>
    )
}

module.exports = CreateLog