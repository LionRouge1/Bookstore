import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../redux/books/books';

class InsertBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    const { title, author } = this.state;
    const { addBook } = this.props;
    if (title !== '' && author !== '') {
      addBook(title, author);
      this.setState({
        title: '',
        author: '',
      });
    }
  }

  render() {
    const { title, author } = this.state;
    return (
      <div>
        <h1>ADD NEW BOOK</h1>
        <form>
          <input
            name="title"
            type="text"
            placeholder="Book title"
            value={title}
            onChange={this.handleInput}
          />
          <input
            name="author"
            type="text"
            placeholder="Author"
            value={author}
            onChange={this.handleInput}
          />
          <button type="submit" onClick={(e) => this.handleClick(e)}>Add Book</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBook: (title, author) => {
    dispatch(addBook(title, author));
  },
});

export default connect(null, mapDispatchToProps)(InsertBook);
