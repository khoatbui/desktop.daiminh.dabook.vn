import axios from 'axios';

const TravelStyle = {
  getAllTravelStyle() {
    return axios.get('http://103.237.144.222:3000/travelstyle/getused');
  },
  getTravelStyleById(parram) {
    return axios.get('http://103.237.144.222:3000/travelstyle/m/gettravelstylebyid/' + parram);
  },
};

export default TravelStyle;
