import React from 'react';

import './header.css';
import userIcon from '../../assets/user-icon.png';
import { Link } from 'react-router-dom';


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
      <div className="user">
        <img src={userIcon} className="icon" alt="user"/>
        <span>Nataliia Bublei</span>
      </div>
    </header>
  );
};

export default Header;
