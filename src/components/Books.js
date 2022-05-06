import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import BookList from './BookList';
import InsertBook from './InsertBook';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <ul>
          {books.map((book) => (
            <BookList
              key={book[0]}
              bookId={book[0]}
              bookTitle={book[1][0].title}
              bookAuthor={book[1][0].author}
            />
          ))}
        </ul>
        <InsertBook />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.Books.books,
});
const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => {
    dispatch(fetchBooks());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
