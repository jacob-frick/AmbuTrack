const React = require('react')
const LogCard = require('./logCard.jsx')
const Accordion = props => {
    return (
        <div id="accordion">
            {props.log.map((elem, index) => {
                return (
                    <LogCard elem={elem} index={index} key={`logCardKey${index}`} />
                )
            })}
        </div>
    )
}
module.exports = Accordion