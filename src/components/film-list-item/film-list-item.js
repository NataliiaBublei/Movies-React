import React from 'react';
import { connect } from 'react-redux';

import Rating from '../rating/rating';
import './film-list-item.css';

const FilmListItem = ({ film, genresArray, errorGenres }) => {

  const { posterPath, title, genreIds, voteAverage, releaseDate } = film;

  function getFilmGenres(arrayId, arrayObject) {
    const filterGenresArray = arrayObject.filter(genre => arrayId.find(id => genre.id === id));
    const genres = filterGenresArray.map(genre => genre.name).join(', ');

    return errorGenres ? <i>Here must be genres</i> : genres;
  }

  return (
    <div className="film-list-item">
      <div className="film-poster">
        <img src={posterPath} alt="poster"/>
      </div>
      <div className="film-details">
        <span className="film-title">{title}</span>
        <div className="film-genreIds">
          {getFilmGenres(genreIds, genresArray)}
        </div>
      </div>
      <div className="position">
        <Rating rating={voteAverage}/>
        <div className="film-releaseDate">{releaseDate}</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ genres: { genres: genresArray, errorGenres } }) => {
  return { genresArray, errorGenres };
};

export default connect(mapStateToProps)(FilmListItem);
