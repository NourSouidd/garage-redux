import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class CarsPost extends Component {
  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <div className="post-item">
          <h2>{this.props.car.brand} - {this.props.car.model}</h2>
          <p> <strong>Owner:</strong> {this.props.car.owner}</p>
          <p>{this.props.car.plate}</p>
        </div>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

export default connect(mapStateToProps)(CarsPost);
