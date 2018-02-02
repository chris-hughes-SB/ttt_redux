import React, { Component } from 'react'
import { connect } from 'react-redux';
import { newGame } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    newGame: () => dispatch(newGame())
  };
};

class ConnectedNewGame extends Component {
  render() {
    return (
      <p>
        <button onClick={this.props.newGame}>
          New Game
        </button>
      </p>
    );
  }
}

const NewGame = connect(null, mapDispatchToProps)(ConnectedNewGame);

export default NewGame;
