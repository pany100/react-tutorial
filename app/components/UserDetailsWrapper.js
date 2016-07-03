var React = require('react');
var PropTypes = React.PropTypes;
var UserDetail = require('./UserDetail');

function UserDetailsWrapper(props) {
  return (
    <div className="col-sm-6">
      <p className="lead">{props.name}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propTypes = {
  name: PropTypes.string.isRequired
}

module.exports = UserDetailsWrapper;