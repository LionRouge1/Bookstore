import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromAPI } from '../redux/books/books';
import ReadStatus from './ReadStatus';

const BookList = ({
  bookId, bookTitle, bookAuthor, bookCategory,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeFromAPI(bookId));
  };
  return (
    <div className="item">
      <li>
        <p className="bookCat">{ bookCategory }</p>
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
      <ReadStatus />
    </div>
  );
};

export default BookList;
