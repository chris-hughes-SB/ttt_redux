import { MAKE_MOVE } from "../constants/actions_types";

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_MOVE:
      const squares = state.squares.slice();
      squares[action.cell] = state.xIsNext ? 'X' : 'O'
      return {
        squares: squares,
        xIsNext: !state.xIsNext
      };

    default:
      return state;
  }
}

export default rootReducer;
