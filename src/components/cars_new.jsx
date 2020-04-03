import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, (car) => {
      this.props.history.push('/');
      return car;
    });
  }

  renderForm() {
    const required = value => value ? undefined : 'Required';
    return (
      <div key="add" className="form-container">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <Field
              className="form-control"
              name="brand"
              type="text"
              component="input"
              validate={required}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <Field
              className="form-control"
              name="model"
              type="text"
              component="input"
              validate={required}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <Field
              className="form-control"
              name="owner"
              type="text"
              component="input"
              validate={required}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <Field
              className="form-control"
              name="plate"
              type="text"
              component="input"
              validate={required}
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
          >
            Add car
          </button>
        </form>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderForm()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
