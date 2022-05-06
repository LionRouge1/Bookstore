import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Check status</button>
      <p>{categories}</p>
    </div>
  );
};

export default Categories;
