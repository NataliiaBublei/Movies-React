import React, { Component } from 'react';

import './rating.css';

class Rating extends Component {
  state = {
    rating: this.props.rating || null,
    temp_rating: null
  };

  render() {
    let stars = [];

    for (let i = 0; i < 5; i++) {
      let klass = 'star-rating__star';

      if (this.state.rating / 2 >= i && this.state.rating != null) {
        klass += ' is-selected';
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

export default Rating;
