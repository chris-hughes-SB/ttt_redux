import { MAKE_MOVE } from "../constants/actions_types";
import undoable, { distinctState } from 'redux-undo'

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_MOVE:
      const squares = state.squares.slice();
      if (squares[action.cell] || calculateWinner(squares)) return state;
      squares[action.cell] = state.xIsNext ? 'X' : 'O'
      return {
        squares: squares,
        xIsNext: !state.xIsNext,
        winner: calculateWinner(squares)
      };

    default:
      return state;
  }
}

const undoableRootReducer = undoable(rootReducer,{
  filter: distinctState()
})

export default undoableRootReducer;
