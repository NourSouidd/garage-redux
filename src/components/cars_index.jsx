import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { Link } from 'react-router-dom';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garageName);
  }

  renderPosts() {
    return this.props.cars.map((car) => {
      return (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{car.brand} - {car.model}</h2>
            <p className="card-text">Owner: {car.owner}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garageName: state.garageName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
