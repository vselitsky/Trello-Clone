export const fetchAllBoards = () =>
  $.ajax({
    method: "GET",
    url: `/api/boards`
  });

export const fetchBoard = id =>
  $.ajax({
    method: "GET",
    url: `/api/boards/${id}`
  });

export const updateBoard = board =>
  $.ajax({
    url: `api/boards/${board.id}`,
    method: "PATCH",
    data: { board }
  });

export const createBoard = board =>
  $.ajax({
    method: "POST",
    url: `/api/boards/`,
    data: { board }
  });

export const updateListPositions = board =>
  $.ajax({
    method: "Patch",
    url: `/api/update_lists_pos/${board.id}`,
    data: { board }
  });

export const deleteBoard = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/boards/${id}`
  });
