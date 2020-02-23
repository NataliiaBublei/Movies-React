import React from 'react';

import './film-details.css';
import GenreBadge from '../genre-badge';

const FilmDetails = ({ title, genreIds }) => {
  return (
    <div className="film-details">
      <span className="film-title">{title}</span>
      <GenreBadge genreIds={genreIds}/>
    </div>
  );
};

export default FilmDetails;
