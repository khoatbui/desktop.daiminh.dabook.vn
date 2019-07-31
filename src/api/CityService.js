import axios from 'axios';

const City = {
  getAllCity() {
    return axios.get('http://103.237.144.222:3000/payment');
  },
  getTopCity() {
    return axios.get('http://103.237.144.222:3000/city/m/gettop10city');
  },
};

export default City;
