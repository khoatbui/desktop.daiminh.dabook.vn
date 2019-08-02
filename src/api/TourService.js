import axios from 'axios';

const api = 'http://103.237.144.222:3000';
const Tour = {
  getAllTour() {
    return axios.get(`${api}/tour/`);
  },
  getTopTour() {
    return axios.get(`${api}/tour/m/getlisttourpromotion`);
  },
  getTopPromotionTourPackage() {
    return axios.get(`${api}/tourlist/m/getalltourpromotion`);
  },
  getTourPackageByDestination(destinationId) {
    return axios.get(`${api}/tourlist/m/getalltourbydestination/${destinationId}`);
  },
  getTourPackageByStyle(travelStyleId) {
    return axios.get(`${api}/tourlist/m/getalltourbystyle/${travelStyleId}`);
  },
};

export default Tour;
