import { combineReducers } from 'redux';

import films from './films.reducer';
import genres from './genres.reducer';

const reducer = combineReducers({
  films,
  genres
});

export default reducer;
