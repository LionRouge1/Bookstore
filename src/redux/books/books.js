const ADDBOOK = 'src/redux/books/ADDBOOK';
const REMOVEBOOK = 'src/redux/books/REMOVEBOOK';

export const addBook = (title, author) => (
  {
    type: ADDBOOK,
    title,
    author,
  }
);

export const removeBook = (bookId) => ({
  type: REMOVEBOOK,
  bookId,
});

const books = [
  {
    bookId: 1,
    title: 'toto',
    author: 'casmir',
  },
  {
    bookId: 2,
    title: 'Atotor',
    author: 'Yomin',
  },
];

const addReducer = (state = books, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        {
          bookId: state.length + 1,
          title: action.title,
          author: action.author,
        },
      ];

    case REMOVEBOOK:
      return state.filter((book) => book.bookId !== action.bookId);

    default:
      return state;
  }
};

export default addReducer;
