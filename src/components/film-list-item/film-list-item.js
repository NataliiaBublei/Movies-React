import React from 'react';

import StarsRating from '../stars-rating';
import PosterPreview from '../poster-preview';
import FilmDetails from '../film-details';
import './film-list-item.css';

const FilmListItem = ({ film }) => {

  const { posterPath, title, genreIds, voteAverage, releaseDate } = film;

  return (
    <div className="film-list-item">
      <PosterPreview posterPath={posterPath}/>
      <FilmDetails title={title} genreIds={genreIds}/>
      <div className="position">
        <StarsRating rating={voteAverage}/>
        <div className="film-releaseDate">{releaseDate}</div>
      </div>
    </div>
  );
};

export default FilmListItem;
