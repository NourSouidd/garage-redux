import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }


  renderCars() {
    if (this.props.cars.length === 0) {
      return [
        <Link className="btn btn-primary" to="/cars/new">Add a car!</Link>,
        <div className="no-car" key="nocar">No car yet</div>
      ];
    }
    return this.props.cars.map((car) => {
      return (
        <div>
          <Link to={`/cars/${car.id}`} key={car.id}>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{car.brand} - {car.model}</h2>
                <p className="card-text"> <strong>Owner:</strong> {car.owner}</p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.renderCars()}
        </div>
        <Link className="btn btn-primary btn-cta" to="/cars/new">
          Add a car!
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
