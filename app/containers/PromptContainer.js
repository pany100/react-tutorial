var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  //Con este ctx evito ir pasando la ruta por todos los componentes hasta llegar a este
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      username: ''
    };
  },
  handleUpdateUser(e) {
    this.setState({
      username: e.target.value
    });
  },
  handleSubmitUser(e) {
    e.preventDefault();
    var username = this.props.username;
    this.setState({
      username: ''
    });

    //Este routeParam viene de routes.js-> playerTwo/:playerOne
    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      this.context.router.push('/playerTwo/' + this.state.username);
    }
  },
  render: function() {
    return (
      <Prompt 
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}/>
    );
  }

});

module.exports = PromptContainer;