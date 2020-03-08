const React = require('react')
const Html = require('./layouts/default.jsx')
const Navbar = require('./components/navbar.jsx')
const FormItem = require('./components/formItem.jsx')
const CreateLog = props => {
    return (
        <Html>
            <Navbar user={props.userData} />
            <div className="container">
                <form>
                    <FormItem title='Enter Date' id='date' forItem='date' desc='dateInput' />
                    <FormItem title='Minutes Holding Wall' id='holdWall' forItem='holdWall' desc='minsHoldWall' />
                    <FormItem title='Enter times BLS' id='bls' forItem='bls' desc='blsInput' />
                    <FormItem title='Enter times ALS' id='als' forItem='als' desc='alsInput' />
                    <FormItem title='Enter total number of calls' id='calls' forItem='calls' desc='callsInput' />
                    <FormItem title='Enter cancel times' id='cancels' forItem='cancels' desc='cancelsInput' />
                    <FormItem title='Enter location' id='location' forItem='location' desc='cancelsInput' />
                    <button id="createLog" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <script src="./scripts/createLog.js"></script>
        </Html>
    )
}

module.exports = CreateLog