import { FETCH_CARS, DELETE_CAR } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload;
    case DELETE_CAR:
      return state.filter(car => car !== action.payload);
    default:
      return state;
  }
}
