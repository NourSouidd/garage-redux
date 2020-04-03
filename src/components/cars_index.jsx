import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

class CarsIndex extends Component {
  renderPosts() {
    return this.props.cars.map((car) => {
      return (
        <div className="card-product">
          <img src="" alt="" />
          <div className="card-product-infos">
            <h2>{car.brand} - {car.model}</h2>
            <p>Owner: {car.owner}</p>
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
  return { cars: state.cars };
}
export default connect(mapStateToProps)(CarsIndex);
