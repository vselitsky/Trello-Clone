export const createList = list =>
  $.ajax({
    method: "POST",
    url: `/api/lists`,
    data: { list }
  });

export const deleteList = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/lists/${id}`
  });

export const editList = list =>
  $.ajax({
    method: "Patch",
    url: `/api/lists/${id}`,
    data: { list }
  });

export const fetchBoard = id =>
  $.ajax({
    method: "GET",
    url: `/api/boards/${id}`
  });

export const fetchAllLists = () => {
  return $.ajax({
    method: "get",
    url: `api/lists`
  });
};
