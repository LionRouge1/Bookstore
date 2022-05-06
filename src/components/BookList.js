import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookList = ({ bookId, bookTitle, bookAuthor }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeBook(bookId));
  };
  return (
    <li>
      <div>
        <h3>{bookTitle}</h3>
        <p>{bookAuthor}</p>
      </div>
      <div>
        <button type="button">Comments</button>
        <button type="button" onClick={(id) => handleClick(id)}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </li>
  );
};

export default BookList;
