import axios from 'axios';

const api = 'http://103.237.144.222:3000';
const TravelStyle = {
  getAllTravelStyle() {
    return axios.get(`${api}/travelstyle/getused`);
  },
  getTravelStyleById(parram) {
    return axios.get(`${api}/travelstyle/m/gettravelstylebyid/${parram}`);
  },
};

export default TravelStyle;
