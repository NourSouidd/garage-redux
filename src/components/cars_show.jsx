import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CarsShow extends Component {
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

export default CarsShow;
