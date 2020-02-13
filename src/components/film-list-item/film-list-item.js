import React from "react";

import './film-list-item.css';
import Rating from "../rating/rating";

const FilmListItem = ({ film }) => {
  const { title, genreIds, releaseDate, overview, posterPath, voteAverage } = film;

  return (
    <div className="film-list-item">
      <div className="film-poster">
        <img src={posterPath} alt="poster"/>
      </div>
      <div className="film-details">
        <a href="#" className="film-title">{title}</a>
        <div className="film-genreIds">{genreIds}</div>
        <Rating rating={voteAverage}/>
        <div className="film-releaseDate">{releaseDate}</div>
      </div>
    </div>
  )
};

export default FilmListItem;
