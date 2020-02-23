import React from 'react';

import './error-indificator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">Boom!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
