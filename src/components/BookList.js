import React from "react";

const BookList = ({bookTitle, bookAuthor}) => {
  return (
    <li>
      <div>
        <h3>{bookTitle}</h3>
        <p>{bookAuthor}</p>
      </div>
      <div>
        <button>Comments</button>
        <button>Remove</button>
        <button>Edit</button>
      </div>
    </li>
  )
}

export default BookList;