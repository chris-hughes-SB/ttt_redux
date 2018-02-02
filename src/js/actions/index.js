import * as types from "../constants/actions_types";

export const makeMove = (cell) => {
  return {
    type: types.MAKE_MOVE,
    cell: cell
  }
}

export const newGame = () => {
  return {
    type: types.NEW_GAME
  }
}
