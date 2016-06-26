var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]);
  },
  getInitialState: function() {
    console.log('get initial state');
    return {
      isLoading: true,
      playerInfo: []  
    }
  },
  componentWillMount:function(){
    console.log('componentWillMount');
  },
  componentWillReceiveProps: function(nextProps) {
    console.log('compoennt witll receive');
  },
  componentWillUnmount: function() {
    console.log('component will unmount');
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