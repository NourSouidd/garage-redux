// TODO: add and export your own actions
const ROOT_URL = 'https://wagon-garage-api.herokuapp.com';

export const FETCH_CARS = 'FETCH_CARS';
export const CAR_CREATED = 'CAR_CREATED';
// export const FETCH_CAR = 'FETCH_CAR';
export const DELETE_CAR = 'DELETE_CAR';

export function fetchCars(garage) {
  const promise = fetch(`${ROOT_URL}/${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function deleteCar(history, car) {
  const url = `${ROOT_URL}/cars/${car.id}`;
  fetch(url, { method: 'DELETE' })
    .then(response => response.json())
    .then(() => history.push(""));
  return {
    type: DELETE_CAR,
    payload: car
  };
}

export function createCar(garage, car, callback) {
  const request = fetch(`${ROOT_URL}/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  }).then(response => response.json())
    .then(callback);
  return {
    type: CAR_CREATED,
    payload: request
  };
}

// export function fetchCar(id) {
//   const promise = fetch(`${ROOT_URL}/cars/${id}}`)
//     .then(response => response.json());
//   return {
//     type: FETCH_CAR,
//     payload: promise
//   };
// }

