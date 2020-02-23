import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import './genre-badge.css';

class GenreBadge extends Component {

  componentDidMount() {
    this.props.fetchGenres();
  }

  getFilmGenres(arrayId, arrayObject) {
    const filterGenresArray = arrayObject.filter(genre => arrayId.find(id => genre.id === id));

    return filterGenresArray.map(genre => genre.name).join(', ');
  }

  render() {
    const { genreIds, genresArray, errorGenres } = this.props;

    if (errorGenres) {
      return <ErrorIndicator/>;
    }

    return (
      <div className="film-genreIds">
        {this.getFilmGenres(genreIds, genresArray)}
      </div>
    );
  }
}

export default GenreBadge;
