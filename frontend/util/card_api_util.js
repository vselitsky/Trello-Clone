export const createCard = card =>
  $.ajax({
    method: "POST",
    url: `/api/cards`,
    data: { card }
  });

export const deleteCard = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/cards/${id}`
  });

export const editCard = card =>
  $.ajax({
    method: "Patch",
    url: `/api/card/${id}`,
    data: { card }
  });

export const fetchCard = id =>
  $.ajax({
    method: "GET",
    url: `/api/cards/${id}`
  });

export const fetchAllCards = card_id => {
  return $.ajax({
    method: "get",
    url: `api/cards`,
    data: { card_id }
  });
};
