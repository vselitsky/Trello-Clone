import * as APIUtil from "../util/list_api_util";

export const RECEIVE_LIST = "RECEIVE_LIST";
export const DRAG_HAPPENED = "DRAG_HAPPENED";
export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const UPDATE_LIST = "UPDATE_LIST";

export const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

export const updateList = list => ({
  type: UPDATE_LIST,
  list
});

export const createList = list => dispatch =>
  APIUtil.createList(list).then(list => dispatch(receiveList(list)));

export const editList = list => dispatch =>
  APIUtil.updateList(list).then(list => dispatch(updateList(list)));

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type,
  boardID
) => dispatch =>
  dispatch({
    type: DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      draggableId,
      type,
      boardID
    }
  });

// export const addList = title => {
//     return (dispatch, getState) => {
//         const boardID = getState().activeBoard;
//         const id = uuid();
//         dispatch({
//             type: CONSTANTS.ADD_LIST,
//             payload: { title, boardID, id }
//         });
//     };
// };

// export const sort = (
//     droppableIdStart,
//     droppableIdEnd,
//     droppableIndexStart,
//     droppableIndexEnd,
//     draggableId,
//     type
// ) => {
//     return (dispatch, getState) => {
//         const boardID = getState().activeBoard;
//         dispatch({
//             type: CONSTANTS.DRAG_HAPPENED,
//             payload: {
//                 droppableIdStart,
//                 droppableIdEnd,
//                 droppableIndexEnd,
//                 droppableIndexStart,
//                 draggableId,
//                 type,
//                 boardID
//             }
//         });
//     };
// };

// export const editTitle = (listID, newTitle) => {
//     return {
//         type: CONSTANTS.EDIT_LIST_TITLE,
//         payload: {
//             listID,
//             newTitle
//         }
//     };
// };

// export const deleteList = listID => {
//     return (dispatch, getState) => {
//         const boardID = getState().activeBoard;
//         return dispatch({
//             type: CONSTANTS.DELETE_LIST,
//             payload: {
//                 listID,
//                 boardID
//             }
//         });
//     };
// };

export const fetchAllLists = () => dispatch => {
  APIUtil.fetchAllLists().then(payload => dispatch(receiveLists(payload)));
};

export const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});
