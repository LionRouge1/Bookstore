import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import InsertBook from './InsertBook';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        <ul>
          {books.map(({ bookId, title, author }) => (
            <BookList
              key={bookId}
              bookId={bookId}
              bookTitle={title}
              bookAuthor={author}
            />
          ))}
        </ul>
        <InsertBook />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(Books);
