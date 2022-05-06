const ADDBOOK = 'src/redux/books/ADDBOOK';
const REMOVEBOOK = 'src/redux/books/REMOVEBOOK';
const FETCH_BOOKS_SUCCEEDED = 'src/redux/books/FETCH_BOOKS_SUCCEEDED';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qIKw8cKB3MhEunwMJF5b/books/';

export const addBook = (message, book) => (
  {
    type: ADDBOOK,
    message,
    book,
  }
);

export const removeBook = (bookId) => ({
  type: REMOVEBOOK,
  bookId,
});

export const fetchBooksSucceeded = (book) => ({
  type: FETCH_BOOKS_SUCCEEDED,
  book,
});

const initialState = {
  books: [],
  message: '',
};
const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCEEDED:
      return {
        ...state,
        books: action.book,
      };
    case ADDBOOK:
      return {
        ...state,
        books: [
          ...state.books,
          {
            [action.book.item_id]: [{
              title: action.book.title,
              author: action.book.author,
            }],
          },
        ],
        message: action.message,
      };

    case REMOVEBOOK:
      return {
        ...state,
        books: [
          ...state.books.filter((book) => book[0] !== action.bookId),
        ],
      };

    default:
      return state;
  }
};

export const addToAPI = (data) => (
  (dispatch) => {
    const option = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    };
    fetch(url, option)
      .then((message) => dispatch(addBook(message, data)));
  }
);

export const removeFromAPI = (id) => (
  (dispatch) => {
    const dUrl = url + id;
    fetch(dUrl, {
      method: 'DELETE',
    })
      .then(dispatch(removeBook(id)));
  }
);

export const fetchBooks = () => (
  function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchBooksSucceeded(Object.entries(data)));
      });
  }
);

export default addReducer;
