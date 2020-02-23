import React from 'react';
import { Link } from 'react-router-dom';

import UserInfo from '../user-info';
import './header.css';


const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">Films</div>
      </Link>
      <form>
        <input type="text" placeholder="Search.."
               name="search" className="search"/>
        <button type="submit" className="search-icon"/>
      </form>
      <UserInfo/>
    </header>
  );
};

export default Header;
