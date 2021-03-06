import React, { Component } from 'react'
import Board from './Board'
import UndoRedo from './UndoRedo'
import NewGame from './NewGame'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {xIsNext: state.present.xIsNext, winner: state.present.winner}
}

class ConnectedGame extends Component {
  render() {
    let status
    if (this.props.winner){
      status = 'Winner: '+ this.props.winner
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <UndoRedo />
          <NewGame />
        </div>
      </div>
    );
  }
}

const Game = connect(mapStateToProps)(ConnectedGame);

export default Game;
