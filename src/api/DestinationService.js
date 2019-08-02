import axios from 'axios';
// 'http://103.237.144.222:3000';
const api = 'http://103.237.144.222:3000';

const Destination = {
  getAllDestination() {
    return axios.get(api + '/destination/');
  },
  getDestinationById(parram) {
    return axios.get(api + '/destination/m/getdestinationbyid/' + parram);
  },
  getTopDestination() {
    return axios.get(api + '/destination/m/gettop10destination');
  },
  getDestinationByAreaCountry(parram) {
    return axios.get(api + '/destination/m/getdestinationbyareacountry/' + parram);
  },
};

export default Destination;
