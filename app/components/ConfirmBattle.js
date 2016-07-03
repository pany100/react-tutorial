var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UserDetail = require('./UserDetail');
var UserDetailsWrapper = require('./UserDetailsWrapper');

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
  return props.isLoading === true
   ? <p>Loading!</p>
   : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
       <h1>Confirm Players</h1>
       <div className="col-sm-8 col-sm-offset-2">
         <UserDetailsWrapper name='Player One'>
          <UserDetail info={props.playersInfo[0]}/>
         </UserDetailsWrapper>
         <UserDetailsWrapper name='Player Two'>
          <UserDetail info={props.playersInfo[1]}/>
         </UserDetailsWrapper>
       </div>
       <div className="col-sm-8 col-sm-offset-2">
         <div className="col-sm-12" style={styles.space}>
           <button className="btn btn-lg btn-success" type="button" onClick={props.onInitiateBattle}>
            Initiate Battle!
           </button>
         </div>
         <div className="col-sm-12" style={styles.space}>
            <Link to="/playerOne">
              <button className="btn btn-lg btn-danger" type="button">Reselect players</button>
            </Link>
         </div>
       </div>
     </div>
}

ConfirmBattle.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  onInitiateBattle: React.PropTypes.func.isRequired,
  playersInfo: React.PropTypes.array.isRequired   
}

module.exports = ConfirmBattle;