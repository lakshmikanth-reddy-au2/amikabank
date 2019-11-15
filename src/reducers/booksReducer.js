const initialState = {
  books: [],
  authors: [],
  oneBook: [],
  oneAuthor: [],
  searchValue: null
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_BOOKS":
      return {
        ...state,
        books: action.payload
      };
    case "GET_AUTHORS":
      return {
        ...state,
        authors: action.payload
      };
    case "BOOK_DETAIL":
      return {
        ...state,
        oneBook: action.payload
      };
    case "BOOK_AUTHOR":
      return {
        ...state,
        oneAuthor: action.payload
      };
    default:
      return state;
  }
}

export default booksReducer;
