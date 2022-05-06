import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import BookList from './BookList';
import InsertBook from './InsertBook';
import './style/bookStyle.css';

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
      <div className="book_container">
        <ul>
          {books.map(({
            item_id: bookId, title, author, category,
          }) => (
            <BookList
              key={bookId}
              bookId={bookId}
              bookTitle={title}
              bookAuthor={author}
              bookCategory={category}
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
