import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        {links.map(({ id, path, text }) => (
          <li key={id}>
            <NavLink to={path}>{text}</NavLink>
          </li>
        ))}
      </ul>
      <div className="userIcon">
        <i className="fas fa-user-alt" />
      </div>
    </nav>
  );
};

export default Navbar;
