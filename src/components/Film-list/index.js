import FilmList from './film-list';
import { connect } from 'react-redux';

import { fetchFilms, fetchMoreFilms } from '../../actions/films.actions';
import { fetchGenres } from '../../actions/genres.actions';
import { compose } from '../../utils';
import { withFilmsService } from '../hoc';

const mapStateToProps = ({ films: { films, loading, errorFilms } }) => {
  return { films, loading, errorFilms };
};

const mapDispatchToProps = (dispatch, { apiAdapter }) => {
  return {
    fetchFilms: fetchFilms(apiAdapter, dispatch),
    fetchMoreFilms: fetchMoreFilms(apiAdapter, dispatch),
    fetchGenres: fetchGenres(apiAdapter, dispatch)
  };
};

export default compose(
  withFilmsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(FilmList);
