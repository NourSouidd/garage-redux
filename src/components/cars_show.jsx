import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { deleteCar } from '../actions/index';


class CarsShow extends Component {
  handleClick = () => {
    const history = this.props.history;
    const car = this.props.car;
    this.prop.deleteCar(history, car);
  }

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
        <button className="btn" onClick={this.handleClick} >
          Delete car
        </button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  return {
    car: state.cars.find(c => c.id === idFromUrl),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
