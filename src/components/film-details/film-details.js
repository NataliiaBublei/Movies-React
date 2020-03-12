import React from 'react';

import './film-details.css';
import GenreBadge from '../genre-badge';

const CN = 'film-details';

const FilmDetails = ({ title, genreIds, overview }) => {

  const filmOverview = overview.slice(0, 150) + '…';

  return (
    <div className={`${CN}`}>
      <div className={`${CN}-title`}>{title}</div>
      <GenreBadge genreIds={genreIds} />
      <div className={`${CN}-overview`}>{filmOverview}</div>
    </div>
  );
};

export default FilmDetails;
