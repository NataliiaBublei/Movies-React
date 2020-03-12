import React from 'react';

import StarsRating from '../stars-rating';
import PosterPreview from '../poster-preview';
import FilmDetails from '../film-details';
import './film-list-item.css';

const CN = 'film-list-item';

const FilmListItem = ({ film }) => {

  const { posterPath, title, genreIds, voteAverage, releaseDate, overview } = film;

  return (
    <div className={`${CN}`}>
      <PosterPreview posterPath={posterPath} />
      <FilmDetails title={title} genreIds={genreIds} overview={overview} />
      <div className={`${CN}-rating`}>
        <StarsRating rating={voteAverage} />
        <div className={`${CN}-releaseDate`}>{releaseDate}</div>
      </div>
    </div>
  );
};

export default FilmListItem;
