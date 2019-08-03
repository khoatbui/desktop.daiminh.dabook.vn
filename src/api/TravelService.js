import axios from 'axios';

const api = 'http://103.237.144.222:3000';
const TravelService = {
  getAllTravelService() {
    return axios.get(`${api}/travelservice`);
  },
  getTravelServiceById(parram) {
    return axios.get(`${api}/travelservice/m/gettravelservicebyid/${parram}`);
  },
};

export default TravelService;
