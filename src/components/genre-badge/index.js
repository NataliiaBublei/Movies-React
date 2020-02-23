import { connect } from 'react-redux';

import GenreBadge from './genre-badge';
import { fetchGenres } from '../../actions/genres.actions';
import { compose } from '../../utils';
import { withFilmsService } from '../hoc';


const mapStateToProps = ({ genres: { genres: genresArray, errorGenres } }) => {
  return { genresArray, errorGenres };
};

const mapDispatchToProps = (dispatch, { apiAdapter }) => {
  return {
    fetchGenres: fetchGenres(apiAdapter, dispatch)
  };
};

export default compose(
  withFilmsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(GenreBadge);
