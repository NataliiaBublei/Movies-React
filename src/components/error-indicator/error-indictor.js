import React from "react";

import './error-indificator.css';
import icon from '../../assets/error-indicator.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">Boom!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  )
};

export default ErrorIndicator;
