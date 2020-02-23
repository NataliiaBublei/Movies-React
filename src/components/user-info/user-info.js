import React from 'react';

import userIcon from '../../assets/user-icon.png';
import './user-info.css'

const UserInfo = () => {
  return (
    <div className="user-info">
      <img src={userIcon} className="icon" alt="user"/>
      <span>Nataliia Bublei</span>
    </div>
  )
};

export default UserInfo;
