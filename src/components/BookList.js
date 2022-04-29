import React from 'react';

const BookList = ({ bookTitle, bookAuthor }) => (
  <li>
    <div>
      <h3>{bookTitle}</h3>
      <p>{bookAuthor}</p>
    </div>
    <div>
      <button type="button">Comments</button>
      <button type="button">Remove</button>
      <button type="button">Edit</button>
    </div>
  </li>
);

export default BookList;
