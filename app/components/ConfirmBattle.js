var React = require('react');

function ConfirmBattle(props) {
  return props.isLoading === true
   ? <p>Loading!</p>
   : <p>Component Battle!</p>
}

module.exports = ConfirmBattle;