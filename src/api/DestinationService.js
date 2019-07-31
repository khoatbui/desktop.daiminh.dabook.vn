import axios from 'axios';

const Destination = {
  getAllDestination() {
    return axios.get('http://103.237.144.222:3000/payment');
  },
  getTopDestination() {
    return axios.get('http://103.237.144.222:3000/destination/m/gettop10destination');
  },
};

export default Destination;
