import React from "react";

class InsertBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {title, author} = this.state;
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
          <button type="submit">Add Book</button>
        </form>
      </div>
    )
  }
}

export default InsertBook;