const filmsRequested = () => {
  return {
    type: 'FETCH_FILMS_REQUEST'
  };
};

const filmsLoaded = (newFilms) => {
  return {
    type: 'FETCH_FILMS_SUCCESS',
    payload: {
      newFilms
    }
  };
};

const moreFilmsLoaded = (moreNewFilms) => {
  return {
    type: 'FETCH_MORE_FILMS_SUCCESS',
    payload: {
      moreNewFilms
    }
  };
};

const filmsError = (errorFilms) => {
  return {
    type: 'FETCH_FILMS_FAILURE',
    payload: {
      errorFilms
    }
  };
};

const fetchFilms = (apiAdapter, dispatch) => (page) => {
  dispatch(filmsRequested());

  apiAdapter.getAllFilms(page)
    .then((data) => dispatch(filmsLoaded(data)))
    .catch((error) => dispatch(filmsError(error)));
};

const fetchMoreFilms = (apiAdapter, dispatch) => (page) => {
  apiAdapter.getAllFilms(page)
    .then((data) => dispatch(moreFilmsLoaded(data)))
    .catch((error) => dispatch(filmsError(error)));
};

export {
  fetchFilms,
  fetchMoreFilms
};
