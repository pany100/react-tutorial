var React = require('react');
var ReactDom = require('react-dom');

var Hello = React.createClass ({
	render: function() {
		return (
        	<div>Hello world - {this.props.name}</div>
        );
	}
});

ReactDom.render(
	<Hello name="luis" customData={12}/>,
	document.getElementById('app')
);