const ADDBOOK = 'src/redux/books/ADDBOOK';
const REMOVEBOOK = 'src/redux/books/REMOVEBOOK';
const id = 0;

export const addBook = (title, author) => {
  return {
    type: ADDBOOK,
    title: title,
    author: author,
  }
};

export const removeBook = (bookId) => {
  return {
    type: REMOVEBOOK,
    bookId: bookId,
  }
}
const initialState = {
  Books: []
};

const addReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADDBOOK:
      return [
        ...state,
        {
          bookId: id + 1,
          title: action.title,
          author: action.author,
        }
      ];

    case REMOVEBOOK:
      return state.filter((book) => book.bookId !== action.bookId);

    default: 
      return state;
  }
};

export default addReducer;