const initialState = {
  films: [],
  loading: true,
  errorFilms: null
};

const films = (state = initialState, action) => {

  switch (action.type) {

    case 'FETCH_FILMS_REQUEST':
      return {
        ...state,
        loading: true,
        errorFilms: null
      };

    case 'FETCH_FILMS_SUCCESS':
      const { payload: { newFilms } } = action;

      return {
        films: newFilms,
        loading: false,
        errorFilms: null
      };

    case 'FETCH_MORE_FILMS_SUCCESS':
      const { payload: { moreNewFilms } } = action;
      const { films } = state;
      const moreFilms = films.concat(moreNewFilms);

      return {
        ...state,
        films: moreFilms,
        errorFilms: null
      };

    case 'FETCH_FILMS_FAILURE':
      const { payload: { errorFilms } } = action;

      return {
        ...state,
        loading: false,
        errorFilms
      };

    default:
      return state;
  }
};

export default films;
