import axios from 'axios';

const TravelStyle = {
  getAllTravelStyle() {
    return axios.get('http://103.237.144.222:3000/travelstyle/');
  },
  getTravelStyleById(parram) {
    return axios.get('http://103.237.144.222:3000/travelstyle/m/gettravelstylebyid/' + parram);
  },
  getTopTravelStyle() {
    return axios.get('http://103.237.144.222:3000/travelstyle/m/gettop10travelstyle');
  },
};

export default TravelStyle;
