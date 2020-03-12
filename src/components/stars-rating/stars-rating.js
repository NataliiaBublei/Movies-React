import React, { Component } from 'react';

import './stars-rating.css';

class StarsRating extends Component {

  state = {
    rating: this.props.rating || null,
    temp_rating: null
  };

  render() {
    let stars = [];

    for (let i = 0; i < 5; i++) {
      let klass = '';

      if (this.state.rating / 2 >= i && this.state.rating != null) {
        klass += 'is-selected';
      }

      stars.push(
        <label className={klass} key={i}>
          ★
        </label>
      );
    }

    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  }
}

export default StarsRating;
