import axios from 'axios';

const api = 'http://103.237.144.222:3000';
const HotelSupplier = {
  getAllHotelSupplier() {
    return axios.get(`${api}/supplier`);
  },
  getTopCity() {
    return axios.get(`${api}/city/m/gettop10city`);
  },
};

export default HotelSupplier;
