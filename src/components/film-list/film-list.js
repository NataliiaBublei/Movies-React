import React, { Component } from 'react';

import FilmListItem from '../film-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './film-list.css';

const FilmList = ({ films, getMoreFilms }) => {
  return (
    <div className="film-list">
      <ul className="film-list-flex">
        {
          films.map((film) => {
            return (
              <li key={film.id}>
                <FilmListItem film={film} />
              </li>
            );
          })
        }
      </ul>
      <button onClick={getMoreFilms} className="more-films">See more films...</button>
    </div>
  );
};

class FilmListContainer extends Component {
  state = {
    page: 1
  };

  componentDidMount() {
    this.props.fetchFilms(this.state.page);
  }

  getMoreFilms = () => {
    this.props.fetchMoreFilms(this.state.page + 1);

    this.setState((state) => {
      return {
        page: state.page + 1
      };
    });
  };

  render() {
    const { films, loading, errorFilms } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (errorFilms) {
      return <ErrorIndicator />;
    }

    return <FilmList films={films} getMoreFilms={this.getMoreFilms} />;
  }
}

export default FilmListContainer;
