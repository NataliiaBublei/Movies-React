import React from 'react';

import './poster-preview.css'

const PosterPreview = ({ posterPath }) => {
  return (
    <div className="film-poster">
      <img src={posterPath} alt="poster"/>
    </div>
  )
};

export default PosterPreview;
