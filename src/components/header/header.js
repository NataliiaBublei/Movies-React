import React from "react";

import './header.css';
import userIcon from '../../assets/user-icon.png'


const Header = () => {
  return (
    <header className="header">
      <a className="logo" href="#">Films</a>
      <form>
        <input type="text" placeholder="Search.."
               name="search" className="search"/>
        <button type="submit" className="search-icon" />
      </form>
      <div className="user">
        <img src={userIcon} className="icon" alt="user"/>
        <span>Nataliia Bublei</span>
      </div>
    </header>
  )
};

export default Header;
