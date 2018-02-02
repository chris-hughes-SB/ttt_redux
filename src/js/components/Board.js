import React, { Component } from 'react'
import Square from './Square'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {squares: state.squares}
}

class ConnectedBoard extends Component {
  renderSquare(i){
    return <Square value={i} />
  }

  render() {
    const status = 'Next Player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(this.props.squares[0])}
          {this.renderSquare(this.props.squares[1])}
          {this.renderSquare(this.props.squares[2])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.squares[3])}
          {this.renderSquare(this.props.squares[4])}
          {this.renderSquare(this.props.squares[5])}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props.squares[6])}
          {this.renderSquare(this.props.squares[7])}
          {this.renderSquare(this.props.squares[8])}
        </div>
      </div>
    );
  }
}

const Board = connect(mapStateToProps)(ConnectedBoard);

export default Board;
