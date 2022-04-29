import React from 'react';
import BookList from './BookList';
import InsertBook from './InsertBook';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
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
      ],
    };
  }

  render() {
    const { books } = this.state;
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

export default Books;
