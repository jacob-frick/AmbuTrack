const React = require('react')
const List = props => {
  return (
    <ul className='list-group'>
      <li className='list-group-item'>Item One</li>
      <li className='list-group-item'>Item Two</li>
      <li className='list-group-item'>Item Three</li>
      <li className='list-group-item'>Item Four</li>
      <li className='list-group-item'>{props.hotdog}</li>
    </ul>
  )
}
module.exports = List