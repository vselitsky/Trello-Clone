import * as APIUtil from "../util/board_api_util";

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const CLEAR_BOARD_ERRORS = "CLEAR_BOARD_ERRORS";

export const fetchAllBoards = () => dispatch =>
  APIUtil.fetchAllBoards().then(payload => dispatch(receiveBoards(payload)));

export const fetchBoard = id => dispatch =>
  APIUtil.fetchBoard(id).then(board => dispatch(receiveBoard(board)));

export const createBoard = board => dispatch =>
  APIUtil.createBoard(board).then(
    board => dispatch(receiveBoard(board)),
    errors => dispatch(receiveErrors(errors))
  );

export const deleteBoard = boardId => dispatch =>
  APIUtil.deleteBoard(boardId).then(board => dispatch(removeBoard(boardId)));

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

const removeBoard = boardId => ({
  type: REMOVE_BOARD,
  boardId
});

const receiveErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

export const clearErrors = () => ({
  errors: [],
  type: CLEAR_BOARD_ERRORS
});
