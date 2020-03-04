const React = require('react')
const Html = require('./layouts/default.jsx')

const CreateLog = props => {
    return (
        <Html>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Enter Date</label>
                <input type="text" class="form-control" id="date" aria-describedby="emailHelp"></input>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Enter hold wall</label>
                <input type="text" class="form-control" id="holdWall" aria-describedby="emailHelp"></input>
                
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Enter bls</label>
                <input type="text" class="form-control" id="bls" aria-describedby="emailHelp"></input>
                
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Enter als</label>
                <input type="text" class="form-control" id="als" aria-describedby="emailHelp"></input>
                
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Enter calls</label>
                <input type="text" class="form-control" id="calls" aria-describedby="emailHelp"></input>
                
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Enter cancels</label>
                <input type="text" class="form-control" id="cancels" aria-describedby="emailHelp"></input>
                
            </div>
        <button id="createLog" type="submit" class="btn btn-primary">Submit</button>
        </form>
        <script src="./scripts/createLog.js"></script>
        </Html>
    )
}

module.exports = CreateLog