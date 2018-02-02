import { MAKE_MOVE } from "../constants/actions_types";

export const makeMove = (cell) => {
  return {
    type: MAKE_MOVE,
    cell: cell
  }
}
