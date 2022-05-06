import React from 'react';
import { connect } from 'react-redux';
import { addToAPI } from '../redux/books/books';

class InsertBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      category: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    const { books, addToAPI } = this.props;
    const { title, author, category } = this.state;
    const itemId = `item${books.length + 1}`;
    const book = {
      item_id: itemId,
      title,
      author,
      category,
    };
    if (title !== '' && author !== '' && category !== '') {
      addToAPI(book);
      this.setState({
        title: '',
        author: '',
        category: '',
      });
    }
  }

  render() {
    const { title, author, category } = this.state;
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
          <select name="category" onChange={this.handleInput} value={category}>
            <option value=""> </option>
            <option value="Action">Action</option>
            <option value="Fiction">Fiction</option>
            <option value="Romance">Romance</option>
          </select>
          <button type="submit" onClick={(e) => this.handleClick(e)}>Add Book</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.Books.books,
});

const mapDispatchToProps = (dispatch) => ({
  addToAPI: (data) => {
    dispatch(addToAPI(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InsertBook);
