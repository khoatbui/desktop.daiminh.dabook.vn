import axios from 'axios';

const api = 'http://103.237.144.222:3000';
const City = {
  getAllCity() {
    return axios.get(`${api}/city`);
  },
  getTopCity() {
    return axios.get(`${api}/city/m/gettop10city`);
  },
  getCityById(cityId) {
    return axios.get(`${api}/city/m/getcitybyid/${cityId}`);
  },
};

export default City;
