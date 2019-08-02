import axios from 'axios';

const Destination = {
  getAllDestination() {
    return axios.get('http://103.237.144.222:3000/destination/');
  },
  getDestinationById(parram) {
    return axios.get('http://103.237.144.222:3000/destination/m/getdestinationbyid/' + parram);
  },
  getTopDestination() {
    return axios.get('http://103.237.144.222:3000/destination/m/gettop10destination');
  },
  getDestinationByAreaCountry(parram) {
    return axios.get('http://103.237.144.222:3000/destination/m/getdestinationbyareacountry' + parram);
  },
};

export default Destination;
