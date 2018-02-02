import React, { Component } from 'react'
import Square from './Square'
import { connect } from 'react-redux';
import { makeMove } from '../actions'

const mapStateToProps = (state) => {
  return {squares: state.present.squares}
}

const mapDispatchToProps = dispatch => {
  return {
    makeMove: cell => dispatch(makeMove(cell))
  };
};

class ConnectedBoard extends Component {
  renderSquare(i){
    return <Square value={this.props.squares[i]} onClick={()=>this.props.makeMove(i)} />
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

const Board = connect(mapStateToProps, mapDispatchToProps)(ConnectedBoard);

export default Board;
