import React, { Component } from 'react'
import Board from './Board'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {xIsNext: state.xIsNext, winner: state.winner}
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
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

const Game = connect(mapStateToProps)(ConnectedGame);

export default Game;
