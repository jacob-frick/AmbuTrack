const React = require('react')

const FormItem = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.forItem}>{props.title}</label>
            <input type="text" className="form-control" id={props.id} aria-describedby={props.desc}></input>
        </div>
    )
}

module.exports = FormItem