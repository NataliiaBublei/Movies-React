const genresLoaded = (genres) => {
  return {
    type: 'FETCH_GENRES_SUCCESS',
    payload: {
      genres
    }
  };
};

const genresError = (errorGenres) => {
  return {
    type: 'FETCH_GENRES_FAILURE',
    payload: {
      errorGenres
    }
  };
};

const fetchGenres = (apiAdapter, dispatch) => () => {
  apiAdapter.getAllGenres()
    .then((data) => dispatch(genresLoaded(data)))
    .catch((error) => dispatch(genresError(error)));
};

export {
  fetchGenres
};
