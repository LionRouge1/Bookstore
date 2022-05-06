import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromAPI } from '../redux/books/books';

const BookList = ({ bookId, bookTitle, bookAuthor }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeFromAPI(bookId));
  };
  return (
    <li>
      <div className="book_item">
        <h3>{bookTitle}</h3>
        <p>{bookAuthor}</p>
      </div>
      <div className="button_container">
        <button type="button">Comments</button>
        <button type="button" onClick={(id) => handleClick(id)}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </li>
  );
};

export default BookList;
