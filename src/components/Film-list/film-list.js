import React, { Component } from "react";
import { connect } from 'react-redux';

import FilmListItem from "../film-list-item";
import { withFilmsService } from '../hoc';
import { filmsLoaded } from "../../actions";
import { compose } from "../../utils";

import './film-list.css'

class FilmList extends Component {

  componentDidMount() {
    const { apiAdapter } = this.props;

    apiAdapter.getAllFilms().then((data) => this.props.filmsLoaded(data));
  }

  render() {
    const { films } = this.props;

    return (
      <ul className="film-list">
        {
          films.map((film) => {
            return (
              <li key={film.id}>
                <FilmListItem film={film} />
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({ films }) => {
  return { films }
};

const mapDispatchToProps = {
  filmsLoaded
};

export default compose(
  withFilmsService(),
  connect(mapStateToProps, mapDispatchToProps)
)(FilmList);
