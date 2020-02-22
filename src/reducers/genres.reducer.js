const initialState = {
  genres: [],
  errorGenres: null
};

const genres = (state = initialState, action) => {

  switch (action.type) {

    case 'FETCH_GENRES_SUCCESS':
      const { payload: { genres } } = action;

      return {
        genres,
        errorGenres: null
      };

    case 'FETCH_GENRES_FAILURE':
      const { payload: { errorGenres } } = action;

      return {
        ...state,
        errorGenres
      };

    default:
      return state;
  }
};

export default genres;
