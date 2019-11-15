export function getBooksAction(data) {
  return {
    type: "GET_BOOKS",
    payload: data
  };
}

export function getAuthoreAction(data) {
  return {
    type: "GET_AUTHORS",
    payload: data
  };
}
export function getBookDetailAction(data) {
  return {
    type: "BOOK_DETAIL",
    payload: data
  };
}

export function getAuthorDetailAction(data) {
  return {
    type: "BOOK_AUTHOR",
    payload: data
  };
}
export function searchAction(word) {
  return {
    type: "SEARCH",
    payload: word
  };
}
