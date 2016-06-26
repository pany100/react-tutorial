var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount: function() {
    console.log(this.props.location.query);
    // fetch info from github then update state
  },
  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []  
    }
  },
  render: function() {
    return (
      <ConfirmBattle 
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}/>
    );
  }

});

module.exports = ConfirmBattleContainer;