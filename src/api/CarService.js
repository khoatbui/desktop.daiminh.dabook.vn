import axios from 'axios';

const api = 'http://103.237.144.222:3000';
const Car = {
  getAllCar() {
    return axios.get(`${api}/car/getused`);
  },
  getCarById(parram) {
    return axios.get(`${api}/car/m/getcarbyid/${parram}`);
  },
  getTop10PromotionCar() {
    return axios.get(`${api}/cardetailprice/m/getallpromotioncarprice`);
  },
  getCarType() {
    return axios.get(`${api}/cartype/getused`);
  },
  getAllCarTrip() {
    return axios.get(`${api}/cardetailprice/getused`);
  },
  getCarTripById(parram) {
    return axios.get(`${api}/cardetailprice/getcarpricebyid/${parram}`);
  },
  getTransType() {
    return axios.get(`${api}/cartranstype/getused`);
  },
};

export default Car;
