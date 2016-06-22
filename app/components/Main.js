var React = require('react');

var Main = React.createClass({
    displayName: 'Main',
    render() {
        return (
            <div className='main-container'>
              {this.props.children}
            </div>
        );
    }
});

module.exports = Main;